import {Schema, Conditional} from "./Schema.mjs";

var s = new Schema("p");

var p = new Schema("p");
var q = new Schema("q");

console.assert(!s.Equals(new Schema("q")))
console.assert(s.Equals(new Schema("p")))

var c = new Conditional(p, q, "p=>q");

console.log(c.getStatement())

console.log(c.getAntecedent().getStatement())

console.log(c.getConsequence().getStatement())