import {Schema, Conditional} from "./Schema.mjs";

var s = new Schema("p");

console.assert(!s.Equals(new Schema("q")))
console.assert(s.Equals(new Schema("p")))