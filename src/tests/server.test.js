const urlAnalysis = require('../server/server.js' ); 

describe('Test, the function "urlAnalysis" should exist' , () => {
    test('It should return true', (done) => {
        expect(urlAnalysis).toBeDefined();
        done();
    });

    test('It should work', () => {
    	const urlAnalysis = async (res) => {
    		expect(typeof urlAnalysis).toBe("function")  			
    		expect(res.statusCode).toBe(200);
    		expect(res._isJSON()).toBeTruthy();
    		}
    	})       
    })
 
