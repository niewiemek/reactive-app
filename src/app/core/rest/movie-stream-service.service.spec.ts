import { TestBed } from '@angular/core/testing';

import { MovieStreamService } from './movie-stream.service';

describe('MovieStreamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieStreamService = TestBed.get(MovieStreamService);
    expect(service).toBeTruthy();
  });
});
