import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateDiscussionBoardComponent } from './private-discussion-board.component';

describe('PrivateDiscussionBoardComponent', () => {
  let component: PrivateDiscussionBoardComponent;
  let fixture: ComponentFixture<PrivateDiscussionBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateDiscussionBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateDiscussionBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
