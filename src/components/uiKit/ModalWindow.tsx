import {
  modal,
  modalBody as modal__body,
  modalBodyClosable as modal__body_closable,
  modalBodyNonClosable as modal__body_nonClosable,
  modalContent as modal__content,
  modalOpened as modal_opened,
  modalClosed as modal_closed,
  modalButton as modal__button,
  modalContentPositionTop as modal__content_positionTop,
  modalContentPositionCenter as modal__content_positionCenter,
} from '@styles/components/modal.module.scss';
import {
  button,
  buttonRounded as button_rounded,
} from '@styles/components/button.module.scss';
import {
  ModalPosition,
  ModalWindowProps,
} from '@interfaces/props/component/ModalWindowProps';
import cn from 'classnames';
import {
  KeyboardEventHandler,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

const modalNode = document.querySelector('#modal');
const MODAL_TRANSITION_MS = 300;

const ModalWindow = ({
  isVisible,
  setModalVisibility,
  children,
  onCloseCbBeforeTransition,
  onCloseCbAfterTransition,
  position = ModalPosition.center,
}: ModalWindowProps) => {
  const [pointerEvents, setPointerEvents] = useState(false);
  const modalContainer = useRef<HTMLDivElement>(null);
  /*wasModalOpened ref is required for cases when isVisible state
   * is set to false as initial value of useState hook in parent component.
   * This ref helps to track if modal was actually closed in useEffects below. */
  const wasModalOpened = useRef(false);

  const onClose = () => {
    setModalVisibility(false);
    setPointerEvents(false);
  };

  const onOutOfContentAreaClick: MouseEventHandler = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  useEffect(() => {
    if (isVisible && modalContainer.current) {
      modalContainer.current.focus();
    }
  });

  useEffect(() => {
    const scrollableContainer = document.querySelector<HTMLElement>('html');
    if (scrollableContainer) {
      if (isVisible) {
        scrollableContainer.style.overflowY = 'hidden';
      }
      if (!isVisible && wasModalOpened.current) {
        setTimeout(() => {
          scrollableContainer.style.overflowY = 'auto';
        }, MODAL_TRANSITION_MS);
      }
    }
  }, [isVisible, onCloseCbAfterTransition, onCloseCbBeforeTransition]);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setPointerEvents(true), MODAL_TRANSITION_MS);
      wasModalOpened.current = true;
    }
    if (!isVisible && wasModalOpened.current) {
      if (onCloseCbBeforeTransition) {
        onCloseCbBeforeTransition();
      }
      if (onCloseCbAfterTransition) {
        setTimeout(onCloseCbAfterTransition, MODAL_TRANSITION_MS);
      }
      wasModalOpened.current = false;
    }
  }, [isVisible, onCloseCbAfterTransition, onCloseCbBeforeTransition]);

  const handleEscapeKey: KeyboardEventHandler = (event) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  return createPortal(
    <div
      className={cn(modal, { [modal_opened]: isVisible, [modal_closed]: !isVisible })}
      onKeyDown={handleEscapeKey}
      tabIndex={-1}
      ref={modalContainer}
    >
      <div
        className={cn(modal__body, {
          [modal__body_closable]: pointerEvents,
          [modal__body_nonClosable]: !pointerEvents,
        })}
        onClick={onOutOfContentAreaClick}
      >
        <div
          className={cn(modal__content, {
            [modal__content_positionTop]: ModalPosition.top === position,
            [modal__content_positionCenter]: ModalPosition.center === position,
          })}
        >
          <button
            type={'button'}
            className={cn(button, button_rounded, modal__button)}
            onClick={onClose}
          />
          {children}
        </div>
      </div>
    </div>,
    modalNode!
  );
};

export { ModalWindow, MODAL_TRANSITION_MS };
