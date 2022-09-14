import { NgModule } from '@angular/core';
import { UIModule } from './ui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  exports: [
    UIModule,
    FormsModule, // template driven forms
    ReactiveFormsModule, // reactive forms
  ]
})
export class SharedModule { }
