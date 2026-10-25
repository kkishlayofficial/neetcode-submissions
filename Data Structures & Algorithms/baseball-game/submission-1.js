class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const options = [];

        for(let op of operations){
            if(op === '+'){
                let val1 = Number(options.pop());
                let val2 = Number(options.pop());
                options.push(val2);
                options.push(val1);
                options.push(val1 + val2);
            }
            else if(op === 'C'){
                options.pop();
            }
            else if(op === 'D'){
                let val = options.pop();
                options.push(val);
                options.push(val*2);
            }
            else options.push(Number(op));
        }
        let sum = 0;
        for(let score of options){
            sum+=score;
        }
        return sum;
    }
}
