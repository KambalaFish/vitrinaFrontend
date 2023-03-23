import { CustomClassNameProp } from '@interfaces/props/common/CustomClassNameProp';
import { CustomHTMLProps } from '@interfaces/other/CustomHTMLProps';
import { ChildrenProp } from '@interfaces/props/common/ChildrenProp';
import { FormHTMLAttributes } from 'react';

export interface FormProps
  extends CustomHTMLProps<HTMLFormElement, FormHTMLAttributes<HTMLFormElement>>,
    CustomClassNameProp,
    ChildrenProp {}
