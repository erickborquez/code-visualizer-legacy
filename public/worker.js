onmessage = (m) =>{
    console.log(safeCodeEval(m.data));
}

function safeCodeEval(code){
    const steps = [];
    Function('steps','"use strict";' + code )(steps);
    return steps;
}