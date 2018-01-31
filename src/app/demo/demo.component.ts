import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TimeInputEnum } from './models';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  myForm: FormGroup
  TimeInput = TimeInputEnum;

  selectors = [{id: this.TimeInput.BINPUT, display: 'Input'},
              {id: this.TimeInput.SLIDER, display: 'Slider'},
              {id: this.TimeInput.SELECTOR, display: 'Selector'}];

  selectedTime = this.TimeInput.BINPUT;

  constructor(private formBuilder: FormBuilder) {}

  changeTime(event) {
    this.selectedTime = event.value;
  }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      datetime: '',
    });
  }

}
