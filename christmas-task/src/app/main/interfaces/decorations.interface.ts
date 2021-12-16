export interface IDecorations {
  num: string,
  name: string,
  count: string,
  year: string,
  shape: string,
  color: string,
  size: string,
  favourite: boolean,
  createElement(chosenItems: number[]): HTMLDivElement,
}
