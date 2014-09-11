$(document).ready(function() {
	$('#view').innerhtml = "your mom";
	var g = createEmptyGrid();
	g[0][0] = 1;
	display(g);
});

function check_valid(board, x, y, number) {
    for(i=0; i<9;i++ ){
        if(board[x][i] === number || board[i][y] === number){
            return false;
        }
        var box_x = x - (x % 3);
        var box_y = y - (y % 3);
        for (var i = 0; i < 3; i++) {
            for (var i = 0; i < 3; i++) {
                if(board[box_x+i][box_y+j] == number) {
                    return false;
                }
            }
        }
    }
    return true;
}

function createEmptyGrid() {
	var grid = new Array(9);
	for (var i=0; i<9; i++) {
		grid[i] = new Array(9);
	}

	for (var y=0; y<9; y++) {
		for (var x=0; x<9; x++) {
			grid[x][y] = 0;
		}
	}
	return grid;
}

function display(grid) {
	$('#sudo').html(toString(grid));
}

function toString(grid) {
	var s = "<table>";
	for (var y=0; y<9; y++) {
		s += "<tr>"
		for (var x=0; x<9; x++) {
			s += "<td>" + grid[x][y] + "</td>";
		}
		s += "<tr/>";
	}
	s += "</table>";
	return s;
}
