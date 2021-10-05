import {Schema} from "./Schema.mjs"
class Line{
    #schema; // Schema
    #premiseList; //[]
    #citation; //{lines:[], reason: ""}

    constructor(schema, premiseList, citation){
        console.assert(schema instanceof Schema)
        this.#schema = schema;
        this.#premiseList = premiseList;
        this.#citation = citation;
    }

    getSchema(){
        return this.#schema;
    }

    getPremiseList(){
        return this.#premiseList;
    }
    getCitation(){
        return this.#citation;
    }
}

export{Line}