import { validateUrl } from '../client/js/urlChecker' 

describe("validateUrl function exist", () => {
	test("it should be defined", () => {
		expect(validateUrl).toBeDefined();
})

test("it should be a function", () => {
		expect(typeof validateUrl).toBe("function");
}) 

test('It should check for correct url', () => {
	let right = "https://www.google.com/ips";
	let wrong = "google";
    const rightUrl = validateUrl(right);
    expect(rightUrl).toBe(true);
    const wrongUrl = validateUrl(wrong);   
    expect(wrongUrl).toBe(false);
    })
})

