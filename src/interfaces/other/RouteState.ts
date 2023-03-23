interface PreviousState {
  pathname: string;
  search: string;
  hash: string;
}

interface RouteState {
  previous: PreviousState;
}

export type { PreviousState, RouteState };
