//// [tests/cases/compiler/es6ImportDefaultBindingFollowedWithNamedImportInEs5.ts] ////

//// [es6ImportDefaultBindingFollowedWithNamedImportInEs5_0.ts]

export var a = 10;
export var x = a;
export var m = a;

//// [es6ImportDefaultBindingFollowedWithNamedImportInEs5_1.ts]
import defaultBinding1, { } from "es6ImportDefaultBindingFollowedWithNamedImportInEs5_0";
import defaultBinding2, { a } from "es6ImportDefaultBindingFollowedWithNamedImportInEs5_0";
var x1: number = a;
import defaultBinding3, { a as b } from "es6ImportDefaultBindingFollowedWithNamedImportInEs5_0";
var x1: number = b;
import defaultBinding4, { x, a as y } from "es6ImportDefaultBindingFollowedWithNamedImportInEs5_0";
var x1: number = x;
var x1: number = y;
import defaultBinding5, { x as z,  } from "es6ImportDefaultBindingFollowedWithNamedImportInEs5_0";
var x1: number = z;
import defaultBinding6, { m,  } from "es6ImportDefaultBindingFollowedWithNamedImportInEs5_0";
var x1: number = m;


//// [es6ImportDefaultBindingFollowedWithNamedImportInEs5_0.js]
exports.a = 10;
exports.x = exports.a;
exports.m = exports.a;
//// [es6ImportDefaultBindingFollowedWithNamedImportInEs5_1.js]
var defaultBinding2 = require("es6ImportDefaultBindingFollowedWithNamedImportInEs5_0");
var x1 = a;
var defaultBinding3 = require("es6ImportDefaultBindingFollowedWithNamedImportInEs5_0");
var x1 = b;
var defaultBinding4 = require("es6ImportDefaultBindingFollowedWithNamedImportInEs5_0");
var x1 = x;
var x1 = y;
var defaultBinding5 = require("es6ImportDefaultBindingFollowedWithNamedImportInEs5_0");
var x1 = z;
var defaultBinding6 = require("es6ImportDefaultBindingFollowedWithNamedImportInEs5_0");
var x1 = m;


//// [es6ImportDefaultBindingFollowedWithNamedImportInEs5_0.d.ts]
export declare var a: number;
export declare var x: number;
export declare var m: number;
//// [es6ImportDefaultBindingFollowedWithNamedImportInEs5_1.d.ts]