import { CustomHTMLProps } from '@interfaces/other/CustomHTMLProps';
import { InputHTMLAttributes } from 'react';
import { CustomClassNameProp } from '@interfaces/props/common/CustomClassNameProp';
import { ErrorMessageProp } from '@interfaces/props/common/ErrorMessageProp';

export interface InputProps
  extends CustomHTMLProps<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>,
    Required<CustomClassNameProp>,
    ErrorMessageProp {}
