import { LabelHTMLAttributes } from 'react';
import { CustomHTMLProps } from '@interfaces/other/CustomHTMLProps';
import { CustomClassNameProp } from '@interfaces/props/common/CustomClassNameProp';
import { ChildrenProp } from '@interfaces/props/common/ChildrenProp';

export interface LabelProps
  extends CustomHTMLProps<HTMLLabelElement, LabelHTMLAttributes<HTMLLabelElement>>,
    CustomClassNameProp,
    ChildrenProp {}
