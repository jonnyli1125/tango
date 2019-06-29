export interface Settings {
  localization: "en";
}

export interface User {
  name: string | null;
}

export interface State {
  settings: Settings;
  user: User;
}
