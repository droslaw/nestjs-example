import { Injectable } from '@nestjs/common';
import { Mapper, Result, Data } from 'src/core/types';
import { CoreMapperService } from 'src/core/mapper/mapper.service';

type IDData = {
  idNumber: string;
};

type IDResult = Result<IDData>;

@Injectable()
export class MapperService implements Mapper<IDData> {
  constructor(coreMapper: CoreMapperService) {
    coreMapper.register('id', this);
  }

  handle(data: Data): IDResult {
    return {
      result: {
        idNumber: data.data
      },
    };
  }
}
