import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { ThirdTabComponent } from './third-tab.component';

const routes: Routes = [
  {
    component: ThirdTabComponent,
    path: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThirdTabRoutingModule { }
