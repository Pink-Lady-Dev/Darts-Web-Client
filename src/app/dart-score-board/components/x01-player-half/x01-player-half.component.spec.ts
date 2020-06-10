import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { X01PlayerHalfComponent } from './x01-player-half.component';

describe('X01PlayerComponent', () => {
  let component: X01PlayerHalfComponent;
  let fixture: ComponentFixture<X01PlayerHalfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ X01PlayerHalfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(X01PlayerHalfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
