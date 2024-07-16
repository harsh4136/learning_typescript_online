"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var names = [];
names.push("Harsh"); // no error
//names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
console.log(names);
var names1 = ["Harsh"];
names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
