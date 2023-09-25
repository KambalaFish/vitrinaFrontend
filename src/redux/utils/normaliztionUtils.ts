import { IEntityId } from '@interfaces/entities/IEntityId';

const createNormalizedObject = <E extends IEntityId>(entities: E[]) =>
  Object.fromEntries(entities.map((entity) => [entity.id, entity]));

const mapIds = <E extends IEntityId>(entities: E[]) =>
  entities.map((entity) => entity.id);

export { createNormalizedObject, mapIds };
