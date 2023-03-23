import { Dispatch, SetStateAction } from 'react';

export interface AuthModalOutletContext {
  setModalVisibility: Dispatch<SetStateAction<boolean>>;
}
