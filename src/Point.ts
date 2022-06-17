import { IComparable } from './types'

export class Point implements IComparable {
  public constructor(public x: number, public y: number) {}

  public compare(otherPoint: Point): number {
    return otherPoint.x + otherPoint.y > this.x + this.y ? -1 : otherPoint.x + otherPoint.y === this.x + this.y ? 0 : 1;
  }
}
