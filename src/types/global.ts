export const enum EMenuState {
  HOME,
  NEWS,
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
