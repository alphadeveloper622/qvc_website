export const enum EMenuState {
  HOME,
  PORTAL,
  COINLOOKUP,
  DIRECTORYSEARCH,
  NEWSANDEVENTS,
}

declare global {
  interface DMenuState {
    menuActiveState: EMenuState;
  }
}
