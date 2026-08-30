class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let pos = [];
        for(let i = 0; i<position.length; i++){
            pos.push([position[i], speed[i]]);
        }
        pos.sort((a, b) => a[0] - b[0]);
        let stack = [];
        for(let i = 0; i<pos.length; i++){
            stack.push((target - pos[i][0]) / pos[i][1]);
        }
        let fleet = 0;
        while(stack.length > 1){
            let top = stack.pop();
            if(stack[stack.length - 1] > top){
                fleet++;
            }
            else{
                stack.pop();
                stack.push(top);
            }
        }
        return fleet + 1;
    }
}
