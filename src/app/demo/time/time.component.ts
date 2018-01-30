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
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 24;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(v) {
    this._tickInterval = Number(v);
  }
  private _tickInterval = 1;
  // call this to emit an event
  private _onChange: (_: string) => string;
  hours = new Array(12);
  minutes = new Array(60);
  seconds = new Array(60);

  // set the default values here
  pickedHour = 12;
  pickedMinute = 0; 
  pickedSeconds = 0;
  pickedAMPM = 'AM';

  constructor() { }

  ngOnInit() {
  }

  selectHours(event) {
    this.pickedHour = event.value;
    this.onChange();
  }

  selectMinutes(event){
    this.pickedMinute = event.value;
    this.onChange();
  }

  selectSeconds(event){
    this.pickedSeconds = event.value;
    this.onChange();
  }

  selectAMPM(event) {
    this.pickedAMPM = event.value;
    this.onChange();
  }

  // function 
  onChange() {
    const hourString = this.pickedHour < 10? `0${this.pickedHour}`: this.pickedHour;
    const minuteString = this.pickedMinute < 10? `0${this.pickedMinute}`: this.pickedMinute;
    const secondString = this.pickedSeconds < 10? `0${this.pickedSeconds}`: this.pickedSeconds;

    this._onChange(`${hourString}:${minuteString}:${secondString} ${this.pickedAMPM}`);
  }
   
  // this seems like magic
  registerOnChange(fn: (_: string) => string) : void {
    this._onChange = fn;
  }

  writeValue(obj: any) : void {  }
  registerOnTouched(fn: any) : void {}

}
