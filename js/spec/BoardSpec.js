describe("Board", function() {
  var board;

  describe("base functionality", function() {
    beforeEach(function() {
      board = new Board();
    });

    it("should have three columns", function() {
      expect(board.columns).toEqual(3);
    });

    it("should have three row", function() {
      expect(board.rows).toEqual(3);
    });

    it("should have a multi-dimensional grid", function() {
      expect(board.grid).toBeDefined();
    });
  });

  describe("setting the grid", function() {
    var player;
    x = 1;
    y = 1;

    beforeEach(function() {
      board = new Board();
      player = "X";
    });

    it("should set the grid position if not set", function() {
      expect(board.setPosition(x, y, player)).toBeTruthy();
    });

    it("should not set the grid position if already set", function() {
      board.setPosition(x, y, player);
      expect(board.setPosition(x, y, player)).toBeFalsy();
    });
  });

  describe("win conditions", function() {
    var player;

    beforeEach(function() {
      board = new Board();
      player = "X";
    });

    it("should win if three in a row vertically exist", function() {
      board.setPosition(1, 1, player);
      board.setPosition(1, 2, player);
      board.setPosition(1, 3, player);
      expect(board.isWinner(player)).toBeTruthy();
    });

    it("should win if any three in a row vertically exist", function() {
      board.setPosition(3, 1, player);
      board.setPosition(3, 2, player);
      board.setPosition(3, 3, player);
      expect(board.isWinner(player)).toBeTruthy();
    });

    it("it should win if any three in a row vertically exist while other positions exist too", function() {
      board.setPosition(1, 1, player);
      board.setPosition(3, 1, player);
      board.setPosition(3, 2, player);
      board.setPosition(3, 3, player);
      expect(board.isWinner(player)).toBeTruthy();
    });

    it("should win if three in a row horizontally exist", function() {
      board.setPosition(1, 1, player);
      board.setPosition(2, 1, player);
      board.setPosition(3, 1, player);
      expect(board.isWinner(player)).toBeTruthy();
    });

    it("should win if any three in a row horizontally exist", function() {
      board.setPosition(1, 3, player);
      board.setPosition(2, 3, player);
      board.setPosition(3, 3, player);
      expect(board.isWinner(player)).toBeTruthy();
    });

    it("should win if any three in a row horizontally exist while other positions exist too", function() {
      board.setPosition(1, 1, player);
      board.setPosition(1, 3, player);
      board.setPosition(2, 3, player);
      board.setPosition(3, 3, player);
      expect(board.isWinner(player)).toBeTruthy();
    });

    it("should win if any three in a row diagonally left to right exist", function() {
      board.setPosition(1, 1, player);
      board.setPosition(2, 2, player);
      board.setPosition(3, 3, player);
      expect(board.isWinner(player)).toBeTruthy();
    });

    it("should win if any three in a row diagonally right to left exist", function() {
      board.setPosition(1, 3, player);
      board.setPosition(2, 2, player);
      board.setPosition(3, 1, player);
      expect(board.isWinner(player)).toBeTruthy();
    });

  });
});
