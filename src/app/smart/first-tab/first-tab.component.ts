import { 
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TabsItemModel } from '../../api';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'tt-first-tab',
  templateUrl: './first-tab.component.html',
  styleUrls: ['./first-tab.component.scss']
})
export class FirstTabComponent {

  public readonly data?: ReadonlyArray<Readonly<TabsItemModel>>;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
  ) {
    this.data = this.activatedRoute.snapshot.data.mockData as ReadonlyArray<Readonly<TabsItemModel>>;
  }

  public trackById(_index: number, item: Readonly<TabsItemModel>): number {
    return item.id;
  }
}
