import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { FirstTabComponent } from './first-tab.component';

const routes: Routes = [
  {
    component: FirstTabComponent,
    path: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstTabRoutingModule { }
