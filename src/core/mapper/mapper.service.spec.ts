import { Test, TestingModule } from '@nestjs/testing';
import { CoreMapperService } from './mapper.service';

describe('MapperService', () => {
  let service: CoreMapperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoreMapperService],
    }).compile();

    service = module.get<CoreMapperService>(CoreMapperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
