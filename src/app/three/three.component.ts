import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css'], 
  providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ThreeComponent),
      multi: true,
  }]
})
export class ThreeComponent implements OnInit, ControlValueAccessor {

  constructor() { }

  ngOnInit() { }
  // this seems like magic
  private propogateChange: (_: any) => {};

  // what the hell does this do
  private touchChange: (_: any) => {};

  // we have to call the magic
  onChange(event) {
  	if (this.propogateChange && this.touchChange) {
	  	this.propogateChange(event.target.value);
	  	this.touchChange(event.target.value);
  	}
  }

  writeValue(obj: any) : void {  }
   
  // this seems like magic
  registerOnChange(fn: (_: any) => {}) : void {
    this.propogateChange = fn;
  }

  registerOnTouched(fn: any) : void {
  	this.touchChange = fn
  }

}
