import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {ComponentNames} from "./constants";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  myForm: FormGroup;
  vals: any;
  baseValue = 'default';
  nineCBaseValue = "nineC";
  componentEnum = ComponentNames;
  currentComponent = this.componentEnum.base;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
  	this.myForm = this.formBuilder.group({
  		base: '', // local form
      // middle: '', // CVA & no onChange
      // twoc: '', // CVA & no keyUP
      // threec: '', // CVA & everything
      // fourc: '', // inner formGroup
      // fivec: '', // CVA & calls threec as component (threeChanges before component inits)
      // sixc: '', // NOT CVA & calls threec as component
      // sevenc: '', // default and base value are different 
      // eightc: this.baseValue, // default and base value are different 
      // ninec: this.nineCBaseValue, // 
  	});
    this.myForm.valueChanges.subscribe(form => {
      this.vals = form;
    });
  }

  handlePrevClick() {
    if (this.currentComponent != this.componentEnum.base) {
      this.currentComponent = this.currentComponent - 1; 
    }
  }

  handleNextClick() {
    if (this.currentComponent != this.componentEnum.eight) {
      this.currentComponent = this.currentComponent + 1; 
    }
  }

}
