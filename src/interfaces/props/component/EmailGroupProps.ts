import { ErrorMessageProp } from '@interfaces/props/common/ErrorMessageProp';
import { UseFormRegisterReturn } from 'react-hook-form';

export interface EmailGroupProps
  extends ErrorMessageProp,
    Omit<UseFormRegisterReturn<'email'>, 'ref'> {
  id?: string;
}
