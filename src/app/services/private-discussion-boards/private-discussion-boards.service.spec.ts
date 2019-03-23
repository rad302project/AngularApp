import { TestBed } from '@angular/core/testing';

import { PrivateDiscussionBoardsService } from './private-discussion-boards.service';

describe('PrivateDiscussionBoardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrivateDiscussionBoardsService = TestBed.get(PrivateDiscussionBoardsService);
    expect(service).toBeTruthy();
  });
});
