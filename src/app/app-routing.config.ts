export class TabsNode {
  public static readonly segment = 'tabs';

  public static readonly url = `${TabsNode.segment}`;
}

export class UrlTree {
  public static readonly defaultRedirect = `/${TabsNode.url}`;

  public static readonly tabs = TabsNode;
}
