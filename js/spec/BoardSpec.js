describe("Board", function() {
  var board;

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

  describe("win condition", function() {
    
  });
});
