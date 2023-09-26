import type { ActionPattern } from '@redux-saga/types';
import { take, cancel, fork, AllButLast, call } from '@redux-saga/core/effects';
import type { Task } from 'redux-saga';
import { Action, PayloadAction } from '@reduxjs/toolkit';
import { Penultimate } from '@interfaces/utils/Penultimate';
import { Last } from 'typescript-tuple';

/*abortSignal must be the last argument of function passed as saga to takeLatestAbortable
 * action object must be penultimate argument if function
 * */
type TakeLatestSagaParameters<Abort, Action, Fn extends (...args: any[]) => any> = Last<
  Parameters<Fn>
> extends Abort
  ? Penultimate<Parameters<Fn>> extends Action
    ? AllButLast<AllButLast<Parameters<Fn>>>
    : AllButLast<Parameters<Fn>>
  : Last<Parameters<Fn>> extends Action
  ? AllButLast<Parameters<Fn>>
  : Parameters<Fn>;

export const takeLatestAbortable = <
  P extends ActionPattern,
  Fn extends (...args: any) => any
>(
  pattern: P,
  saga: Fn,
  ...args: TakeLatestSagaParameters<AbortSignal, Action, Fn>
) =>
  fork(function* () {
    let currentRunningTask: Task | null = null;
    let abortController = new AbortController();
    while (true) {
      const action: PayloadAction = yield take(pattern);
      if (currentRunningTask) {
        yield call([abortController, abortController.abort]);
        yield cancel(currentRunningTask);
        abortController = new AbortController();
      }
      currentRunningTask = yield fork(
        saga,
        ...args.concat([action, abortController.signal])
      );
    }
  });
