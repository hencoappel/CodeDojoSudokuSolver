$(document).ready(function() {
	$('#view').innerhtml = "your mom";
});

function check_valid(board, x, y, number) {
    for(i=0; i<9;i++ ){
        if(board[x][i] === number || board[i][y] === number){
            return false;
        }
        var box_x = x - (x % 3);
        var box_y = y - (y % 3);
        for (var i = 0; i < 3; i++;) {
            for (var i = 0; i < 3; i++;) {
                if(board[box_x+i][box_y+j] == number) {
                    return false;
                }
            }
        }
    }
    return true;
}
