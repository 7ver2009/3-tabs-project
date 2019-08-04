import { NgModule } from '@angular/core';

import { SecondTabComponent } from './second-tab.component';
import { SecondTabRoutingModule } from './second-tab-routing.module';

const DECLARATIONS = [
  SecondTabComponent
]

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [
    SecondTabRoutingModule,
  ],
})
export class SecondTabModule { }
