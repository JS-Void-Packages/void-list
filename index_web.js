class List extends Object {

    #internal = []

    constructor() {
        super()
    }

    /**
     * get the element at this index
     * @param {number} index 
     * @returns 
     */
    get(index) {
        return this.#internal[index]
    }

    /**
     * add a element to the list
     * @param {any} element 
     *  @returns {boolean}
     */
    add(element) {
        this.#internal.push(element)

        return this.contain(element)
    }

    /**
     * add all elements to the list
     * @param  {...any} elements 
     * @returns {boolean} 
     */
    addAll(...elements) {
        let bool = false
        for(let element of elements) {
            bool = this.add(element)
        }
        return bool
    }

    /**
     * remove an element from the list
     * @param {number} index 
     * @returns {any}
     */
    remove(index) {
        let element = this.get(index)
        this.#internal.splice(index, 1)

        if(!this.contain(element)) {
            return element
        }
        return null
    }

    /**
     * remove elements in the list if they match the predicate
     * @param {(index:number,element:any) => boolean} predicate 
     */
    removeIf(predicate) {
        for(let i = 0; i<this.#internal.length; i++) {
            let check = predicate(i, this.#internal[i])
            if(check) {
                this.remove(i)
            }
        }
    }

    /**
     * call the predicate for each elements in the list
     * @param {(index:number,element:any, list:List) => void} predicate 
     */
     forEach(predicate) {
        for(let i = 0; i<this.#internal.length; i++) {
            predicate(i, this.#internal[i], this)
        }
    }

    /**
     * remove elements in the list if they match the predicate
     * @param {(index:number,element:any) => boolean} predicate
     * @returns {List}
     */
    filter(predicate=(index, element) => false) {
        let list = new List()
        for(let i = 0; i<this.#internal.length; i++) {
            let check = predicate(i, this.#internal[i])
            if(check) {
                list.add(this.#internal[i])
            }
        }
        return list
    }

    /**
     * find the first element that match
     * @param {(index:number, element) => boolean} predicate 
     */
    find(predicate=(index, element) => false) {
        let output
        for(let i = 0; i<this.#internal.length; i++) {
            let check = predicate(i, this.#internal[i])
            if(check) {
                output = this.#internal[i]
                break
            }
        }
        return output
    }

    /**
     * return a new List containing the elements
     * @param {(index:number, element) => boolean} predicate 
     * @returns {List}
     */
     findAll(predicate=(index, element) => false) {
        let output = new List()
        for(let i = 0; i<this.#internal.length; i++) {
            let check = predicate(i, this.#internal[i])
            if(check) {
                output.add(this.#internal[i])
            }
        }
        return output
    }

    /**
     * check if x element is in the list
     * @param {*} element 
     * @returns {boolean}
     */
    contain(element) {
        let check = false
        for(let elem of this.#internal) {
            if(element == elem) {
                check = true
                break
            }
        }
        return check
    }

    /**
     * 
     * @returns {boolean}
     */
    empty() {
        return this.#internal.length == 0
    }

    size() {
        return this.#internal.length
    }

    /**
     * convert a Array to a List
     * @param {*} object 
     * @returns {List}
     */
    static fromArray(object) {
        let list = new List()
        if(Array.isArray(object)) {
            for(let element of object) {
                list.add(element)
            }
        }
        else {
            let msg = `Error, ${object} is not an Array!`
            throw new SyntaxError(msg)
        }
        return list
    }

    /**
     * add elements from another list to this list
     * @param {List} list 
     */
    static fromList(list) {
        for(let element of list) {
            this.add(element)
        }
    }

    /**
     * convert a Array to a List
     * @param {*} object 
     */
     static fromJson(object) {
        let list = new List()
        if(Array.isArray(object.value) && object.hasOwnProperty('type') && object.type == 'list') {
            for(let element of object.value) {
                list.add(element)
            }
        }
        else {
            let msg = `Error, ${object} is not an Array!`
            throw new SyntaxError(msg)
        }
        return list
    }

    /**
     * Convert the list to json
     * @returns {{ type:'list', value:any[]}}
     */
    toJson() {
        return {
            type:'list',
            value:this.#internal
        }
    }

    [Symbol.iterator]() {
        var index = -1;
        var data  = this.#internal;
    
        return {
            next: () => ({ value: data[++index], done: !(index in data) })
        }
    }

    [Symbol.toStringTag]() {
        return `List {${this.#internal}}`
    }

    toString() {
        return `List {${this.#internal}}`
    }

    sort(predicate) {
        this.#internal.sort(predicate)
    }

    /**
     * Calls a defined callback function on each element of an list, and returns an list that contains the results.
     * @param {(value: any, index: number, array: any[]) => any} predicate 
     * @returns 
     */
    map(predicate) {
        let array = this.#internal.map(predicate)
        return List.fromArray(array)
    }

}