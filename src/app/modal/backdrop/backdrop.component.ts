import { Component } from '@angular/core';

import { BackdropService } from './backdrop.service';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'tt-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.scss']
})
export class BackdropComponent {
  public open = false;

  constructor(
    private readonly backdropService: BackdropService
  ) {
    this.backdropService.backdropModal$
    .pipe(
      tap((value: boolean) => {
        this.open = value;
      }),
    )
    .subscribe();
  }
}
