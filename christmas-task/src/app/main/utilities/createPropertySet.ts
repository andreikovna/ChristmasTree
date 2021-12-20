import data from '../../../assets/data';

interface IData {
  num: string;
  name: string;
  count: string;
  year: string;
  shape: string;
  color: string;
  size: string;
  favorite: boolean;
}

export function createPropertySet <T>(property: T): T[] {
  const propertyArray: T[] = [];
  data.forEach((element: IData) => {
    propertyArray.push(element[property]);
  });
  const uniqueSet = [...new Set(propertyArray)];
  return uniqueSet;
}
