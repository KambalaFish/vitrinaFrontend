import {
  auth,
  authTitle,
  authLabel,
  authInput,
  authButton,
  authValidationinfo,
  authError,
} from '@styles/pages/auth.module.scss';
import { formAuth } from '@styles/components/form.module.scss';
import { PrimaryButton } from '@components/uiKit/buttons/PrimaryButton';
import { Form } from '@components/uiKit/inputs/Form';
import { FormGroup } from '@components/uiKit/inputs/FormGroup';
import { Input } from '@components/uiKit/inputs/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Label } from '@components/uiKit/inputs/Label';
import { ValidationInfo } from '@components/uiKit/inputs/ValidationInfo';
import { PasswordGroup } from '@components/auth/PasswordGroup';
import { EmailGroup } from '@components/auth/EmailGroup';
import { useContext, useState } from 'react';
import cn from 'classnames';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { SignUpInput, signUpSchema } from '@validations/auth.schemas';
import {
  buttonDisabled,
  buttonPrimaryDisabled,
} from '@styles/components/button.module.scss';
import { ServersideError } from '@components/uiKit/inputs/ServersideError';
import { authService } from '@services/auth.service';
import { isApiResponseErrorBody } from '@interfaces/services/ApiResponse';
import { useOutletContext } from 'react-router-dom';
import { AuthModalOutletContext } from '@interfaces/contexts/AuthModalOutletContext';
import { MODAL_TRANSITION_MS } from '@components/uiKit/ModalWindow';
import { NotificationContext } from '@utils/notifications/NotificationContext';
import { INotificationContext } from '@interfaces/contexts/NotificationContext';
import { createSuccessNotification } from '@utils/notifications/notificationCreators';
import { pushNotification } from '@utils/notifications/notification.actions';
import { IUser } from '@interfaces/entities/user/IUser';

const SignUp = () => {
  const [isPasswordVisible, setPasswordVisibility] = useState(true);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [signUpErrorMessage, setSignUpError] = useState<undefined | string>(undefined);
  const { setModalVisibility } = useOutletContext<AuthModalOutletContext>();
  const notificationsDispatch = useContext<INotificationContext>(NotificationContext);
  const signUpHandler: SubmitHandler<SignUpInput> = async (data) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { passwordConfirmation, ...signUpData } = data;
    setIsSigningUp(true);
    setSignUpError(undefined);
    try {
      const { data: user } = (await authService.signUp(signUpData)) as { data: IUser };
      setModalVisibility(false);
      setTimeout(() => {
        notificationsDispatch(
          pushNotification(
            createSuccessNotification({
              message: `${user.name}, регистрация прошла успешно.\n\nДля подтверждения аккаунта проследуйте на электронный адрес ${user.email}`,
              unmountTimeoutMs: 10000,
            })
          )
        );
      }, MODAL_TRANSITION_MS);
    } catch (error) {
      if (isApiResponseErrorBody(error)) {
        setSignUpError(error.data.error.message);
      }
      if (error instanceof Error) {
        setSignUpError(error.message);
      }
    } finally {
      setIsSigningUp(false);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInput>({
    mode: 'onBlur',
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
  });

  return (
    <div className={cn(auth)}>
      <h1 className={authTitle}>Регистрация</h1>
      <Form
        customClassName={[formAuth /*, { [formClosed]: signedUpSuccessfully }*/]}
        name={'signUp'}
        onSubmit={handleSubmit(signUpHandler)}
      >
        <FormGroup>
          <Label customClassName={authLabel} htmlFor={'name'}>
            Имя
          </Label>
          <Input
            customClassName={[authInput]}
            id={'name'}
            {...register('name')}
            placeholder={'Иван'}
            errorMessage={errors.name?.message}
          />
          <ValidationInfo
            customClassName={authValidationinfo}
            htmlFor={'name'}
            errorMessage={errors.name?.message}
          />
        </FormGroup>
        <EmailGroup
          id={'email'}
          errorMessage={errors.email?.message}
          {...register('email')}
        />
        <PasswordGroup
          id={'password'}
          label={'Пароль'}
          isPassVisible={isPasswordVisible}
          setPassVisibility={setPasswordVisibility}
          errorMessage={errors.password?.message}
          {...register('password')}
        />
        <PasswordGroup
          id={'passwordConfirmation'}
          label={'Подтвердите пароль'}
          isPassVisible={isPasswordVisible}
          setPassVisibility={setPasswordVisibility}
          errorMessage={errors.passwordConfirmation?.message}
          {...register('passwordConfirmation')}
        />
        <ServersideError customClassName={authError} errorMessage={signUpErrorMessage} />
        <PrimaryButton
          type={'submit'}
          disabled={isSigningUp}
          customClassName={[
            authButton,
            { [buttonDisabled]: isSigningUp, [buttonPrimaryDisabled]: isSigningUp },
          ]}
        >
          зарегистрироваться
        </PrimaryButton>
      </Form>
    </div>
  );
};

export { SignUp };
