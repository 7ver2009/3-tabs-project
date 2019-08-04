import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { tap } from 'rxjs/operators';

import { BackdropService } from './backdrop.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'tt-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.scss']
})
export class BackdropComponent {
  public open = false;

  constructor(
    private readonly backdropService: BackdropService,
    private readonly cdr: ChangeDetectorRef,
  ) {
    this.backdropService.backdropModal$
    .pipe(
      tap((value: boolean) => {
        this.open = value;
        this.cdr.markForCheck();
      }),
    )
    .subscribe();
  }
}
