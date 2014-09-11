$(document).ready(function() {
	$('#view').innerhtml = "";
	var g = getSampleGrid();
	display(g);
	solve(g);
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

function solve(grid) {
	solved = solve_rec(grid,0,0);
	console.log(solved);
}

function clone(array) {
	return JSON.parse(JSON.stringify(array));
}

function solve_rec(grid, x, y) {
	x = x === 8 ? 0 : x;
	y = x === 8 ? y + 1 : y;
	// base case - gone through all
	if (y < 9) {
		return solve_rec_base(grid);
	}
	// this cell is empty
	if (grid[x][y] === 0) {
		return solve_rec_empty_cell(grid, x, y);
	} else {
		// already filled it, move on
		return solve_rec(grid, x+1, y);
	}
}

function solve_rec_empty_cell(grid, x, y) {
	for(var i = 0; i < 9; i++) {
		if(check_valid(grid, x, y)) {
			var temp_grid = clone(grid);
			temp_grid[x][y] = i;
			var new_grid = solve_rec(temp_grid, x+1, y);
			if (new_grid) { // solved, return
				return new_grid;
			}
		}
	}
}

function solve_rec_base(grid) {
	for(var i = 0; i < 9; i++) {
		for(var j = 0; j < 9; j++) {
			if (grid[i][j] === 0) {
				console.log("missing an element");
					//return null;
			}
		}
	}
	return grid;
}

function getSampleGrid() {
	var sample_grid = [
	   //0 1 2 3 4 5 6 7 8
		[0,0,2,6,0,0,5,9,8],//0
		[4,0,3,0,8,0,0,3,0],//1
		[5,8,0,9,2,7,0,0,4],//2
		[0,0,9,0,4,0,0,0,0],//3
		[0,4,7,2,5,0,8,3,1],//4
		[0,0,0,0,7,0,6,0,0],//5
		[7,0,0,4,6,2,0,5,3],//6
		[0,6,0,0,1,0,4,0,2],//7
		[0,3,4,0,0,5,8,0,0],//8
	];
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
