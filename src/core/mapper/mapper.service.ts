import { Injectable } from '@nestjs/common';
import { Mapper, Data } from '../types';

type GenericMapper = Mapper<object>;

@Injectable()
export class CoreMapperService {
  private mappers: {[type: string]: GenericMapper} = {};

  map(data: Data) {
    const key = data.type;

    if (!this.mappers[key]) {
      throw new Error(`There is no handler for type ${data.type}`);
    }

    const handler = this.mappers[key];
    return handler.handle(data);
  }

  register(type: string, handler: GenericMapper) {
    this.mappers[type] = handler;
  }
}
