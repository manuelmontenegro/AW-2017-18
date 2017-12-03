"use strict"

define([], () => {

    let PHI = (1 + Math.sqrt(5)) / 2;

    function fibMasEficiente(n) {
        let p1 = Math.pow(PHI, n);
        let p2 = Math.pow(1 - PHI, n);
        return Math.round((p1 - p2) / Math.sqrt(5));
    }

    function fib(n) {
        console.assert(typeof(n) === "number",
            `fib: ${n} is not a number`);
        return fibMasEficiente(n);
    }

    return fib;
    
});
