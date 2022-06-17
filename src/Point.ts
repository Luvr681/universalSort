import { IComparable } from './types'

export class Point implements IComparable {
  public constructor(public x: number, public y: number) {}

  public compare<T>(otherPoint: T): number {
    const castedPoint = (otherPoint as any as Point)
    return castedPoint.x + castedPoint.y > this.x + this.y ? -1 : castedPoint.x + castedPoint.y === this.x + this.y ? 0 : 1;
  }
}
