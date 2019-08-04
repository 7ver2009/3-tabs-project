import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TabsItemModel } from '../../api';

@Component({
  selector: 'tt-second-tab',
  templateUrl: './second-tab.component.html',
  styleUrls: ['./second-tab.component.scss']
})
export class SecondTabComponent {

  public readonly data?: ReadonlyArray<Readonly<TabsItemModel>>;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
  ) {
    this.data = this.activatedRoute.snapshot.data.mockData as ReadonlyArray<Readonly<TabsItemModel>>;
  }
}
