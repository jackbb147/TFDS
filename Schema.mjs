class Schema{
    #statement; //String

    constructor(str){
        this.#statement = str;
    }

    getStatement(){
        return this.#statement;
    }

    /**
     * returns true if p.statement == q.statement
     * @constructor
     */
    Equals(q){
        return this.#statement == q.#statement;
    }
}

/**
 * "p=>q"
 */
class Conditional extends Schema{
    #antecedent; //String
    #consequence; //String

    constructor(ant, cons, str=""){
        super(str);
        console.assert(ant instanceof Schema && cons instanceof Schema, "Schema line 26");
        this.#antecedent = ant;
        this.#consequence = cons;
    }

    getAntecedent(){
        return this.#antecedent
    }

    getConsequence(){
        return this.#consequence;
    }
}

export {Schema, Conditional}