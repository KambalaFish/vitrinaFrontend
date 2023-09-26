import { IEntityId } from '@interfaces/entities/IEntityId';

interface IProductCardProps extends IEntityId {
  isLazyLoadedImage: boolean;
}

export type { IProductCardProps };
