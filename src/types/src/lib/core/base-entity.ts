export interface IBaseEntity {
    id?: string;
    createdAt?: string,
    updatedAt?: string,
}

export interface ISoftDeleteBaseEntity extends IBaseEntity {
    deletedAt?: string,
}

export interface ISeoBaseEntity extends IBaseEntity {
    metaKeyword?: string,
    metaTitle?: string,
    metaDescription?: string,
}
