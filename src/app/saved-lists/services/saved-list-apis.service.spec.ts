import { TestBed } from '@angular/core/testing';

import { SavedListApisService } from './saved-list-apis.service';

describe('SavedListApisService', () => {
  let service: SavedListApisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavedListApisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
