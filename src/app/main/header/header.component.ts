import { 
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

import { UrlTree } from '../../app-routing.config';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'tt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
  ) { }

  public get firstTabUrl(): string {
    return UrlTree.firstTab.url;
  }

  public get secondTabUrl(): string {
    return UrlTree.secondTab.url;
  }

  public get thirdTabUrl(): string {
    return UrlTree.thirdTab.url;
  }
}
