/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Fibonnacci = {};
(function(Fibonnacci) {

    Fibonnacci.recursiveFibo = recursiveFibo;
    Fibonnacci.sequentialFibo = sequentialFibo;

    function recursiveFibo(n) {
        if (n === 0) {
            return 0;
        }
        if (n === 1) {
            return 1;
        }
        return recursiveFibo(n - 2) + recursiveFibo(n - 1);
    }

    function sequentialFibo(n) {
        if (n === 0) {
            return 0;
        }
        if (n === 1) {
            return 1;
        }
        var fibo = 1;
        var prevFibo = 0;
        for (var i = 2; i <= n; i++) {
            var backup = fibo;
            fibo = fibo + prevFibo;
            prevFibo = backup;
        }
        return fibo;
    }

})(Fibonnacci);
