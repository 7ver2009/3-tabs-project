import { 
  Component,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

import { TabsItemModel } from '../../api';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'tt-tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.scss']
})
export class TabItemComponent {

  @Input()
  public item: Readonly<TabsItemModel>;

  public get id(): number {
    return this.item && this.item.id;
  }

  public get name(): string {
    return this.item && this.item.name;
  }

  public get date(): string {
    return this.item && this.item.date;
  }

  public get status(): string {
    return this.item && this.item.status;
  }
}
