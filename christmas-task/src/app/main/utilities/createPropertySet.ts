import data, { IData } from '../../../assets/data';

export function createPropertySet(key: string) : string[] {
  const propertyArray: string[] = [];
  data.forEach((element) => {
    console.log(Object.keys(element) as Array<keyof typeof element>);
    propertyArray.push(element[key]);
  });
  const uniqueSet = [...new Set(propertyArray)];
  return uniqueSet;
}
