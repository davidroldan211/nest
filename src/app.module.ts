import { Module } from '@nestjs/common';
import { PokemonModule } from './pokemon/pokemon.module';

import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { ConfigModule } from '@nestjs/config';
import { envs } from './config';
import { Pokemon } from './pokemon/entities/pokemon.entity';


@Module({
  imports: [
    ConfigModule.forRoot({
  
    }),
    MongooseModule.forRoot(envs.mongodb,{
      dbName: 'Pokemondb'
    }),
    PokemonModule,
    CommonModule,
    SeedModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
