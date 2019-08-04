import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { UrlTree } from './app-routing.config';

const routes: Routes = [
  {
    loadChildren: './smart/first-tab#FirstTabModule',
    path: UrlTree.firstTab.url,
  },
  {
    loadChildren: './smart/second-tab#SecondTabModule',
    path: UrlTree.secondTab.url,
  },
  {
    loadChildren: './smart/third-tab#ThirdTabModule',
    path: UrlTree.thirdTab.url,
  },
  {
    redirectTo: UrlTree.firstTab.url,
    path: '**',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
