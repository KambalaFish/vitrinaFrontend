import type { AppState } from '@redux/store';
import type { TypedUseSelectorHook } from 'react-redux';
import { useSelector } from 'react-redux';

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
