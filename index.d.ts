interface ListObject<T> {
    type: 'List',
    value: Array<T>
}

export = class List<T> {

    private #internal: Array<T>

    /**
     * Create a list from an Array
     * @param object
     */
    static fromArray(object: Array<any>): List<any>
    static fromArray(object: Array<any>): List<String>
    static fromArray(object: Array<any>): List<Boolean>
    static fromArray(object: Array<any>): List<Number>

    /**
     * Create a list from another List
     * @param list
     */
    static fromList(list: List<any>): List<any>

    /**
     * Create a list from an Object
     * @param object
     */
    static fromJson(object: ListObject<any>): List<any>

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
     * remove the element from the list at that index
     * @param index 
     */
    remove(index: Number): T

    /**
     * remove any elements that match the predicate
     * @param predicate 
     */
    removeIf(predicate:(index: Number,value: T) => Boolean): void

    /**
     * Call the predicate for each elements in the list.
     * @param predicate 
     */
     forEach(predicate?:(index: Number,value: T, list:List<T>) => void): void

    /**
     * Filter the list and return a new list containing the filtered elements.
     * @param predicate 
     */
    filter(predicate?:(index: Number,value: T) => Boolean): List<T>

    /**
     * find the first element matching the predicate and return it.
     * @param predicate 
     */
    find(predicate?:(index: Number,value: T) => Boolean): T

    /**
     * find all elements in the list matching the predicate and return them as a list
     * @param predicate
     */
    findAll(predicate?:(index: Number,value: T) => Boolean): List<T>

    /**
     * Check if the list contain T element.
     * @param element 
     */
    contain(element: T): Boolean

    /**
     * return true if the list is empty, false otherwise.
     */
    empty(): Boolean

    /**
     * return the size of the list
     */
    size(): Number

    /**
     * Convert the List to JSON
     */
    toJson(): ListObject<T>

    /**
     * Sort the list based on the predicate result.
     * Work the same way as Array.sort()
     * @param predicate
     */
    sort(predicate: (a: T, b: T) => number): void

    /**
     * Calls a defined predicate function on each element of a list, and returns a list that contains the results.
     * @param predicate A function that accepts up to three arguments. The map method calls the predicate function one time for each element in the list.
     */
    map(predicate: (value: T, index: number, array: T[]) => any): List<any>
}