import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  PreloadAllModules,
} from '@angular/router';

import { UrlTree } from './app-routing.config';
import * as resolver from './data.resolver';

const routes: Routes = [
  {
    loadChildren: './smart/first-tab#FirstTabModule',
    path: UrlTree.firstTab.url,
    resolve: {
      mockData: resolver.FirstTabDataResolver,
    },
  },
  {
    loadChildren: './smart/second-tab#SecondTabModule',
    path: UrlTree.secondTab.url,
    resolve: {
      mockData: resolver.SecondTabDataResolver,
    },
  },
  {
    loadChildren: './smart/third-tab#ThirdTabModule',
    path: UrlTree.thirdTab.url,
    resolve: {
      mockData: resolver.ThirdTabDataResolver,
    },
  },
  {
    redirectTo: UrlTree.firstTab.url,
    pathMatch: 'full',
    path: '',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
