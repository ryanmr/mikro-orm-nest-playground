import { EntityRepository } from '@mikro-orm/knex';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { CreateProvider } from './dtos/create-provider.dto';
import { ProviderPhotographer } from './provider-photographer.entity';
import { Provider } from './provider.entity';

@Injectable()
export class ProviderService {
  constructor(
    @InjectRepository(Provider)
    private readonly providerRepository: EntityRepository<Provider>,
    @InjectRepository(ProviderPhotographer)
    private readonly providerPhotographerRepository: EntityRepository<ProviderPhotographer>,
  ) {}

  getAllProviders(): Promise<Provider[]> {
    return this.providerRepository.findAll();
  }

  getAllPhotographerProviders() {
    return this.providerPhotographerRepository.findAll(['provider']);
  }

  async createProvider(dto: CreateProvider) {
    const min = 1_100_000;
    const max = 9_900_000;
    const publicId = '' + Math.random() * (max - min) + min;

    const provider: Omit<Provider, 'id'> = {
      ...dto,
      publicId,
    };

    await this.providerRepository.persistAndFlush(provider);

    console.log(provider);

    return provider;
  }
}
