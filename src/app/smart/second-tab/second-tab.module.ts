import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondTabComponent } from './second-tab.component';
import { SecondTabRoutingModule } from './second-tab-routing.module';
import { DumbModule } from '../../dumb';

const DECLARATIONS = [
  SecondTabComponent
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [
    SecondTabRoutingModule,
    DumbModule,
    CommonModule,
  ],
})
export class SecondTabModule { }
