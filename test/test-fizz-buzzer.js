// Import chai, declare expect variable.
const expect=require('chai').expect;
// Import fizzBuzzer.
const fizzBuzzer=require('../fizzBuzzer');

// Unit tests for our `fizzBuzzer` function.
describe('fizzBuzzer',function(){

    // Test the normal case.
    it(`Should return 'fizz', 'buzz', 'fizz-buzz', or the argument number, based on the rules.`,function(){

        // Range of normal inputs, including
        // notable cases like negative answers.
        let normalCases=[
            {a: 0, expected: 'fizz-buzz'},
            {a: 3, expected: 'fizz'},
            {a: 6, expected: 'fizz'},
            {a: 5, expected: 'buzz'},
            {a: 10, expected: 'buzz'},
            {a: 15, expected: 'fizz-buzz'},
            {a: 30, expected: 'fizz-buzz'},
            {a: -3, expected: 'fizz'},
            {a: -6, expected: 'fizz'},
            {a: -5, expected: 'buzz'},
            {a: -10, expected: 'buzz'},
            {a: -15, expected: 'fizz-buzz'},
            {a: -30, expected: 'fizz-buzz'},
            {a: 1, expected: 1},
            {a: 7, expected: 7},
            {a: -1, expected: -1},
            {a: -7, expected: -7}
        ];
        // For each input (a), `fizzBuzzer` should
        // produce the expected value.
        normalCases.forEach(function(input){
            let answer=fizzBuzzer(input.a);
            expect(answer).to.equal(input.expected);
        });
    });

    it('Should raise an error if the argument is not a number.',function(){
        // Range of bad inputs where imput is not a number.
        let badInputs=[
            ['A'],
            ['3'],
            [false],
        ];

        // Prove that an error is raised for bad inputs.
        badInputs.forEach(function(input){
            expect(function(){
                fizzBuzzer(input[0]);
            }).to.throw(Error);
        });
    });
});