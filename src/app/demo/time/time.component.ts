import { Component, forwardRef, OnInit, Input, Output } from '@angular/core';

import { ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TimeComponent),
    multi: true,
  }],
})
export class TimeComponent implements OnInit, ControlValueAccessor {
  // call this to emit an event
  private _onChange: (_: string) => string;
  hours = new Array(12);
  minutes = new Array(60);
  seconds = new Array(60);

  // set the default values here
  selectedHours = 12;
  selectedMinutes = 0; 
  selectedSeconds = 0;
  pickedAMPM = 'AM';

  constructor() { }

  ngOnInit() {
  }

  selectHours(event) {
    this.selectedHours = event.value;
    this.onChange();
  }

  selectMinutes(event){
    this.selectedMinutes = event.value;
    this.onChange();
  }

  selectSeconds(event){
    this.selectedSeconds = event.value;
    this.onChange();
  }

  selectAMPM(event) {
    this.pickedAMPM = event.value;
    this.onChange();
  }

  formatTime(input: number) {
    return `${(input < 10)? '0': ''}${input}`; 
  }

  // function 
  onChange() {
    const hourString = this.formatTime(this.selectedHours);
    const minuteString = this.formatTime(this.selectedMinutes);
    const secondString = this.formatTime(this.selectedSeconds);

    this._onChange(`${hourString}:${minuteString}:${secondString} ${this.pickedAMPM}`);
  }
   
  // this seems like magic
  registerOnChange(fn: (_: string) => string) : void {
    this._onChange = fn;
  }

  writeValue(obj: any) : void {  }
  registerOnTouched(fn: any) : void {}

}
