export declare class TwoWayMap<KeyType, ValueType> {
    map: Map<KeyType, ValueType>;
    reverseMap: Map<ValueType, KeyType>;
    /**
     * @param map - an optional map of parameters
     */
    constructor();
    /**
     * Get the value from the map by key
     * @param key - the key we are searching by
     * @returns - the value associated with the key
     */
    getFromKey(key: KeyType): ValueType;
    /**
     * Get the reverse key from the map by searching by value
     * @param value - the key we are searching by
     * @returns - they key associated with the value
     */
    getFromValue(value: ValueType): KeyType;
    /**
     * Add a key and value to both the map and reverse map
     * @param key - the indexing key
     * @param value - the value associated with the key
     */
    add(key: KeyType, value: ValueType): void;
    /**
     * Remove a key and value from both the map and reverse map
     * @param key - the indexing key
     * @param value - the value associated with the key
     */
    remove(key: KeyType, value: ValueType): void;
}
