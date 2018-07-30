describe("Merge Sort", function() {
    it("has a split function that splits an array", function(){
        expect(split([1,2,3,4])).toEqual([[1,2],[3,4]])
    })
    it("has merge function that merges two arrays", function(){
        expect(merge([[1,2], [3,4]])).toEqual([[1,2,3,4]]);
    })
})