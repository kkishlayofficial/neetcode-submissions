class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const wordSearch = (x, y, i) => {
            if (x < 0 || x >= board.length || y < 0 || y >= board[x].length) return false;
            if (board[x][y] !== word[i]) return false;

            const val = board[x][y];

            if (i === word.length - 1) {
                board[x][y] = val;
                return true;
            }
            board[x][y] = 1;

            if (wordSearch(x - 1, y, i + 1)) return true;
            if (wordSearch(x + 1, y, i + 1)) return true;
            if (wordSearch(x, y - 1, i + 1)) return true;
            if (wordSearch(x, y + 1, i + 1)) return true;

            board[x][y] = val;

            return false;
        };

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (wordSearch(i, j, 0)) return true;
            }
        }
        return false;
    }
}
