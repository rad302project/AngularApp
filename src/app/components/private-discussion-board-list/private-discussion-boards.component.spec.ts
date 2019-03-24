import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateDiscussionBoardsComponent } from './private-discussion-boards.component';

describe('PrivateDiscussionBoardsComponent', () => {
  let component: PrivateDiscussionBoardsComponent;
  let fixture: ComponentFixture<PrivateDiscussionBoardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateDiscussionBoardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateDiscussionBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
