import { ChildrenProp } from '@interfaces/props/common/ChildrenProp';

export enum ModalPosition {
  center = 'center',
  top = 'top',
}
export interface ModalWindowProps extends ChildrenProp {
  isVisible: boolean;
  setModalVisibility: (isVisible: boolean) => void;

  onCloseCbAfterTransition?: () => void;
  onCloseCbBeforeTransition?: () => void;

  position?: ModalPosition;
}
