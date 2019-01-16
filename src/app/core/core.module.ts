import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './containers/app.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule

  ],
  declarations: [
    AppComponent
  ]
})
export class CoreModule { }
