export interface IDecorations {
  num: string;
  name: string;
  count: string;
  year: string;
  shape: string;
  color: string;
  size: string;
  favorite: boolean;
  createElement(chosenItems: number[]): HTMLDivElement;
}
