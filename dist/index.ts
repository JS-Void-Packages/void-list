export class List<T> {
    #internal: T[] = [];
    
    add(value: T): boolean {
        let i1 = this.#internal.length;

        // push return the new array length
        let i2 = this.#internal.push(value);

        return i2 > i1;
    }

    addAll(list: List<T>): boolean {
        let bool: boolean = false;

        for(let i = 0; i<list.#internal.length; i++) {
            let e = list.#internal[i];
            let b = this.add(e);

            if(!b) {
                bool = false;
                break;
            }
        }

        return bool;
    }

    /**
     * get the element at this index
     * @param {number} index 
     * @returns 
     */
    get(index: number) {
        return this.#internal[index];
    }

    forEach(predicate: (element: T, index: number) => void) {
        for(let i = 0; i<this.#internal.length; i++) {
            predicate(this.#internal[i], i);
        }
    }

    map<E>(predicate: (element: T, index: number) => E): List<E> {
        let exit: List<E> = new List();
        for(let i = 0; i<this.#internal.length; i++) {
            exit.add(predicate(this.#internal[i], i));
        }

        return exit;
    }

    reverse() {
        for (let i = 0; i < this.#internal.length / 2; i++) {
            let temp = this.#internal[i];
            this.#internal[i] = this.#internal[this.#internal.length - 1 - i];
            this.#internal[this.#internal.length - 1 - i] = temp;
        }
    }

    getIndex(value: T): number {
        return this.#internal.indexOf(value);
    }

    getAllIndexes(): List<number> {
        return this.map(e => this.getIndex(e));
    }
}

export class ImmutableList<T> extends List<T> {

    static Builder = class Builder<T> {

        private elements: List<T> = new List<T>();

        constructor() {}

        add(element: T): Builder<T> {
            this.elements.add(element);
            return this;
        }

        addAll(...elements: T[]): Builder<T> {
            for(let element of elements) {
                this.elements.add(element);
            }
            return this;
        }

        build(): ImmutableList<T> {
            return new ImmutableList(this.elements);
        }
    }

    constructor(list?: List<T>) {
        super();
        if(typeof list != 'undefined') {
            this.addAll(list);
        }
    }

    add(value: T): boolean {
        return false;
    }

    addAll(list: List<T>): boolean {
        return false;
    }
}