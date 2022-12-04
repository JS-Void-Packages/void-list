//
// void-list by Mrthomas20121
// Copyright 2021-2022
//

/**
 * List class
 */
export = class List<T> {

    /**
     * Merge the lists into one
     * @param lists 
     */
    static merge<U>(...lists: List<U>[]): List<U>

    /**
     * Create a list from an Array
     * @param object
     */
    static fromArray<U>(object: U[]): List<U>

    /**
     * Create a list from those elements
     * @param elements 
     */
    static from<U>(...elements: U[]): List<U>

    /**
     * Create a list from another List
     * @param list
     */
    static fromList<U>(list: List<U>): List<U>

    /**
     * Convert json to a list.
     * @param object
     */
    static fromJson<U>(object: {
        type: 'List',
        value: U[]
    }): List<U>

    /**
     * add all elements from the array to this list
     * not the same as addAll
     * @param object
     */
    fromArray(object: T[]): this

    /**
     * Convert json to a list.
     * @param object
     */
    fromJson(object: {
        type: 'List',
        value: T[]
    }): this

    
    /**
     * Adds all the elements of an list into a string, separated by the specified separator string.
     * @param separator A string used to separate one element of the list from the next in the resulting string. If omitted, the list elements are separated with a comma.
     */
    join(separator?: string): string

    /**
     * Removes the first element from an list and returns it.
     * If the list is empty, undefined is returned and the list is not modified.
     */
    shift(): T | undefined

    /**
     * Returns a copy of a section of an list.
     * For both start and end, a negative index can be used to indicate an offset from the end of the list.
     * For example, -2 refers to the second to last element of the list.
     * @param start The beginning index of the specified portion of the list.
     * If start is undefined, then the slice begins at index 0.
     * @param end The end index of the specified portion of the list. This is exclusive of the element at the index 'end'.
     * If end is undefined, then the slice extends to the end of the list.
     */
    slice(start?: number, end?: number): List<T>

    /**
     * fill every field between the two indexes by the provided value, return the modified list
     * @param index1 the lowest index
     * @param index2 the highest index
     * @param value 
     */
    fill(index1:number, index2:number, value: T): List<T>

    /**
     * Create a copy of the list
     */
    copy(): List<T>

    /**
     * Alias for copy()
     */
    clone(): List<T>

    /**
     * Reverses the elements in an list in place.
     * This method mutates the list
     */
    reverse(): void

    /**
     * Return the index of all elements in the list.
     */
    getAllIndexes(): List<number>

    /**
     * Get the element at this index.
     * @param index 
     */
    get(index:Number):T

    /**
     * Add an element to the list
     * @param element
     */
    add(element: T): boolean

    /**
     * Add all elements to the list.
     * Return true if they were all added.
     * @param element 
     */
    addAll(...element: T[]): boolean

    /**
     * add another list content to this one if it match the predicate
     * @param other another list
     * @param predicate list predicate
     */
    addIf(other:List<T>, predicate:(list:List<T>, other:List<T>) => boolean): void

    /**
     * remove the element from the list at that index and return it.
     * @param index 
     */
    remove(index: Number): T

    /**
     * remove any elements that match the predicate
     * @param predicate 
     */
    removeIf(predicate:(value: T, index: number) => boolean): void


    /**
     * remove all elements in the list that does not match the predicate
     * @param predicate 
     */
    removeALLBut(predicate:(value: T, index: number) => boolean): void

    /**
     * remove all elements from the list
     * return true if it was not successful
     */
    removeAll(): boolean

    /**
     * Alias for removeAll
     */
    clear(): boolean

    /**
     * Performs the specified action for each element in an list.
     * @param predicate 
     */
    forEach(predicate:(value: T, index: number) => void): void

    /**
     * Filter the list and return a new list containing the filtered elements.
     * @param predicate 
     */
    filter(predicate:(value: T, index: number) => boolean): List<T>

    /**
     * find the first element matching the predicate and return it.
     * @param predicate 
     */
    find(predicate:(value: T, index: number) => boolean): T

    /**
     * find all elements in the list matching the predicate and return them as a list
     * @param predicate
     */
    findAll(predicate:(value: T, index: number) => boolean): List<T>

    /**
     * Check if the list contain T element.
     * @param element 
     */
    contain(element: T): boolean

    /**
     * Check if the list contain All elements of another list.
     * @param list 
     */
     containAll(list: List<T>): boolean

    /**
     * return true if the list is empty, false otherwise.
     * @deprecated since version 1.0.8, use  {@Link isEmpty()} instead
     */
    empty(): boolean

    isEmpty(): boolean

    /**
     * return the size of the list
     */
    size(): number

    /**
     * Convert the List to JSON
     */
    toJson(): {
        type: 'list',
        value: T[]
    }

    /**
     * Sort the list based on the predicate result.
     * Work the same way as Array.sort()
     * @param predicate
     */
    sort(predicate: (a: T, b: T) => number): void

    /**
     * Replace the element at x index
     * @param index 
     * @param element 
     */
    set(index:number, element:T): T

    /**
     * Get the index of an element. return -1 if not found.
     * @param element 
     */
    indexOf(element:T): number

    /**
     * Calls a defined predicate function on each element of a list, and returns a list that contains the results.
     * @param predicate A function that accepts up to three arguments. The map method calls the predicate function one time for each element in the list.
     */
    map<U>(predicate: (value: T, index: number, list: List<T>) => U): List<U>

    /**
     * Shuffles list in place.
     */  
    shuffle(): void

    [Symbol.iterator](): Iterator<T>;

    toString(): string

    toArray(): T[]

     /**
     * check if both list have the same internal.
     * @param other another list 
     */
    equals(other:List<T>): boolean

    /**
     * Retains only the elements in this list that are contained in the other List.
     * @param other another list
     */
    retainAll(other:List<T>): List<T>

    fromList(list:List<T>): void
}