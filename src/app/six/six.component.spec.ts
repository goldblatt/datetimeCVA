import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixComponent } from './six.component';

describe('SixComponent', () => {
  let component: SixComponent;
  let fixture: ComponentFixture<SixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
