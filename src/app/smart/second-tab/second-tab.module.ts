import { NgModule } from '@angular/core';

import { SecondTabComponent } from './second-tab.component';

const DECLARATIONS = [
  SecondTabComponent
]

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [
  ],
})
export class SecondTabModule { }
