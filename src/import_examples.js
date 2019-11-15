import addToDom from "./add_to_dom";
import * as calc from "./calc";
//import doMath, { add as plus, subtract, multiply, divide } from "./calc";
import $ from "jquery";

addToDom("dynamically added");

// addToDom(`12 + 98 = ${plus(12, 98)}`);

// addToDom(`12 - 98 = ${subtract(12, 98)}`);

// addToDom(`32 + 44 = ${doMath(32, "+", 44)}`);

// addToDom(`32 x 44 = ${multiply(32, 44)}`);

// addToDom(`32 / 44 = ${divide(32, 44)}`);

addToDom(`12 + 98 = ${calc.add(12, 98)}`);

addToDom(`12 - 98 = ${calc.subtract(12, 98)}`);

addToDom(`32 + 44 = ${calc.default(32, "+", 44)}`);

addToDom(`32 x 44 = ${calc.multiply(32, 44)}`);

addToDom(`24 / 14 = ${calc.divide(24, 14)}`);

$("#root").append("<h1>created by jquery</h1>")