import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePrivateDiscussionBoardComponent } from './create-private-discussion-board.component';

describe('CreatePrivateDiscussionBoardComponent', () => {
  let component: CreatePrivateDiscussionBoardComponent;
  let fixture: ComponentFixture<CreatePrivateDiscussionBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePrivateDiscussionBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePrivateDiscussionBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
