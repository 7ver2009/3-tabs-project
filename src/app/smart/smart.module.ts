import { NgModule } from '@angular/core';

import { FirstTabModule } from './first-tab';
import { SecondTabModule } from './second-tab';
import { ThirdTabModule } from './third-tab';

@NgModule({
  exports: [
    FirstTabModule,
    SecondTabModule,
    ThirdTabModule,
  ],
})
export class SmartModule { }
