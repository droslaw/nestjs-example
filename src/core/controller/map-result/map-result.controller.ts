import { Controller, Post, Body } from '@nestjs/common';
import { Data } from 'src/core/types';
import { CoreMapperService } from 'src/core/mapper/mapper.service';

class Dto implements Data {
  type: string;
  data: string;
}

@Controller('map-result')
export class MapResultController {
  constructor(private readonly mapper: CoreMapperService) {}

  @Post()
  map(@Body() data: Dto) {
    return this.mapper.map(data);
  }
}

