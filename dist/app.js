"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const universalSort_1 = require("./universalSort");
const Point_1 = require("./Point");
const points = [
    new Point_1.Point(10, 15),
    new Point_1.Point(5, 5),
    new Point_1.Point(20, 30)
];
const descending = 1;
const sortedPoints = (0, universalSort_1.universalSort)(points, (a, b) => a.compare(b) * descending);
console.log(sortedPoints);
