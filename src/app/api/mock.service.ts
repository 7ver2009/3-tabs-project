import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TabsItemModel } from './model';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(
    private readonly httpClient: HttpClient,
  ) { }

  public getFirstTabObject(): Observable<TabsItemModel> {
    return this.httpClient.get('src/assets/mock/fist-tab.json') as Observable<TabsItemModel>;
  }

  public getSecondTabObject(): Observable<TabsItemModel> {
    return this.httpClient.get('src/assets/mock/second-tab.json') as Observable<TabsItemModel>;
  }

  public getThirdTabObject(): Observable<TabsItemModel> {
    return this.httpClient.get('src/assets/mock/third-tab.json') as Observable<TabsItemModel>;
  }
}
