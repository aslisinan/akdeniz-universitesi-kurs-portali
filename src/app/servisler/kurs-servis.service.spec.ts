import { TestBed } from '@angular/core/testing';

import { KursServisService } from './kurs-servis.service';

describe('KursServisService', () => {
  let service: KursServisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KursServisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
