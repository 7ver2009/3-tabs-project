import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TabsItemModel } from '../../api';

@Component({
  selector: 'tt-third-tab',
  templateUrl: './third-tab.component.html',
  styleUrls: ['./third-tab.component.scss']
})
export class ThirdTabComponent {

  public readonly data?: ReadonlyArray<Readonly<TabsItemModel>>;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
  ) {
    this.data = this.activatedRoute.snapshot.data.mockData as ReadonlyArray<Readonly<TabsItemModel>>;
  }
}
