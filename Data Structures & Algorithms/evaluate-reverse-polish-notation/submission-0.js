class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = new Array();

        for (let token of tokens) {
            switch (token) {
                case "+": {
                    let a = stack.pop();
                    let b = stack.pop();
                    let c = b + a;
                    stack.push(c);
                    break;
                }

                case "-": {
                    let a = stack.pop();
                    let b = stack.pop();
                    let c = b - a;
                    stack.push(c);
                    break;
                }

                case "*": {
                    let a = stack.pop();
                    let b = stack.pop();
                    let c = b * a;
                    stack.push(c);
                    break;
                }

                case "/": {
                    let a = stack.pop();
                    let b = stack.pop();
                    let c = b / a;
                    stack.push(c > 0 ? Math.floor(c) : Math.ceil(c));
                    break;
                }

                default:
                    stack.push(Number(token));
                    break;
            }
        }
        return stack[stack.length - 1];
    }
}
