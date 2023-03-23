import { ErrorMessageProp } from '@interfaces/props/common/ErrorMessageProp';
import { UseFormRegisterReturn } from 'react-hook-form';
import { ReactNode } from 'react';

export interface PasswordGroupProps
  extends ErrorMessageProp,
    Omit<UseFormRegisterReturn<string>, 'ref'> {
  id: string;
  label: ReactNode;
  isPassVisible: boolean;
  setPassVisibility: (v: boolean) => void;
}
