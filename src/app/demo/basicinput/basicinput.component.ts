import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-basicinput',
  templateUrl: './basicinput.component.html',
  styleUrls: ['./basicinput.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => BInputComponent),
    multi: true,
  }],
})
export class BInputComponent implements ControlValueAccessor {
  private _onChange: (_: any) => {};

  constructor() { }

  onChange(event) {
    if (this._onChange) {
      this._onChange(event.target.value);
    }
  }

  registerOnChange(fn: (_: any) => {}) : void {
    this._onChange = fn;
  }

  writeValue(obj: any) : void {  }
  registerOnTouched(fn: any) : void {}

}
