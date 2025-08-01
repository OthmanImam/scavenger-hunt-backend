import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeasonsService } from './seasons.service';
import { SeasonsController } from './seasons.controller';
import { Season } from './entities/season.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Season])],
  controllers: [SeasonsController],
  providers: [SeasonsService],
})
export class SeasonsModule {}
