import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  exports : [
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule
  ]
})
export class UIModule { }
