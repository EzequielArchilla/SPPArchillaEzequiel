import { TestBed } from '@angular/core/testing';

import { ImagenFirebaseService } from './imagen-firebase.service';

describe('ImagenFirebaseService', () => {
  let service: ImagenFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagenFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
