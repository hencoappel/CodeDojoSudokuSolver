$(document).ready(function() {
	var g = createEmptyGrid();
	g[0][0] = 1;
	display(g);
});


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
			s += grid[x][y] + "</td>";
		}
		s += "<tr/>";
	}
	s += "</table>";
	return s;
}