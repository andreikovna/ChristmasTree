export function checkColorFilterData(expression: boolean) :string {
  if (expression === true) {
    return 'color-active';
  }
  return '';
}
