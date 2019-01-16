import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';

const MATERIALMODULES = [
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule
];

@NgModule({
  imports: [
    CommonModule,
    ...MATERIALMODULES
  ],
  declarations: [],
  exports: MATERIALMODULES
})
export class MaterialModule { }
