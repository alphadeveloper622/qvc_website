export enum TextDirections {
  Left = 'text-left',
  Center = 'text-center',
  Right = 'text-right',
}

export enum BorderDirections {
  Top = 'border-t border-solid',
  Bottom = 'border-b border-solid',
  Left = 'border-l border-solid',
  Right = 'border-r border-solid',
  ALL = 'border border-solid',
}

export enum ButtonTypes {
  Submit = 'submit',
  Button = 'button',
  Reset = 'reset',
}

export type IItem = {
  id: string;
  name: string;
  title: string;
  placeHolder: string;
};
