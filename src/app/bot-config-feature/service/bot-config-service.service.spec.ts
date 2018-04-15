import { TestBed, inject } from '@angular/core/testing';

import { BotConfigService } from './bot-config-service.service';

describe('BotConfigServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BotConfigService]
    });
  });

  it('should be created', inject([BotConfigService], (service: BotConfigService) => {
    expect(service).toBeTruthy();
  }));
});
