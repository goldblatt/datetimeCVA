import { Component, forwardRef, OnInit, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-six',
  templateUrl: './eight.component.html',
  styleUrls: ['./eight.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => EightComponent),
    multi: true,
	}]
})
export class EightComponent implements OnInit, ControlValueAccessor {
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
