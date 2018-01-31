import { Component, forwardRef, OnInit, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TimeInputEnum } from '../models';

import { ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DatetimeComponent),
    multi: true,
  }],
})
export class DatetimeComponent implements OnInit, ControlValueAccessor {
  TimeInput = TimeInputEnum;

  @Input() timeSelector: number = this.TimeInput.BINPUT; 

  date: Date = new Date();
  timeString: string = '12:00:00 PM';

  // call this to emit an event
  private _onChange: (_: Date) => Date;
  localForm: FormGroup

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.localForm = this.formBuilder.group({
      time: '',
      date: '',
    });
  }

  updateDate(event) {
  	this.date = event.value;
  	this.onChange();
  }
  
  updateTime(event) {
  	this.timeString = event;
  	this.onChange();
  }

  // function 
  onChange() {
  	  const dateCopy = new Date(`${this.date.toDateString()} ${this.timeString}`); 
      this._onChange(dateCopy);
  }
   
  // this seems like magic
  registerOnChange(fn: (_: Date) => Date) : void {
    this._onChange = fn;
  }

  writeValue(obj: any) : void {  }
  registerOnTouched(fn: any) : void {}

}
