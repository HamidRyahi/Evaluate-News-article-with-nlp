import { validateUrl } from "../src/client/js/urlChecker"
describe("Testing the submit functionality", () => {
    test("Testing the validateUrl() function", () => {
           expect(validateUrl).toBeDefined();
    })
    test('Returns true if the url is valid', () => {
        expect(validateUrl('https://www.wikipedia.com/')).toBe(true);
    })

    test('Returns false if the url is not valid', () => {
        expect(validateUrl('test')).toBe(false);
    })

});
