import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DartHistoryViewComponent } from './dart-history-view.component';

describe('DartHistoryViewComponent', () => {
  let component: DartHistoryViewComponent;
  let fixture: ComponentFixture<DartHistoryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DartHistoryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DartHistoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
