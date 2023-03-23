import { ModalPosition } from '@interfaces/props/component/ModalWindowProps';
import { ModalWindow } from '@components/uiKit/ModalWindow';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '@hooks/useAppSelector';
import {
  selectIsUserAuthenticated,
  selectUserRequestStatus,
} from '@redux/user/user.selectors';
import { RequestStatus } from '@interfaces/redux/other/requestStatus';
import { useDispatch } from 'react-redux';
import { userSliceActions } from '@redux/user/user.actions';
import { pages } from '@utils/pages';

const AuthModal = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [isModalOpen, setModalVisibility] = useState(false);
  const userRequestStatus = useAppSelector(selectUserRequestStatus);
  const dispatch = useDispatch();
  const isUserAuthenticated = useAppSelector(selectIsUserAuthenticated);

  useEffect(() => {
    setModalVisibility(true);
  }, []);

  const onCloseCbAfterTransition = () => {
    if (isUserAuthenticated) {
      const protectedFrom = state?.protectedFrom;
      if (protectedFrom) {
        navigate(protectedFrom, { state });
      }
      if (!protectedFrom) {
        navigate(pages.home.path, { state });
      }
    }
    if (!isUserAuthenticated) {
      if (state?.previous.pathname) {
        navigate(state.previous, { state });
      }
      if (!state?.previous.pathname) {
        navigate(pages.home.path, { state });
      }
    }
    if (userRequestStatus === RequestStatus.failed) {
      dispatch(userSliceActions.resetState());
    }
  };

  return (
    <ModalWindow
      isVisible={isModalOpen}
      setModalVisibility={setModalVisibility}
      position={ModalPosition.top}
      onCloseCbAfterTransition={onCloseCbAfterTransition}
    >
      <Outlet context={{ setModalVisibility: setModalVisibility }} />
    </ModalWindow>
  );
};

export { AuthModal };
