import { TestBed } from '@angular/core/testing';

import { JavaapiServiceService } from './javaapi-service.service';

describe('JavaapiServiceService', () => {
  let service: JavaapiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JavaapiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
