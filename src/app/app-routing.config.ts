export class TabsNode {
  public static readonly segment = 'tabs';

  public static readonly url = `${TabsNode.segment}`;
}

export class FirstTabNode {
  public static readonly segment = 'first';

  public static readonly url = `${TabsNode.segment}/${FirstTabNode.segment}`;
}

export class SecondTabNode {
  public static readonly segment = 'second';

  public static readonly url = `${TabsNode.segment}/${SecondTabNode.segment}`;
}

export class ThirdTabNode {
  public static readonly segment = 'first';

  public static readonly url = `${TabsNode.segment}/${ThirdTabNode.segment}`;
}

export class UrlTree {
  public static readonly defaultRedirect = `/${TabsNode.url}`;

  public static readonly tabs = TabsNode;

  public static readonly firstTab = FirstTabNode;
  public static readonly secondTab = SecondTabNode;
  public static readonly thirdTab = ThirdTabNode;
}
