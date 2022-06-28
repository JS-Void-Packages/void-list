export = class List<T> {

    private #internal: T[]

    /**
     * Create a list from an Array
     * @param object
     */
    static fromArray(object: any[]): any

    /**
     * Create a list from another List
     * @param list
     */
    static fromList(list: List<any>): List<any>

    /**
     * Convert json to a list.
     * @param object
     */
    static fromJson(object: {
        type: 'List',
        value: any[]
    }): List<any>

    /**
     * Convert json to a list.
     * @param object
     */
    fromJson(object: {
        type: 'List',
        value: T[]
    }): void

    /**
     * get the element at this index
     * @param index 
     */
    get(index:Number):T

    /**
     * add an element to the list
     * @param element
     */
    add(element: T): Boolean

    /**
     * add all the elements to the list
     * @param element 
     */
    addAll(...element: T[]): Boolean

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
     * remove all elements from the list
     */
    removeAll(): void

    /**
     * Call the predicate for each elements in the list.
     * @param predicate 
     */
     forEach(predicate?:(index: number,value: T, list:List<T>) => void): void

    /**
     * Filter the list and return a new list containing the filtered elements.
     * @param predicate 
     */
    filter(predicate?:(value: T, index: number) => boolean): List<T>

    /**
     * find the first element matching the predicate and return it.
     * @param predicate 
     */
    find(predicate?:(value: T, index: number) => boolean): T

    /**
     * find all elements in the list matching the predicate and return them as a list
     * @param predicate
     */
    findAll(predicate?:(value: T, index: number) => boolean): List<T>

    /**
     * Check if the list contain T element.
     * @param element 
     */
    contain(element: T): boolean

    /**
     * Check if the list contain All elements from another list.
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
        type: 'List',
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
    map(predicate: (value: T, index: number, list: List<T>) => any): List<any>

    /**
     * Shuffles list in place.
     */  
     shuffle(): void

     [Symbol.iterator](): Iterator<T>;

     toString(): string
}