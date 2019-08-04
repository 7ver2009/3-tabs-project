import { NgModule } from '@angular/core';

import { TabItemComponent } from './tab-item.component';

const DECLARATIONS = [
  TabItemComponent,
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,

})
export class TabItemModule { }
