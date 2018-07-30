describe("Merge Sort", function() {
  let arrayForSorting = [];

  beforeAll(function() {
    for (let i = 0; i < 20; i++) {
      arrayForSorting.push(Math.random());
    }
    spyOn(window, "mergeSort").and.callThrough();
    mergeSort(arrayForSorting);
  });

  it("has a split function that splits an array", function() {
    expect(split([1, 2, 3, 4])).toEqual([[1, 2], [3, 4]]);
  });
  it("has merge function that merges two arrays", function() {
    expect(merge([[1, 2], [3, 4]])).toEqual([1, 2, 3, 4]);
  });
  it("can sort a random array", function() {
    expect(mergeSort(arrayForSorting)).toEqual(arrayForSorting.sort());
  });
  it(`calls itself recursively; this doesn't really 
      test for that but we're trying`, function() {
    expect(window.mergeSort.calls.count).toBeGreaterThan(
      arrayForSorting.length
    );
  });
});
