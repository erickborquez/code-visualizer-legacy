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
    constructor(elements = [0], name = 'Arra1D') {
        this.name = name;
        this.elements = elements;
        this.styles = [];
        this.fixedStyles = [];
        this.records = [];
        this.type = 'Array1D';
        this.key = generateRandomKey(name, this.elements.length);
    }

    update = (elements = [0]) => this.elements = elements;

    clearSelects = () => {
        this.fixedStyles = [];
        this.styles = [];
    }

    manualSelect = (...styles) => {
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

    manualSelectFixed = (...styles) => {
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
                    exists = true;
                    return s
                }
                return fixedStyle;
            })
            if (!exists) {
                this.fixedStyles = [...this.fixedStyles, s]
            }


        })
    }

    select = (index, backgroundColor = 'var(--secondary-color)', color = 'inherit') => {
        this.manualSelect({ index: index, color: color, backgroundColor: backgroundColor });
    }
    selectFixed = (index, name = 'default', backgroundColor = 'rgba(0,0,0,.2)', color = 'rgba(50,50,50,.5)') => {
        this.manualSelectFixed({ index: index, name: name, color: color, backgroundColor: backgroundColor });
    }

    record = () => {
        const styledElements = [];
        const { elements } = this;
        for (let i = 0; i < elements.length; i++) {
            let element = elements[i];
            let style = {}
            this.fixedStyles.forEach(s => {
                if (s.index(Number(i), element))
                    style = { ...style, ...s, index: i }
            })

            this.styles.forEach(s => {
                if (s.index(Number(i), element)) {
                    style = { ...style, ...s, index: i }
                }
            })

            styledElements.push({
                value: element,
                style: style
            })
        }

        this.records.push({
            name: this.name,
            key: this.key,
            type: this.type,
            elements: styledElements,
        })
        this.styles = [];
    }

    get getRecord() {
        return this.records;
    }
}

class Array2D {
    constructor(elements = [[null]], name = 'Array2D') {
        this.name = name;
        this.elements = elements;
        this.styles = [];
        this.fixedStyles = [];
        this.records = [];
        this.type = 'Array2D';
        this.key = generateRandomKey(name, this.elements.length);
    }
    update = (elements = [[0]]) => this.elements = elements;

    clearSelects = () => {
        this.fixedStyles = [];
        this.styles = [];
    }

    manualSelect = (...styles) => {
        styles.forEach(s => {
            //If the style.element is a number, its an array [x,y] its converted to a function that compares [x,y] position]
            if (Array.isArray(s.index)) {
                if (!isNaN(s.index[0])) {
                    let [yIndex, xIndex] = s.index;
                    s.index = ([y, x]) => y === yIndex && x === xIndex;
                } else {
                    let indexArray = s.index;
                    s.index = ([y, x]) => indexArray.some(([yIndex, xIndex]) => x === xIndex && y === yIndex);
                }
            }
            this.styles.push(s);
        })
    }
    manualSelectFixed = (...styles) => {
        styles.forEach(s => {
            if (Array.isArray(s.index)) {
                if (!isNaN(s.index[0])) {
                    let [yIndex, xIndex] = s.index;
                    s.index = ([y, x]) => y === yIndex && x === xIndex;
                } else {
                    let indexArray = s.index;
                    s.index = ([y, x]) => indexArray.some(([yIndex, xIndex]) => y === yIndex && x === xIndex);
                }
            }

            let exists = false;
            this.fixedStyles = this.fixedStyles.map(fixedStyle => {
                if (s.name === fixedStyle.name) {
                    exists = true;
                    return s;
                }
                return fixedStyle;
            })
            if (!exists) {
                this.fixedStyles = [...this.fixedStyles, s]
            }


        })
    }

    select = (index, backgroundColor = 'rgba(230,230,230,.2)', color = 'rgba(250,250,250,.7)') => {
        this.manualSelect({ index: index, color: color, backgroundColor: backgroundColor });
    }
    selectFixed = (index, name = 'default', backgroundColor = 'rgba(100,100,100,.2)', color = 'rgba(180,180,180,.7)') => {
        this.manualSelectFixed({ index: index, name: name, color: color, backgroundColor: backgroundColor });
    }

    record = () => {
        let maxSize = this.elements.reduce((max, e) => Math.max(max, e.length), 0);

        const styledElements2D = []

        const { elements } = this;
        for (let y = 0; y < elements.length; y++) {
            let array1D = elements[y];
            const styledElements1D = []
            if (array1D.length < maxSize) {
                array1D = [...array1D, ...Array(maxSize - array1D.length)];
            }
            for (let x = 0; x < array1D.length; x++) {
                let style = {};
                let e = array1D[x] || null;
                this.fixedStyles.forEach((s,i) => {
                    if (s.index([Number(y), Number(x)], e))
                        style = { ...style, ...s, index: [y, x] }
                })
                this.styles.forEach(s => {
                    if (s.index([Number(y), Number(x)], e))
                        style = { ...style, ...s, index: [y, x] }
                })
                styledElements1D.push({ value: array1D[x], style: style })
            }
            styledElements2D.push(styledElements1D);
        }
        this.records.push({
            name: this.name,
            key: this.key,
            type: this.type,
            elements: styledElements2D
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
        const records = this.structures.map(s => s.getRecord);
        postMessage(records);
    }
}