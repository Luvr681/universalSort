export type Compare<T> = (a: T, b: T)  => number

export interface IComparable {
  compare: <T>(b: T) => number
}