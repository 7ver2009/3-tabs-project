export class FirstTabNode {
  public static readonly segment = 'first';

  public static readonly url = `${FirstTabNode.segment}`;
}

export class SecondTabNode {
  public static readonly segment = 'second';

  public static readonly url = `${SecondTabNode.segment}`;
}

export class ThirdTabNode {
  public static readonly segment = 'third';

  public static readonly url = `${ThirdTabNode.segment}`;
}

export class UrlTree {
  public static readonly defaultRedirect = FirstTabNode.url;

  public static readonly firstTab = FirstTabNode;
  public static readonly secondTab = SecondTabNode;
  public static readonly thirdTab = ThirdTabNode;
}
