import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TabsItemModel } from './model';

const url = '../../assets/mock';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor(
    private readonly httpClient: HttpClient,
  ) { }

  public getFirstTabObject(): Observable<TabsItemModel> {
    return this.httpClient.get(`${url}/first-tab.json`) as Observable<TabsItemModel>;
  }

  public getSecondTabObject(): Observable<TabsItemModel> {
    return this.httpClient.get(`${url}/second-tab.json`) as Observable<TabsItemModel>;
  }

  public getThirdTabObject(): Observable<TabsItemModel> {
    return this.httpClient.get(`${url}/third-tab.json`) as Observable<TabsItemModel>;
  }
}
