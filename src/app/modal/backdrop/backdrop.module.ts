import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackdropComponent } from './backdrop.component';
const DECLARATIONS = [
  BackdropComponent,
];
@NgModule({
  exports: DECLARATIONS,
  declarations: DECLARATIONS,
  imports: [ CommonModule ],
})
export class BackdropModule { }
