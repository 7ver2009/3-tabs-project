import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { SecondTabComponent } from './second-tab.component';

const routes: Routes = [
  {
    component: SecondTabComponent,
    path: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondTabRoutingModule { }
