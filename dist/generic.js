"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.universalSort = void 0;
function universalSort(array, compareFunction) {
    if (array.length <= 1) {
        return array;
    }
    const pivot = array[0];
    const left = [];
    const right = [];
    for (let i = 1; i < array.length; i++) {
        compareFunction(array[i], pivot) === 1
            ? left.push(array[i]) : right.push(array[i]);
    }
    return universalSort(left, compareFunction).concat(pivot, universalSort(right, compareFunction));
}
exports.universalSort = universalSort;
