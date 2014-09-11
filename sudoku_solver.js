$(document).ready(function() {
	$('#view').innerhtml = "your mom";
	var g = get_sample_grid();
	display(g);
});

function check_valid(board, x, y, number) {
    for(i=0; i<9;i++ ){
        if(Math.abs(board[x][i]) === number || Math.abs(board[i][y]) === number){
            return false;
        }
        var box_x = x - (x % 3);
        var box_y = y - (y % 3);
        for (var i = 0; i < 3; i++) {
            for (var i = 0; i < 3; i++) {
                if(Math.abs(board[box_x+i][box_y+j]) == number) {
                    return false;
                }
            }
        }
    }
    return true;
}

function get_sample_grid() {
	var sample_grid = createEmptyGrid();
	sample_grid[2][0] = -2;
	sample_grid[3][0] = -6;
	sample_grid[6][0] = -5;
	sample_grid[7][0] = -9;
	sample_grid[8][0] = -8;
	sample_grid[0][1] = -4;
	sample_grid[2][1] = -3;
	sample_grid[4][1] = -8;
	sample_grid[7][1] = -3;
	sample_grid[0][2] = -5;
	sample_grid[1][2] = -8;
	sample_grid[3][2] = -9;
	sample_grid[4][2] = -2;
	sample_grid[5][2] = -7;
	sample_grid[8][2] = -4;
	sample_grid[2][3] = -9;
	sample_grid[4][3] = -4;
	sample_grid[1][4] = -4;
	sample_grid[2][4] = -7;
	sample_grid[3][4] = -2;
	sample_grid[4][4] = -5;
	sample_grid[6][4] = -8;
	sample_grid[7][4] = -3;
	sample_grid[8][4] = -1;
	sample_grid[4][5] = -7;
	sample_grid[6][5] = -6;
	sample_grid[0][6] = -7;
	sample_grid[3][6] = -4;
	sample_grid[4][6] = -6;
	sample_grid[5][6] = -2;
	sample_grid[7][6] = -5;
	sample_grid[8][6] = -3;
	sample_grid[1][7] = -6;
	sample_grid[4][7] = -1;
	sample_grid[6][7] = -4;
	sample_grid[8][7] = -2;
	sample_grid[0][8] = -2;
	sample_grid[1][8] = -3;
	sample_grid[2][8] = -4;
	sample_grid[5][8] = -5;
	sample_grid[6][8] = -8;
	return sample_grid;
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

function getStringForPos(grid, x, y) {
	if(grid[x][y]===0){
		return "";
	}
	return Math.abs(grid[x][y]);
}
function toString(grid) {
	var s = "<table>";
	for (var y=0; y<9; y++) {
		if (y == 3 || y == 6) {
			s += "<tr class='vline'>"
		}
		else {
			s += "<tr>"
		}
		for (var x=0; x<9; x++) {
			if (x == 3 || x == 6) {
				s += "<td class='hline'>";
			}
			else {
				s += "<td>";
			}
			s += getStringForPos(grid,x,y) + "</td>";
		}
		s += "<tr/>";
	}
	s += "</table>";
	return s;
}
