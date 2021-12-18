export function checkFilterData(expression: boolean) :string {
  if (expression === true) {
    return 'active';
  }
  return '';
}
