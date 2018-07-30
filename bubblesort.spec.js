describe("Bubble Sort", function() {
  let arrayForSorting = [];

  beforeAll(function() {
    for (let i = 0; i < 20; i++) {
      arrayForSorting.push(Math.random());
    }
  });

  it("handles an empty array", function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it("can sort a specific array", function() {
    expect(bubbleSort([4, 2, 3, 1])).toEqual([1, 2, 3, 4]);
  });

  it("can sort a random array", function() {
    expect(bubbleSort(arrayForSorting)).toEqual(arrayForSorting.sort());
  });

  afterAll(function() {
    arrayForSorting = [];
  });
});
