import { Test, TestingModule } from '@nestjs/testing';
import { RegistrationFormService } from './registration-form.service';

describe('RegistrationFormService', () => {
  let service: RegistrationFormService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegistrationFormService],
    }).compile();

    service = module.get<RegistrationFormService>(RegistrationFormService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
