import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';


import { AppComponent } from './app.component';
// import { OneComponent } from './one/one.component';
// import { TwoComponent } from './two/two.component';
// import { ThreeComponent } from './three/three.component';
// import { FourComponent } from './four/four.component';
// import { FiveComponent } from './five/five.component';
// import { SixComponent } from './six/six.component';
// import { SevenComponent } from './seven/seven.component';
// import { EightComponent } from './eight/eight.component';
// import { NineComponent } from './nine/nine.component';
import { DemoComponent } from './demo/demo.component';
import { TimeComponent } from './demo/time/time.component';
import { DatetimeComponent } from './demo/datetime/datetime.component';

@NgModule({
  exports: [
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSliderModule,
  ]
})
export class DemoMaterialModule {}


@NgModule({
  declarations: [
    AppComponent,
    // OneComponent,
    // TwoComponent,
    // ThreeComponent,
    // FourComponent,
    // FiveComponent,
    // // SixComponent,
    // SevenComponent,
    // EightComponent,
    // NineComponent,
    DemoComponent,
    TimeComponent,
    DatetimeComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    DemoMaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
