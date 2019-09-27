onmessage = (m) => {
    safeCodeEval(m.data);
}

const generateRandomKey = (first, second ='') => {
    return `key-${'0' + first + second}=${new Date().getTime()}`
}

function safeCodeEval(code) {
    // eslint-disable-next-line no-new-func
    Function('Array1D', 'AlgortihmCanvas', '"use strict";' + code)(Array1D, AlgorithmCanvas);
}


class Array1D {
    constructor(elements, name = 'Arra1D') {
        this.name = name;
        this.elements = elements;
        this.style = [];
        this.records = [];
        this.type = 'Array1D';
        this.key = generateRandomKey(name,this.elements.length);
    }

    update(elements = this.elements) {
        this.elements = elements;
    }
    highlight = (...elements) => {
        this.style.push(...elements);
    }
    get getRecord() {
        return this.record;
    }
    record = () => {
        this.records.push({ 
            name:this.name,
            key:this.key,
            type:this.type,
            elements: this.elements, 
            style: this.style,
        })
    }
}

class AlgorithmCanvas {
    constructor() {
        this.structures = [];
    }
    watch(...structures) {
        this.structures.push(...structures);
    }
    draw() {
        this.structures.forEach(s => {
            s.record();
        });
    }
    end() {
        const records = this.structures.map(s => s.records);
        postMessage(records);
    }
}