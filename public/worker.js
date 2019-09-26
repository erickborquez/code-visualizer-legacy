onmessage = (m) => {
    /*let newArray = [1,2,3,4,5,6];
    let array = new Array1D(newArray);
    console.log(array.elements);
    array.highlight({element:1, color:'red'},{elements:[0,4], color:'black'});
    array.update(newArray);
    */
    let steps = safeCodeEval(m.data);
    postMessage(steps);
}

function safeCodeEval(code) {
    const steps = [];
    // eslint-disable-next-line no-new-func
    Function('steps', 'Array1D', 'AlgortihmCanvas', '"use strict";' + code)(steps, Array1D, AlgorithmCanvas);
    return steps;
}


class Array1D {
    constructor(elements) {
        this.elements = elements;
        this.changes = [];
    }

    update(array = this.elements) {
        this.elements = array;
    }
    highlight = (...elements) => {
        this.changes.push(...elements);
    }
    get data() {
        return { elements: this.elements, changes: this.changes }
    }

}

class AlgorithmCanvas {
    constructor() {
        this.elements = [];
        this.steps = [];
    }
    watch(...elements) {
        this.elements.push(...elements);
    }
    draw() {
        this.steps.push(
            ...(this.elements.map(e => e.data))
        )
    }


}