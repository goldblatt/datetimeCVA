import { Component, OnInit, forwardRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.css'],
providers: [{
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FiveComponent),
  multi: true,
}]
})
export class FiveComponent implements OnInit, ControlValueAccessor {

  c5Form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  // this seems like magic
  private propogateChange: (_: any) => {};

  ngOnInit() {
  	console.log("initting5");
		this.c5Form = this.formBuilder.group({
			c5Input: '',
		});
  }

  onChange(event: any) {
  	this.propogateChange(event);
  }

  writeValue(obj: any) : void {  }
   
  // this seems like magic
  registerOnChange(fn: (_: any) => {}) : void {
		this.propogateChange = fn;
  }

  registerOnTouched(fn: any) : void {}

}
