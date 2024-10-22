import { IBaseEntity } from "./core/base-entity";

export interface IDealCoupon extends IBaseEntity {
  name?: string;
  icon?: string;
  image?: string;
  storeName?: string;
  materialName?: string;
  shop?: string;
  location?: string;
  createdAt?: string,
  click?: number;
  baseURL?: string;
}
