import { Entity, OneToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Provider } from './provider.entity';

@Entity({ tableName: 'providers_photographer' })
export class ProviderPhotographer {
  @PrimaryKey({ name: 'id' })
  id!: string;

  @Property({ name: 'desc', columnType: 'text' })
  desc!: string;

  @OneToOne({
    entity: () => Provider,
    type: Provider,
    columnType: 'uuid',
    name: 'id',
    inverseJoinColumn: 'id',
    orphanRemoval: true,
  })
  provider!: Provider;
}
