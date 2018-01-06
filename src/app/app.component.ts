import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  myForm: FormGroup;
  vals: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
  	this.myForm = this.formBuilder.group({
  		test1: '',
      onec: '',
      twoc: '', 
      threec: '',
      fourc: '',
      fivec: '',
  	});
    this.myForm.valueChanges.subscribe(form => {
      this.vals = form;
    });
  }

}
