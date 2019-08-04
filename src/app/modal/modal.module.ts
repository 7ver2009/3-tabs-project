import { NgModule } from '@angular/core';

import { BackdropModule } from './backdrop';

@NgModule({
  exports: [
    BackdropModule,
  ],
  imports: [
    BackdropModule
  ]
})
export class ModalModule { }
