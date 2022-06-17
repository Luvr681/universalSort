import { universalSort } from "./universalSort"
import { Point } from "./Point"

const points: Point[] = [
  new Point(10, 15),
  new Point(5, 5),
  new Point(20, 30)
];

const descending = 1;

const sortedPoints: Point[] = universalSort<Point>(points, <Point>(a: Point, b: Point) => (a as any).compare(b) * descending);

console.log(sortedPoints)
