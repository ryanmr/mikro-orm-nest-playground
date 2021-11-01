import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ tableName: 'providers' })
export class Provider {
  @PrimaryKey({ name: 'id' })
  id!: string;

  @Property({ name: 'public_id', columnType: 'varchar(10)' })
  publicId!: string;

  @Property({ name: 'display_name', columnType: 'text' })
  displayName!: string;
}
