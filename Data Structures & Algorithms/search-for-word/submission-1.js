class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const isValidStep = (x, y) => {
            return !(
                x < 0 ||
                x >= board.length ||
                y < 0 ||
                y >= board[x].length ||
                (map.has(x) && map.get(x).has(y))
            );
        };
        const wordSearch = (x, y, i) => {
            if (i == word.length - 1 && board[x][y] == word[i]) return true;

            if (board[x][y] !== word[i]) return false;
            let res = false;
            if (map.has(x)) {
                map.get(x).add(y);
            } else {
                const set = new Set();
                set.add(y);
                map.set(x, set);
            }

            if (isValidStep(x - 1, y)) res = res || wordSearch(x - 1, y, i + 1);
            if (isValidStep(x + 1, y)) res = res || wordSearch(x + 1, y, i + 1);
            if (isValidStep(x, y - 1)) res = res || wordSearch(x, y - 1, i + 1);
            if (isValidStep(x, y + 1)) res = res || wordSearch(x, y + 1, i + 1);
            map.get(x).delete(y);
            if (map.get(x).size < 1) map.delete(x);
            return res;
        };

        let map = new Map();
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (wordSearch(i, j, 0)) return true;
                else map = new Map();
            }
        }
        return false;
    }
}
