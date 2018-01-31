import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-timeslider',
  templateUrl: './timeslider.component.html',
  styleUrls: ['./timeslider.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TimesliderComponent),
    multi: true,
  }],
})
export class TimesliderComponent implements OnInit, ControlValueAccessor {

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 24 * 60 * 60;
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

  constructor() { }

  ngOnInit() {
  }

  formatTime(input: number) {
    return `${(input < 10)? '0': ''}${input}`; 
  }

  // function 
  onChange(eventthing: any) {
  	const event = eventthing.value;
  	const hours = Math.floor(event / (60 * 60));
  	const minutes = Math.floor((event - (hours * 60 * 60)) / 60); 
  	const seconds = Math.floor(event - (hours * 60 * 60) - (minutes * 60));
    const hourString = this.formatTime(hours);
    const minuteString = this.formatTime(minutes);
    const secondString = this.formatTime(seconds);

    if (this._onChange) {
      this._onChange(`${hourString}:${minuteString}:${secondString}`);
    }
  }
   
  // this seems like magic
  registerOnChange(fn: (_: string) => string) : void {
    this._onChange = fn;
  }

  writeValue(obj: any) : void {  }
  registerOnTouched(fn: any) : void {}
}
