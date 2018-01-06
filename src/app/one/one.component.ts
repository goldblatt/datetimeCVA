import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'], 
  providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => OneComponent),
      multi: true,
  }]
})
export class OneComponent implements OnInit, ControlValueAccessor {

  constructor() { }
  ngOnInit() { }

  // this seems like magic
  private onChange: (_: any) => {};

  writeValue(obj: any) : void {  }
   
  // this seems like magic
  registerOnChange(fn: (_: any) => {}) : void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) : void {}

}
