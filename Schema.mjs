class Schema{
    #statement; //String

    constructor(str){
        this.#statement = str;
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
        this.#antecedent = ans;
        this.#consequence = cons;
    }
}

export {Schema, Conditional}