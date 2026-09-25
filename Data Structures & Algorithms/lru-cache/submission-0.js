/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.map = new Map();
    this.size = capacity;
    this.head = null;
    this.tail = null;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.map.has(key)) return -1;

    // Get the respective node from map
    let [val, curr] = this.map.get(key);

    // Find prev and next node to connect each other
    let currPrev = curr.prev;
    let currNext = curr.next;

    if (curr === this.tail) return val;

    // Isolate the curr Node
    if (currPrev && currNext) {
        currPrev.next = currNext;
        currNext.prev = currPrev;
    }
    else if (currNext) {
        currNext.prev = null;
        this.head = currNext;

    }
    this.tail.next = curr;
    curr.prev = this.tail;
    curr.next = null;
    this.tail = curr;

    return val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    // Created new node
    let curr;
    if (this.map.has(key)) curr = this.map.get(key)[1];
    else curr = new DLL(key);

    if (!this.head && !this.tail) {
        this.head = curr;
        this.tail = curr;
        this.map.set(key, [value, curr]);
        return;
    }
    if (curr === this.tail) {
        this.map.set(key, [value, curr]);
        if (this.map.size > this.size) {
            let k = this.head.val;
            this.head = this.head.next;
            if (this.head) this.head.prev = null;
            this.map.delete(k);
        }
        return;
    }

    // Find prev and next node to connect each other
    let currPrev = curr.prev;
    let currNext = curr.next;

    // Isolate the curr Node
    if (currPrev && currNext) {
        currPrev.next = currNext;
        currNext.prev = currPrev;
    }
    else if (currNext) {
        currNext.prev = null;
        this.head = currNext;
    }
    this.tail.next = curr;
    curr.prev = this.tail;
    curr.next = null;
    this.tail = curr;

    // If head is null make head as curr as well.
    if (!this.head) this.head = curr;

    // Set the new item in map
    this.map.set(key, [value, curr]);

    // More keys than capacity
    if (this.map.size > this.size) {
        let k = this.head.val;
        this.head = this.head.next;
        if (this.head) this.head.prev = null;
        this.map.delete(k);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

var DLL = function (val, prev = null, next = null) {
    this.val = val;
    this.prev = prev;
    this.next = next;
}