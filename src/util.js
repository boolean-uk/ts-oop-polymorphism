"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.camelCaseToWords = void 0;
function camelCaseToWords(input) {
    const result = input
        .replace(/([A-Z])/g, " $1")
        .replace(/^ /, "")
        .toLowerCase();
    return result;
}
exports.camelCaseToWords = camelCaseToWords;
