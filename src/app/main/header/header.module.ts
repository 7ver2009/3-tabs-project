import { NgModule } from '@angular/core';

import { HeaderComponent } from './header.component';

const DECLARATIONS = [
  HeaderComponent
]

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [
  ],
})
export class HeaderModule { }
