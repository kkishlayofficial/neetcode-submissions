class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) this.keyStore.set(key, []);
        this.keyStore.get(key).push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.keyStore.has(key)) return "";
        const arr = this.keyStore.get(key);
        let l = 0,
            r = arr.length - 1;
        while (l <= r) {
            let mid = l + Math.floor((r - l) / 2);
            if (arr[mid][0] == timestamp) return arr[mid][1];
            if (arr[mid][0] < timestamp) l = mid + 1;
            else r = mid - 1;
        }
        if (r < 0) return "";
        return arr[r][1];
    }
}
