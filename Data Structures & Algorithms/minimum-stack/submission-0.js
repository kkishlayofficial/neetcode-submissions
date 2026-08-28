class MinStack {
    constructor() {
        this.stack = new Array();
        this.minArr = new Array();
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if(this.minArr.length > 0){
            this.minArr.push(Math.min(this.minArr[this.minArr.length - 1], val));
        }
        else this.minArr.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.minArr.pop();
        return this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minArr[this.minArr.length - 1];
    }
}
