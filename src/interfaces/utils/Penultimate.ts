import { Last, Reverse, Tail } from 'typescript-tuple';

type Penultimate<Tuple extends any[]> = Last<Reverse<Tail<Reverse<Tuple>>>>;

export type { Penultimate };
