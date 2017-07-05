"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getPrimitiveSize(spec) {
    return +spec.size.substr("uint".length);
}
exports.getPrimitiveSize = getPrimitiveSize;
var Vector;
(function (Vector) {
    function isVariableLength(spec) {
        return spec.maxLength !== spec.minLength;
    }
    Vector.isVariableLength = isVariableLength;
})(Vector = exports.Vector || (exports.Vector = {}));
// Shortcuts:
exports.define = {
    Enum: function (size, enumType) { return ({ type: "enum", size: size, enumType: enumType }); },
    Number: function (size) { return ({ type: "number", size: size }); },
    Struct: function (structType) { return ({
        type: "struct",
        // we shouldn't need this, each struct knows its own spec
        //spec: (structType as any as IStruct).__spec, // require this property, we don't want to repeat us that much
        structType: structType
    }); },
    Vector: function (itemSpec, minLength, maxLength, optional) {
        if (minLength === void 0) { minLength = 0; }
        if (maxLength === void 0) { maxLength = minLength; }
        if (optional === void 0) { optional = false; }
        return ({
            type: "vector",
            itemSpec: itemSpec,
            minLength: minLength, maxLength: maxLength,
            optional: optional
        });
    },
    Buffer: function () { return ({ type: "buffer" }); }
};
exports.uint8 = Object.freeze(exports.define.Number("uint8"));
exports.uint16 = Object.freeze(exports.define.Number("uint16"));
exports.uint24 = Object.freeze(exports.define.Number("uint24"));
exports.uint32 = Object.freeze(exports.define.Number("uint32"));
exports.uint48 = Object.freeze(exports.define.Number("uint48"));
exports.uint64 = Object.freeze(exports.define.Number("uint64"));
exports.buffer = Object.freeze(exports.define.Buffer());
//# sourceMappingURL=TypeSpecs.js.map