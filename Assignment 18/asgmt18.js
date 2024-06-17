var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var travel = ["Malaysia", "Dubai", "Turkey", "Saudia Arabia", "Baku"];
console.log(travel);
var sorted = __spreadArray([], travel, true);
sorted.sort();
console.log(sorted);
console.log(travel);
var backward = __spreadArray([], travel, true);
backward.reverse();
console.log(backward);
console.log(travel);
