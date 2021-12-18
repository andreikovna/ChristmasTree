export function isChecked(expression: boolean) :string {
  if (expression === true) {
    return 'checked';
  }
  return '';
}
