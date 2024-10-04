import { Test, TestingModule } from '@nestjs/testing';
import { RegistrationFormController } from './registration-form.controller';
import { RegistrationFormService } from './registration-form.service';

describe('RegistrationFormController', () => {
  let controller: RegistrationFormController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegistrationFormController],
      providers: [RegistrationFormService],
    }).compile();

    controller = module.get<RegistrationFormController>(RegistrationFormController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
