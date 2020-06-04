import { TestBed } from '@angular/core/testing';

import { MainBotService } from './main-bot.service';

describe('MainBotService', () => {
  let service: MainBotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainBotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
