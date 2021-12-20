export function checkFilterData(expression: boolean, text: string): string {
  if (expression === true) {
    return text;
  }
  return '';
}
