import { EntityRepository } from '@mikro-orm/knex';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Body, Controller, Get, Injectable, Post } from '@nestjs/common';
import { CreateProvider } from './dtos/create-provider.dto';
import { ProviderService } from './provider.service';

@Controller('/providers')
export class ProviderController {
  constructor(private readonly providerService: ProviderService) {}

  @Get()
  getProviders() {
    return this.providerService.getAllProviders();
  }

  @Get('photographers')
  getProviderPhotographers() {
    return this.providerService.getAllPhotographerProviders();
  }

  @Post()
  createProvider(@Body() provider: CreateProvider) {}
}
