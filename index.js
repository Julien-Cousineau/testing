'use strict';
class testadd {
    constructor(options){
        if(!options)options={};
    }
    add(a,b){
        return a+b;
    }
    substract(a,b){
        return a-b;
    }
}
module.exports = testadd;
module.exports.default = testadd;