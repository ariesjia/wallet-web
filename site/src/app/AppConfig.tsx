export class AppConfig {
  public static siteName = 'AA Wallet';
  public static secretPassword = 'ploy';

  public static menu = [
    {
      text: 'Wallet',
      icon: 'wallet',
      to: '/',
      loggedIn: false
    },
    {
      text: 'Apps',
      icon: 'apps',
      to: '/apps',
      loggedIn: false
    },
    {
      text: 'Account',
      icon: 'portrait',
      to: '/profile',
      loggedIn: false
    },
  ];
}