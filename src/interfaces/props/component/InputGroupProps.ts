import { InputProps } from '@interfaces/props/component/InputProps';
import { CustomClassNameProp } from '@interfaces/props/common/CustomClassNameProp';
import { ChildrenProp } from '@interfaces/props/common/ChildrenProp';

export interface InputGroupProps extends CustomClassNameProp, ChildrenProp {
  inputProps: InputProps;
}
