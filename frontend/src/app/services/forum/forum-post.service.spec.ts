import { TestBed, inject } from '@angular/core/testing';

import { ForumPostService } from './forum-post.service';

describe('ForumPostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForumPostService]
    });
  });

  it('should be created', inject([ForumPostService], (service: ForumPostService) => {
    expect(service).toBeTruthy();
  }));
});
