class Schema{
    #statement; //String

    constructor(){

    }

    /**
     * returns true if p.statement == q.statement
     * @constructor
     */
    Equals(p,q){

    }


}

/**
 * "p=>q"
 */
class Conditional extends Schema{
    #antecedent; //String
    #consequence; //String

    constructor(ant, cons){
        super();
        this.#antecedent = ans;
        this.#consequence = cons;
    }


}