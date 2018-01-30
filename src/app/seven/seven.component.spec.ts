import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SevenComponent } from './seven.component';

describe('SevenComponent', () => {
  let component: SevenComponent;
  let fixture: ComponentFixture<SevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
