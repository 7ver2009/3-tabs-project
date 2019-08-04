import { NgModule } from '@angular/core';

import { FirstTabRoutingModule } from './first-tab-routing.module';
import { FirstTabComponent } from './first-tab.component';

const DECLARATIONS = [
  FirstTabComponent
]

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [
    FirstTabRoutingModule,
  ],
})
export class FirstTabModule { }
