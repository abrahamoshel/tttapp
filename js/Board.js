function Board() {
  this.grid = new Array();
}

Board.prototype.columns = 3;
Board.prototype.rows = 3;

Board.prototype.setPosition = function(x, y, player) {
  if (this.grid[x.toString() + y.toString()] == null) {
    this.grid[x.toString() + y.toString()] = player;
    return true;
  }
  
  return false;
};

Board.prototype.isWinner = function(player) {
  return this.verticalWinner(player) || this.horizontalWinner(player) || this.diagonalWinner(player);
}

Board.prototype.verticalWinner = function(player) {
  for (column = 1; column <= this.columns; column++) {
    counter = 0;

    for (row = 1; row <= this.rows; row++) {
      if (this.grid[column.toString() + row.toString()] == player) {
        counter++;
      }
    }

    if (counter == 3) {
      return true;
    }
  }

  return false;
}

Board.prototype.horizontalWinner = function(player) {
  for (row = 1; row <= this.rows; row++) {
    counter = 0;

    for (column = 1; column <= this.columns; column++) {
      if (this.grid[column.toString() + row.toString()] == player) {
        counter++;
      }
    }

    if (counter == 3) {
      return true;
    }
  }

  return false;
}

Board.prototype.diagonalWinner = function(player) {
  cells = [3, 2, 1];

  for (diag in cells) {
    if (this.grid[diag.toString() + diag.toString()] == player) {
      counter++;
    }
  }

  if (counter == 3) {
    return true;
  }
}
