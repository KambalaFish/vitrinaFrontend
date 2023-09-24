import { InputGroupProps } from '@interfaces/props/component/InputGroupProps';
import {
  inputgroup,
  inputgroupInput as inputgroup__input,
} from '@styles/components/form.module.scss';
import cn from 'classnames';
import { Input } from '@components/uiKit/inputs/Input';
import { forwardRef } from 'react';

const InputGroup = forwardRef<HTMLInputElement, InputGroupProps>(
  (
    {
      customClassName,
      children,
      inputProps: { customClassName: inputClassNames, ...rest },
    }: InputGroupProps,
    ref
  ) => {
    return (
      <div className={cn(inputgroup, customClassName)}>
        <Input
          ref={ref}
          customClassName={[inputgroup__input, inputClassNames]}
          {...rest}
        />
        {children}
      </div>
    );
  }
);

InputGroup.displayName = 'InputGroup';

export { InputGroup };
