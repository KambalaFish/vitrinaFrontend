import { authLabel, authInput, authValidationinfo } from '@styles/pages/auth.module.scss';
import { Label } from '@components/uiKit/inputs/Label';
import { ValidationInfo } from '@components/uiKit/inputs/ValidationInfo';
import { FormGroup } from '@components/uiKit/inputs/FormGroup';
import { forwardRef } from 'react';
import { Input } from '@components/uiKit/inputs/Input';
import { EmailGroupProps } from '@interfaces/props/component/EmailGroupProps';

const EmailGroup = forwardRef<HTMLInputElement, EmailGroupProps>(
  ({ id = 'email', errorMessage, ...register }: EmailGroupProps, ref) => {
    return (
      <FormGroup>
        <Label customClassName={authLabel} htmlFor={id}>
          Электронный адрес
        </Label>
        <Input
          ref={ref}
          customClassName={authInput}
          id={id}
          type={'email'}
          placeholder={'ivanivanov@gmail.com'}
          errorMessage={errorMessage}
          {...register}
        />
        <ValidationInfo
          customClassName={authValidationinfo}
          htmlFor={id}
          errorMessage={errorMessage}
        />
      </FormGroup>
    );
  }
);

EmailGroup.displayName = 'EmailGroup';

export { EmailGroup };
