/**
 * void-list by Mrthomas20121
 * Copyright 2021-2022
 */

/**
 * List class
 */
class List {

    #internal = []

    /**
     * Merge lists together
     * @param  {...List} lists 
     */
    static merge(...lists) {
        let list = new List()
        lists.forEach(l => list.fromList(l))
        return list
    }

        /**
     * create a list from those elements.
     * @param  {...any} elements 
     */
         static from(...elements) {
            return List.fromArray(elements)
        }

    /**
     * convert a Array to a List
     * @param {any[]} object 
     * @returns {List}
     */
     static fromArray(object) {
        return new List().fromArray(object)
    }

    /**
     * add elements from another list to this list
     * @param {List} list 
     */
     static fromList(list) {
        return list.fromList(list)
    }

    static fromJson(object) {
        let list = new List()
        return list.fromJson(object)
    }

    /**
     * 
     * @param {number} index1 the lowest number
     * @param {number} index2 the highest number
     * @param {any} value the value
     * @returns 
     */
    fill(index1, index2, value) {
        let copy = this.copy()
        for (let i = 0; i < this.#internal.length; i++) {
            if(i >= index1 && i <= index2) {
                copy.#internal[i] = value
            }
        }
        return copy
    }

    /**
     * Create a copy of this list
     * @returns 
     */
    copy() {
        return List.fromArray(this.#internal)
    }

    clone() {
        return this.copy()
    }

    shift() {
        this.#internal.shift()
    }

    join(seperator=',') {
        return this.#internal.join(seperator)
    }

    reverse() {
        for (let i = 0; i < this.#internal.length / 2; i++) {
            let temp = this.#internal[i];
            this.#internal[i] = this.#internal[this.#internal.length - 1 - i];
            this.#internal[this.#internal.length - 1 - i] = temp;
        }
    }

    /**
     *  Returns a copy of a section of an list.
     * @param {number} start 
     * @param {number} end 
     * @returns 
     */
    slice(start=0, end=0) {
        let copy = this.copy()
        if(end == 0) {
            copy.#internal.slice(start)
        }
        else if(start == 0 && end == 0) {
            copy.#internal.slice()
        }
        else {
            copy.#internal.slice(start, end)
        }
        return copy
    }

    getAllIndexes() {
        return this.map((value, index, list) => index)
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
     * @returns {boolean}
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

    addIf(other, predicate) {
        let bool = predicate(this, other)
        if(bool) {
            this.fromList(other)
        }
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
     * @param {(element:any, index:number) => boolean} predicate 
     */
    removeIf(predicate) {
        for(let i = 0; i<this.#internal.length; i++) {
            let check = predicate(this.#internal[i], i)
            if(check) {
                this.remove(i)
            }
        }
    }

    /**
     * remove all elements in the list that does not match the predicate
     * @param {(element:any, index:number) => boolean} predicate 
     */
    removeALLBut(predicate) {
        for(let i = 0; i<this.#internal.length; i++) {
            let check = predicate(this.#internal[i], i)
            if(!check) {
                this.remove(i)
            }
        }
    }

    /**
     * Remove All elements from the list.
     */
    removeAll() {
        // reset the internal
        this.#internal = []
        return this.isEmpty()
    }

    /**
     * Same as removeAll
     */
    clear() {
        return this.removeAll()
    }

    /**
     * call the predicate for each elements in the list
     * @param {(element:any, index:number) => boolean} predicate 
     */
     forEach(predicate) {
        for(let i = 0; i<this.#internal.length; i++) {
            predicate(this.#internal[i], i, this)
        }
    }

    /**
     * remove elements in the list if they match the predicate
     * @param {(element:any, index:number) => boolean} predicate
     * @returns {List}
     */
    filter(predicate=(element, i) => false) {
        let list = new List()
        for(let i = 0; i<this.#internal.length; i++) {
            let check = predicate(this.#internal[i], i)
            if(check) {
                list.add(this.#internal[i])
            }
        }
        return list
    }

    /**
     * find the first element that match
     * @param {(element:any, index:number => boolean} predicate 
     */
    find(predicate=(element, i) => false) {
        let output = null
        for(let i = 0; i<this.#internal.length; i++) {
            let check = predicate(this.#internal[i], i)
            if(check) {
                output = this.#internal[i]
                break
            }
        }
        return output
    }

    /**
     * return a new List containing the elements
     * @param {(element:any, index:number) => boolean} predicate 
     * @returns {List}
     */
     findAll(predicate=(element, i) => false) {
        let output = new List()
        for(let i = 0; i<this.#internal.length; i++) {
            let check = predicate(this.#internal[i], i)
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
     * check if all elements from x list are is in the list
     * @param {List} list 
     * @returns {boolean}
     */
    containsAll(list) {
        let check = false
        for(let item of list) {
            if(this.contain(item)) {
                check = true
                break
            }
        }
        return check
    }

    /**
     * @deprecated since version 1.0.8, use  {@Link isEmpty()} instead
     * @returns {boolean}
     */
    empty() {
        return this.#internal.length == 0
    }

    isEmpty() {
        return this.#internal.length == 0
    }

    size() {
        return this.#internal.length
    }

    /**
     * add elements from another list to this list
     * @param {List} list 
     */
    fromList(list) {
        for(let element of list) {
            this.add(element)
        }
    }

    /**
     * convert a Array to a List
     * @param {any[]} object 
     */
    fromArray(object) {
        for(let element of object) {
            this.add(element)
        }
        return this
    }

    /**
     * convert a Array to a List
     * @param {*} object 
     */
    fromJson(object) {
        if(object.hasOwnProperty('type') && object.type == 'list') {
            for(let element of object.value) {
                this.add(element)
            }
        }
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

    toString() {
        return `List [${this.#internal}]`
    }

    sort(predicate) {
        this.#internal.sort(predicate)
    }

    set(i, element) {
        this.#internal[i] = element
        return element
    }

    /**
     * indexOf is the only method using the array indexOf
     * @param {*} element 
     * @returns 
     */
    indexOf(element) {
        return this.#internal.indexOf(element)
    }

    /**
     * Calls a defined callback function on each element of an list, and returns an list that contains the results.
     * @param {(value: any, index: number, list: List) => any} predicate 
     * @returns 
     */
    map(predicate) {
        let list = new List()
        for(let i = 0; i<this.#internal.length; i++) {
            let value = this.#internal[i]
            list.add(predicate(value, i, this))
        }
        return list
    }

    /**
     * Shuffles list in place.
     */  
    shuffle() {
        for (let i = this.#internal.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.#internal[i], this.#internal[j]] = [this.#internal[j], this.#internal[i]];
        }
    }

    toArray() {
        return this.#internal
    }

    /**
     * check if both list have the same internal.
     * @param {List} other 
     */
    equals(other) {
        return !this.isEmpty() && !other.isEmpty() && this.containsAll(other) && this.size() == other.size()
    }

    /**
     * Retains only the elements in this list that are contained in the other List.
     * @param {List} other 
     */
    retainAll(other) {
        // nothing change if any of the lists are empty
        if(this.isEmpty() || other.isEmpty()) {
            return this
        }
        else {
            return this.copy().filter(element => other.contain(element))            
        }
    }
}

module.exports = List