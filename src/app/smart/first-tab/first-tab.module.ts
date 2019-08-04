import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstTabRoutingModule } from './first-tab-routing.module';
import { FirstTabComponent } from './first-tab.component';
import { DumbModule } from '../../dumb';

const DECLARATIONS = [
  FirstTabComponent
]

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [
    FirstTabRoutingModule,
    DumbModule,
    CommonModule,
  ],
})
export class FirstTabModule { }
