"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    compare(otherPoint) {
        return otherPoint.x + otherPoint.y > this.x + this.y ? -1 : otherPoint.x + otherPoint.y === this.x + this.y ? 0 : 1;
    }
}
exports.Point = Point;
