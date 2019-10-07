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

class Array2D {
    constructor(elements = [[0]], name = 'Array2D') {
        this.name = name;
        this.elements = elements;
        this.styles = [];
        this.fixedStyles = [];
        this.records = [];
        this.type = 'Array2D';
        this.key = generateRandomKey(name, this.elements.length);
    }
    update = (elements = [[0]]) => this.elements = elements;

    manualSelect = (...styles) => {
        styles.forEach(s => {
            //If the style.element is a number, its an array [x,y] its converted to a function that compares [x,y] position]
            if (Array.isArray(s.index)) {
                if (!isNaN(s.index[0])) {
                    let [xIndex, yIndex] = s.index;
                    s.index = ([x, y]) => x === xIndex && y === yIndex;
                } else {
                    let indexArray = s.index;
                    s.index = ([x, y]) => indexArray.some(([xIndex, yIndex]) => x === xIndex && y === yIndex);
                }
            }
            this.styles.push(s);
        })
    }
    manualSelectFixed = (...styles) => {
        styles.forEach(s => {
            if (Array.isArray(s.index)) {
                if (!isNaN(s.index[0])) {
                    let [xIndex, yIndex] = s.index;
                    s.index = ([x, y]) => x === xIndex && y === yIndex;
                } else {
                    let indexArray = s.index;
                    s.index = ([x, y]) => indexArray.some(([xIndex, yIndex]) => x === xIndex && y === yIndex);
                }
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

    select = (index, backgroundColor = 'rgba(230,230,230,.2)', color = 'rgba(250,250,250,.7)') => {
        this.manualSelect({ index: index, color: color, backgroundColor: backgroundColor });
    } 
    selectFixed = (index, name = 'default', backgroundColor = 'rgba(100,100,100,.2)', color = 'rgba(180,180,180,.7)') => {
        this.manualSelectFixed({ index: index, name: name, color: color, backgroundColor: backgroundColor });
    }

    record = () => {
        let maxSize = this.elements.reduce((max, e) => Math.max(max, e.length), 0);
        const elements = this.elements.map((array1D, x) => {
            if (array1D.length < maxSize)
                array1D = [...array1D, ...Array(maxSize - array1D.length)];
            return array1D.map((e, y) => {
                let style = {}
                this.fixedStyles.forEach(s => {
                    if (s.index([x, y], e))
                        style = { ...style, ...s, index: [x, y] }
                })
                this.styles.forEach(s => {
                    if (s.index([x, y], e))
                        style = { ...style, ...s, index: [x, y] }
                })

                return {
                    value: e,
                    style: style
                }
            })

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
        const records = this.structures.map(s => s.getRecord);
        postMessage(records);
    }
}