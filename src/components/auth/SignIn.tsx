import {
  auth,
  authButton as auth__button,
  authError as auth__error,
  authText as auth__text,
  authTextHighlighted as auth__text_highlighted,
  authTextSmall as auth__text_small,
  authTitle as auth__title,
} from '@styles/pages/auth.module.scss';
import { formAuth as form_auth } from '@styles/components/form.module.scss';
import { Form } from '@components/uiKit/inputs/Form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SignInInput, signInSchema } from '@validations/auth.schemas';
import { PasswordGroup } from '@components/auth/PasswordGroup';
import { EmailGroup } from '@components/auth/EmailGroup';
import { PrimaryButton } from '@components/uiKit/buttons/PrimaryButton';
import { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useOutletContext } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { signInRequest, userSliceActions } from '@redux/user/user.actions';
import { useAppSelector } from '@hooks/useAppSelector';
import {
  selectUserRequestError,
  selectUserRequestStatus,
} from '@redux/user/user.selectors';
import {
  buttonAwaiting as button_awaiting,
  buttonDisabledGray as button_disabledGray,
} from '@styles/components/button.module.scss';
import { RequestStatus } from '@interfaces/redux/other/requestStatus';
import { ServersideError } from '@components/uiKit/inputs/ServersideError';
import { AuthModalOutletContext } from '@interfaces/contexts/AuthModalOutletContext';
import { MODAL_TRANSITION_MS } from '@components/uiKit/ModalWindow';
import { NotificationContext } from '@utils/notifications/NotificationContext';
import { INotificationContext } from '@interfaces/contexts/NotificationContext';
import { pushNotification } from '@utils/notifications/notification.actions';
import { createSuccessNotification } from '@utils/notifications/notificationCreators';

const SignIn = () => {
  const [isPassVisible, setPassVisibility] = useState(true);
  const dispatch = useDispatch();
  const userRequestStatus = useAppSelector(selectUserRequestStatus);
  const { message: errorMessage } = useAppSelector(selectUserRequestError);
  const { setModalVisibility } = useOutletContext<AuthModalOutletContext>();
  const notificationsDispatch = useContext<INotificationContext>(NotificationContext);
  const { state } = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInput>({
    mode: 'onBlur',
    resolver: yupResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  useEffect(() => {
    if (userRequestStatus === RequestStatus.succeeded) {
      setModalVisibility(false);
      setTimeout(() => {
        notificationsDispatch(
          pushNotification(
            createSuccessNotification({
              message: 'Вход выполнен успешно.',
              unmountTimeoutMs: 3000,
            })
          )
        );
      }, MODAL_TRANSITION_MS);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userRequestStatus]);

  const signInHandler: SubmitHandler<SignInInput> = (data) => {
    if (userRequestStatus === RequestStatus.failed) {
      dispatch(userSliceActions.resetState());
    }
    dispatch(signInRequest(data));
  };

  return (
    <div className={auth}>
      <div className={auth__title}>Вход</div>
      <Form
        customClassName={form_auth}
        name={'signIn'}
        onSubmit={handleSubmit(signInHandler)}
      >
        <EmailGroup errorMessage={errors.email?.message} {...register('email')} />
        <PasswordGroup
          id={'password'}
          label={'Пароль'}
          isPassVisible={isPassVisible}
          setPassVisibility={setPassVisibility}
          errorMessage={errors.password?.message}
          {...register('password')}
        />
        {userRequestStatus === RequestStatus.failed && (
          <ServersideError customClassName={auth__error} errorMessage={errorMessage} />
        )}
        <PrimaryButton
          type={'submit'}
          disabled={userRequestStatus === RequestStatus.pending}
          customClassName={[
            auth__button,
            {
              [button_awaiting]: userRequestStatus === RequestStatus.pending,
              [button_disabledGray]: userRequestStatus === RequestStatus.pending,
            },
          ]}
        >
          войти
        </PrimaryButton>
      </Form>
      <p className={cn(auth__text, auth__text_small)}>
        У меня нет аккаунта -{' '}
        <Link to={'/sign-up'} state={state}>
          <span className={auth__text_highlighted}>зарегистрироваться</span>
        </Link>
        .
      </p>
    </div>
  );
};

export { SignIn };
