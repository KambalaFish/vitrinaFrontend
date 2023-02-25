import type { VoidFunction } from '@interfaces/utils/VoidFunction';
import { ThrottledFunction } from '@interfaces/utils/ThrottledFunction';

const throttle = <T extends VoidFunction>(
  fn: T,
  rateLimitterMs: number
): ThrottledFunction<T> => {
  let shouldWait = false;
  let previousWaitingArguments: unknown[] | null = null;

  const timeoutCb = () => {
    if (previousWaitingArguments !== null) {
      fn(...previousWaitingArguments);
      previousWaitingArguments = null;
      setTimeout(timeoutCb, rateLimitterMs);
    }
    if (previousWaitingArguments === null) {
      shouldWait = false;
    }
  };

  return (...args) => {
    if (!shouldWait) {
      fn(...args);
      shouldWait = true;
      setTimeout(timeoutCb, rateLimitterMs);
    }
    if (shouldWait) {
      previousWaitingArguments = args;
    }
  };
};

export { throttle };
