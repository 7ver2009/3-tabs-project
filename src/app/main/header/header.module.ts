import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';

const DECLARATIONS = [
  HeaderComponent
]

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [
    RouterModule,
  ],
})
export class HeaderModule { }
