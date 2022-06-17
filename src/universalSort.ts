import { Compare } from "./types"

export function universalSort<T>(array: T[], compareFunction: Compare<T>): T[] {
  if (array.length <= 1) {
    return array
  }

  const pivot: T = array[0];

  const left: T[] = []; 
  const right: T[] = [];

  for (let i = 1; i < array.length; i++) {
    compareFunction(array[i], pivot) === 1 
      ? left.push(array[i]) : right.push(array[i]);
  }

  return universalSort(left, compareFunction).concat(pivot, universalSort(right, compareFunction)); 
}
