import { Module } from '@nestjs/common';
import { MapperService } from './mapper/mapper.service';
import { CoreModule } from 'src/core/core.module';

@Module({
  imports: [CoreModule],
  providers: [MapperService]
})
export class IdModule {}
