// IMPORT MODULES under test here:
import { countAsYes } from '../utils.js';
// import { example } from '../example.ts';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countAsYes('yup');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('time to test a function', (expect) => {
    const expected = false;
    const actual = countAsYes('nope');
    expect.equal(actual, expected);
});