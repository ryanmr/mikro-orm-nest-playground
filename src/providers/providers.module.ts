import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { ProviderPhotographer } from './provider-photographer.entity';
import { ProviderController } from './provider.controller';
import { Provider } from './provider.entity';
import { ProviderService } from './provider.service';

@Module({
  imports: [MikroOrmModule.forFeature([Provider, ProviderPhotographer])],
  providers: [ProviderService],
  controllers: [ProviderController],
})
export class ProvidersModule {}
