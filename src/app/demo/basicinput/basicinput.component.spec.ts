import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicinputComponent } from './basicinput.component';

describe('BasicinputComponent', () => {
  let component: BasicinputComponent;
  let fixture: ComponentFixture<BasicinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
