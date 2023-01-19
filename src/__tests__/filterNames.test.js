const { filterNamesX } = require('../filterNames');
describe("app tests suites - filterNamesX", () => {
    test("should return empty list", () => {
        const result = filterNamesX([]);
        expect(result).toEqual([]);
    });
    test("should return list with all names that don't have X", () => {
        const result = filterNamesX(["bonjour", "yo", "bonosoir"]);
        expect(result).toEqual(["bonjour", "yo", "bonosoir"]);
    });
    test("should return list with all names that don't have X", () => {
        const result = filterNamesX(["bonjourX", "Xyo", "bonosoir"]);
        expect(result).toEqual(["bonosoir"]);
    });
});
