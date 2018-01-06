import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'], 
  providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TwoComponent),
      multi: true,
  }]
})
export class TwoComponent implements OnInit, ControlValueAccessor {

  constructor() { }
  ngOnInit() { }

  // this seems like magic
  private propogateChange: (_: any) => {};

  // we have to call the magic
  onChange(event) {
  	this.propogateChange(event.target.value);
  }

  writeValue(obj: any) : void {  }
   
  // this seems like magic
  registerOnChange(fn: (_: any) => {}) : void {
    this.propogateChange = fn;
  }

  registerOnTouched(fn: any) : void {}

}
