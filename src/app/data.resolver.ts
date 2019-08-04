import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import {
    delay,
    tap,
} from 'rxjs/operators';

import { BackdropService } from './modal';
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
        private readonly backdropService: BackdropService,
    ) { }

    public resolve(): Observable<TabsItemModel> {
        this.backdropService.showModal();

        return this.mockService.getFirstTabObject()
            .pipe(
                delay(3000),
                tap(() => this.backdropService.hideModal()),
            );
    }
}

@Injectable({
    providedIn: 'root',
})
export class SecondTabDataResolver implements Resolve<Observable<TabsItemModel>> {
    constructor(
        private readonly mockService: MockService,
        private readonly backdropService: BackdropService,
    ) { }

    public resolve(): Observable<TabsItemModel> {
        this.backdropService.showModal();

        return this.mockService.getSecondTabObject()
            .pipe(
                delay(3000),
                tap(() => this.backdropService.hideModal()),
            );
    }
}

@Injectable({
    providedIn: 'root',
  })
export class ThirdTabDataResolver implements Resolve<Observable<TabsItemModel>> {
    constructor(
        private readonly mockService: MockService,
        private readonly backdropService: BackdropService,
    ) { }
    public resolve(): Observable<TabsItemModel> {
        this.backdropService.showModal();

        return this.mockService.getThirdTabObject()
            .pipe(
                delay(3000),
                tap(() => this.backdropService.hideModal()),
            );
    }
}
