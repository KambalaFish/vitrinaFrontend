import type { VoidFunction } from '@interfaces/utils/VoidFunction';
export type ThrottledFunction<T extends VoidFunction> = (...args: Parameters<T>) => void;
