import { NgModule } from '@angular/core';

import { ThirdTabComponent } from './third-tab.component';
import { ThirdTabRoutingModule } from './third-tab-routing.module';

const DECLARATIONS = [
  ThirdTabComponent
]

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [
    ThirdTabRoutingModule,
  ],
})
export class ThirdTabModule { }
