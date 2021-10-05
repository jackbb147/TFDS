class RuleChecker{

    #message;
    constructor(){

    }

    getMessage(){
        return this.#message;
    }

    isValid(){};

}

class MPChecker extends RuleChecker{
    constructor(){
        super();
    }

    isvalid(){};
}