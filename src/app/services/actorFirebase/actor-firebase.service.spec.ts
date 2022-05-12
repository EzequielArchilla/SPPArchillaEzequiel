import { TestBed } from '@angular/core/testing';

import { ActorFirebaseService } from './actor-firebase.service';

describe('ActorFirebaseService', () => {
  let service: ActorFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActorFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
