import { Component, OnInit, forwardRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css'], 
  providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FourComponent),
      multi: true,
  }]
})
export class FourComponent implements OnInit, ControlValueAccessor {
  c4Form: FormGroup;
  c4Vals: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() { 
  	this.c4Form = this.formBuilder.group({
  		c4Input: '',
  	});
  	this.c4Form.valueChanges.subscribe(form => {
      this.c4Vals = form;
    });
  }

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
