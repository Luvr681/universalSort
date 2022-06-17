"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    compare(otherPoint) {
        const castedPoint = otherPoint;
        return castedPoint.x + castedPoint.y > this.x + this.y ? -1 : castedPoint.x + castedPoint.y === this.x + this.y ? 0 : 1;
    }
}
exports.Point = Point;
