class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const visitedArray = Array.from({ length: board.length }, () =>
            Array.from({ length: board[0].length }, () => 0),
        );

        const isValidStep = (x, y) => {
            return !(
                x < 0 ||
                x >= board.length ||
                y < 0 ||
                y >= board[x].length ||
                visitedArray[x][y] === 1
            );
        };
        const wordSearch = (x, y, i) => {
            if (i == word.length - 1 && board[x][y] == word[i]) return true;

            if (board[x][y] !== word[i]) return false;

            visitedArray[x][y] = 1;

            if (isValidStep(x - 1, y) && wordSearch(x - 1, y, i + 1)) return true;
            if (isValidStep(x + 1, y) && wordSearch(x + 1, y, i + 1)) return true;
            if (isValidStep(x, y - 1) && wordSearch(x, y - 1, i + 1)) return true;
            if (isValidStep(x, y + 1) && wordSearch(x, y + 1, i + 1)) return true;

            visitedArray[x][y] = 0;

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
