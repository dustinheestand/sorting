describe("Bubble Sort", function() {
  let arrayForSorting = [];
  let maxSwaps;

  beforeAll(function() {
    for (let i = 0; i < 20; i++) {
      arrayForSorting.push(Math.random());
    }
    spyOn(window, "swap").and.callThrough();
    spyOn(window, "compare").and.callThrough();
    bubbleSort(arrayForSorting);
    maxSwaps = Math.pow(arrayForSorting.length, 2);
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

  it("is at least quadratic", function() {
    console.log(window.compare.calls.count());
    expect(window.compare).toHaveBeenCalled();
    expect(window.compare.calls.count()).toBeLessThan(maxSwaps);
    expect(window.swap).toHaveBeenCalled();
    expect(window.swap.calls.count()).toBeLessThan(maxSwaps);
  });

  afterAll(function() {
    arrayForSorting = [];
  });
});
