import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionBoardListComponent } from './discussion-board-list.component';

describe('DiscussionBoardListComponent', () => {
  let component: DiscussionBoardListComponent;
  let fixture: ComponentFixture<DiscussionBoardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscussionBoardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionBoardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
