import { LabelHTMLAttributes } from 'react';
import { CustomHTMLProps } from '@interfaces/other/CustomHTMLProps';
import { CustomClassNameProp } from '@interfaces/props/common/CustomClassNameProp';
import { ErrorMessageProp } from '@interfaces/props/common/ErrorMessageProp';

export interface ValidationInfoProps
  extends CustomHTMLProps<HTMLLabelElement, LabelHTMLAttributes<HTMLLabelElement>>,
    CustomClassNameProp,
    ErrorMessageProp {}
