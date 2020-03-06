import { Module } from '@nestjs/common';
import { CoreMapperService } from './mapper/mapper.service';
import { MapResultController } from './controller/map-result/map-result.controller';

@Module({
  providers: [CoreMapperService],
  controllers: [MapResultController],
  exports: [CoreMapperService],
})
export class CoreModule {}
