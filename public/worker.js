onmessage = (m) => {
    safeCodeEval(m.data);
}

const generateRandomKey = (first, second = '') => {
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
        this.styles = [];
        this.fixedStyles = [];
        this.records = [];
        this.type = 'Array1D';
        this.key = generateRandomKey(name, this.elements.length);
    }

    update = (elements = []) => this.elements = elements;

    highlight = (...styles) => {
        styles.forEach(s => {
            //If the style.element is a number, its converted to a function that compares with the number
            if (!isNaN(s.index)) {
                let index = s.index;
                s.index = (i) => i === index;
            } else if (Array.isArray(s.index)) {
                let index = s.index;
                s.index = (i) => index.includes(i);
            }
            this.styles.push(s);
        })
    }

    highlightFixed = (...styles) => {
        styles.forEach(s => {
            if (!isNaN(s.index)) {
                let index = s.index;
                s.index = (i) => i === index;
            } else if (Array.isArray(s.index)) {
                let index = s.index;
                s.index = (i) => index.include(i);
            }
            let exists = false;
            this.fixedStyles = this.fixedStyles.map(fixedStyle => {
                if (s.name === fixedStyle.name) {
                    return s
                }
                return fixedStyle;
            })
            if (!exists) {
                this.fixedStyles = [...this.fixedStyles, s]
            }


        })
    }

    select = (index, backgroundColor, color = 'black') => {
        this.highlight({ index: index, color: color, backgroundColor: backgroundColor });
    }
    selectFixed = (index, name = 'default', backgroundColor = 'red', color = 'black') => {
        this.highlightFixed({ index: index, name: name, color: color, backgroundColor: backgroundColor });
    }

    record = () => {
        const elements = this.elements.map((e, i) => {

            let style = {}
            this.fixedStyles.forEach(s => {
                if (s.index(i, e))
                    style = { ...style, ...s, index: null }
            })
            this.styles.forEach(s => {
                if (s.index(i, e))
                    style = { ...style, ...s, index: null }
            })


            return {
                value: e,
                style: style
            }
        })

        this.records.push({
            name: this.name,
            key: this.key,
            type: this.type,
            elements: elements,
        })
        this.styles = [];
    }

    get getRecord() {
        return this.records;
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