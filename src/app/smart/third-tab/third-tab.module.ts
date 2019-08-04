import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThirdTabComponent } from './third-tab.component';
import { ThirdTabRoutingModule } from './third-tab-routing.module';
import { DumbModule } from '../../dumb';


const DECLARATIONS = [
  ThirdTabComponent
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [
    ThirdTabRoutingModule,
    DumbModule,
    CommonModule,
  ],
})
export class ThirdTabModule { }
