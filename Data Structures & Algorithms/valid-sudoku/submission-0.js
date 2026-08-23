class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let i = 0; i < board.length; i++) {
            let set = new Set();
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] != ".") {
                    if (set.has(board[i][j])) return false;
                    set.add(board[i][j]);
                }
            }
        }

        for (let i = 0; i < board.length; i++) {
            let set = new Set();
            for (let j = 0; j < board[i].length; j++) {
                if (board[j][i] != ".") {
                    if (set.has(board[j][i])) return false;
                    set.add(board[j][i]);
                }
            }
        }

        let sets = Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => new Set()));
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] != ".") {
                    let x = Math.floor(i / 3);
                    let y = Math.floor(j / 3);
                    if (sets[x][y].has(board[i][j])) return false;
                    sets[x][y].add(board[i][j]);
                }
            }
        }

        return true;
    }
}
