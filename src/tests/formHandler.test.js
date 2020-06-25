import { handleSubmit, firstData } from '../client/js/formHandler'

describe("handleSubmit function exist", () => {
	test("it should be defined", () => {
		expect(handleSubmit).toBeDefined();
})
	test("it should be a function", () => {
		expect(typeof handleSubmit).toBe("function");
})
	test("it should be defined", () => {
		expect(firstData).toBeDefined();
})
	test("it should be an async function", () => {
		expect(typeof firstData).toBe("function");
})
})


