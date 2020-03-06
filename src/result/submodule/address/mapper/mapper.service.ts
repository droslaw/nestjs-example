import { Injectable } from '@nestjs/common';
import { Mapper, Result, Data } from 'src/core/types';
import { CoreMapperService } from 'src/core/mapper/mapper.service';

type AddressData = {
  street: string;
};

type AddressResult = Result<AddressData>;

@Injectable()
export class MapperService implements Mapper<AddressData> {
  constructor(coreMapper: CoreMapperService) {
    coreMapper.register('address', this);
  }

  handle(data: Data): AddressResult {
    return {
      result: {
        street: data.data
      },
    };
  }
}
