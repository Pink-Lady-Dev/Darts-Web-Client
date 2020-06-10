import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DartScoreBoardPageComponent } from './dart-score-board-page.component';

describe('DartScoreBoardPageComponent', () => {
  let component: DartScoreBoardPageComponent;
  let fixture: ComponentFixture<DartScoreBoardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DartScoreBoardPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DartScoreBoardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
