import { Injectable } from '@angular/core';

import { 
    Subject,
    Observable,
} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BackdropService {

    public backdropModal$: Observable<boolean>;
    private readonly backdropModalSource = new Subject<boolean>();

    constructor() {
        this.backdropModal$ = this.backdropModalSource.asObservable();
    }

    public showModal(): void {
        this.backdropModalSource.next(true);
    }

    public hideModal(): void {
        this.backdropModalSource.next(false);
    }
}