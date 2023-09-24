import {
  authLabel as auth__label,
  authInput as auth__input,
  authValidationinfo as auth__validationInfo,
} from '@styles/pages/auth.module.scss';
import { inputgroupIcon as inputgroup__icon } from '@styles/components/form.module.scss';
import { Label } from '@components/uiKit/inputs/Label';
import { InputGroup } from '@components/uiKit/inputs/InputGroup';
import { ValidationInfo } from '@components/uiKit/inputs/ValidationInfo';
import { FormGroup } from '@components/uiKit/inputs/FormGroup';
import { forwardRef } from 'react';
import { ImUnlocked as LockOpened } from '@react-icons/all-files/im/ImUnlocked';
import { ImLock as LockClosed } from '@react-icons/all-files/im/ImLock';
import { PasswordGroupProps } from '@interfaces/props/component/PasswordGroupProps';

const PasswordGroup = forwardRef<HTMLInputElement, PasswordGroupProps>(
  (
    {
      errorMessage,
      id,
      label,
      isPassVisible,
      setPassVisibility,
      ...passwordRegister
    }: PasswordGroupProps,
    ref
  ) => {
    const passIcon = isPassVisible ? (
      <div className={inputgroup__icon}>
        <LockOpened onClick={() => setPassVisibility(false)} />
      </div>
    ) : (
      <div className={inputgroup__icon}>
        <LockClosed onClick={() => setPassVisibility(true)} />
      </div>
    );
    return (
      <FormGroup>
        <Label customClassName={auth__label} htmlFor={id}>
          {label}
        </Label>
        <InputGroup
          inputProps={{
            customClassName: [auth__input],
            id,
            type: isPassVisible ? 'text' : 'password',
            placeholder: 'qwErty12345',
            errorMessage,
            ...passwordRegister,
          }}
          ref={ref}
        >
          {passIcon}
        </InputGroup>
        <ValidationInfo
          customClassName={auth__validationInfo}
          htmlFor={id}
          errorMessage={errorMessage}
        />
      </FormGroup>
    );
  }
);

PasswordGroup.displayName = 'PasswordGroup';

export { PasswordGroup };
