import { TestBed } from '@angular/core/testing';

import { PeliculaFirebaseService } from './pelicula-firebase.service';

describe('PeliculaFirebaseService', () => {
  let service: PeliculaFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeliculaFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
