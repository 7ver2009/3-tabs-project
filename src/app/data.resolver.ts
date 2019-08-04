import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import {
    TabsItemModel,
    MockService,
} from './api';

@Injectable({
    providedIn: 'root',
})
export class FirstTabDataResolver implements Resolve<Observable<TabsItemModel>> {
    constructor(
        private readonly mockService: MockService,
    ) { }

    public resolve(): Observable<TabsItemModel> {
        return this.mockService.getFirstTabObject();
    }
}

@Injectable({
    providedIn: 'root',
})
export class SecondTabDataResolver implements Resolve<Observable<TabsItemModel>> {
    constructor(
        private readonly mockService: MockService,
    ) { }

    public resolve(): Observable<TabsItemModel> {
        return this.mockService.getSecondTabObject();
    }
}

@Injectable({
    providedIn: 'root',
  })
export class ThirdTabDataResolver implements Resolve<Observable<TabsItemModel>> {
    constructor(
        private readonly mockService: MockService,
    ) { }

    public resolve(): Observable<TabsItemModel> {
        return this.mockService.getThirdTabObject();
    }
}
