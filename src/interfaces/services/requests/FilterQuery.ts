import { AnyObject } from '@interfaces/utils/AnyObject';

type QueryValue<Value> =
  | Value
  | Value[]
  | (Value extends (infer ArrayType)[] ? ArrayType : any)
  | any;

export type FilterQuery<Entity> = {
  [EntityProperty in keyof Entity]?: QueryValue<Entity[EntityProperty]>;
} & AnyObject;
