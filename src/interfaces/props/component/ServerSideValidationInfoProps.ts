import { CustomHTMLProps } from '@interfaces/other/CustomHTMLProps';
import { HTMLAttributes } from 'react';
import { CustomClassNameProp } from '@interfaces/props/common/CustomClassNameProp';
import { ErrorMessageProp } from '@interfaces/props/common/ErrorMessageProp';

export interface ServerSideValidationInfoProps
  extends CustomHTMLProps<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>,
    CustomClassNameProp,
    ErrorMessageProp {}
