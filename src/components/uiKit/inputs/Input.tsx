import { InputProps } from '@interfaces/props/component/InputProps';
import {
  formInput as form__input,
  formInputInvalid as form__input_invalid,
} from '@styles/components/form.module.scss';
import cn from 'classnames';
import { forwardRef } from 'react';

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      customClassName,
      id,
      type = 'text',
      autoComplete = 'off',
      errorMessage,
      ...rest
    }: InputProps,
    ref
  ) => {
    return (
      <input
        className={cn(
          form__input,
          { [form__input_invalid]: !!errorMessage },
          customClassName
        )}
        id={id}
        type={type}
        autoComplete={autoComplete}
        ref={ref}
        {...rest}
      />
    );
  }
);

Input.displayName = 'Input';

export { Input };
