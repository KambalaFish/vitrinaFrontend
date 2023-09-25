import { Id } from '@interfaces/other/Id';
import { IEntityId } from '@interfaces/entities/IEntityId';

export interface NormalizedState<T extends IEntityId> {
  ids: Id[];
  byId: {
    [key: Id]: T;
  };
}
