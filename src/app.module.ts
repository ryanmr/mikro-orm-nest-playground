import { ReflectMetadataProvider } from '@mikro-orm/core';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProvidersModule } from './providers/providers.module';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      dbName: 'postgres',
      user: 'postgres',
      password: 'postgres',
      type: 'postgresql',
      autoLoadEntities: true,
      port: 6501,
      host: 'localhost',
      // metadataProvider: ReflectMetadataProvider,
    }),
    // MikroOrmModule.forFeature([Provider]),
    ProvidersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
