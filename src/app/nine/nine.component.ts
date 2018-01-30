import { Component, forwardRef, OnInit, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-seven',
  templateUrl: './nine.component.html',
  styleUrls: ['./nine.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NineComponent),
    multi: true,
	}]
})
export class NineComponent implements OnInit, ControlValueAccessor {
  @Input() defaultInput: string; 

  constructor(private formBuilder: FormBuilder) { }

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
