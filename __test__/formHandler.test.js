import { handleSubmit } from "../src/client/js/formHandler"
import { polarity } from "../src/client/js/formHandler"
describe("Testing the submit functionality", () => {
    test("Testing the handleSubmit() function", () => {
           expect(handleSubmit).toBeDefined();
    })
    test("Testing the polarity() function", () => {
        expect(polarity).toBeDefined();
 })
});