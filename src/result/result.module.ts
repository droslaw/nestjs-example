import { Module } from '@nestjs/common';
import { AddressModule } from './submodule/address/address.module';
import { IdModule } from './submodule/id/id.module';

@Module({
  imports: [AddressModule, IdModule]
})
export class ResultModule {}
