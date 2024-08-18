import { Test, TestingModule } from '@nestjs/testing';
import { WppconnectService } from './wppconnect.service';

describe('WppconnectService', () => {
  let service: WppconnectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WppconnectService],
    }).compile();

    service = module.get<WppconnectService>(WppconnectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
