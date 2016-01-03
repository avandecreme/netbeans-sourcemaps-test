/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

FizzBuzz = {};
(function (FizzBuzz) {

    FizzBuzz.basicFizzBuzz = basicFizzBuzz;
    FizzBuzz.genericFizzBuzz = genericFizzBuzz;

    function basicFizzBuzz() {
        for (var i = 0; i <= 100; i++) {
            var multiple3 = i % 3 === 0;
            var multiple5 = i % 5 === 0;
            if (multiple3 && multiple5) {
                console.log('FizzBuzz');
            } else if (multiple3) {
                console.log('Fizz');
            } else if (multiple5) {
                console.log('Buzz');
            } else {
                console.log(i);
            }
        }
    }

    function genericFizzBuzz(firstDivisor, secondDivisor, max) {
        var result = new Array(max + 1);
        for (var i = 0; i <= max; i++) {
            var multipleFirst = i % firstDivisor === 0;
            var multipleSecond = i % secondDivisor === 0;
            if (multipleFirst && multipleSecond) {
                result[i] = 'FizzBuzz';
            } else if (multipleFirst) {
                result[i] = 'Fizz';
            } else if (multipleSecond) {
                result[i] = 'Buzz';
            } else {
                result[i] = i;
            }
        }
        return result;
    }

})(FizzBuzz);
