import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NineComponent } from './nine.component';

describe('NineComponent', () => {
  let component: NineComponent;
  let fixture: ComponentFixture<NineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
