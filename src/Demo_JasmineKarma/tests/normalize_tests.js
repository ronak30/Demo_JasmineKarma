describe("normalizeData", function () {
    it("accepts golden path data", function () {
        var json = '{"Name": "Ronak", "PersonalIdentifier": 2111858}';
        var norm = normalizeData(json);
        expect(norm.name).toEqual("Ronak");
        expect(norm.id).toEqual(2111858);
    });
});
