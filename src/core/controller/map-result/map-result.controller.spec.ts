import { Test, TestingModule } from '@nestjs/testing';
import { MapResultController } from './map-result.controller';

describe('MapResult Controller', () => {
  let controller: MapResultController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MapResultController],
    }).compile();

    controller = module.get<MapResultController>(MapResultController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
