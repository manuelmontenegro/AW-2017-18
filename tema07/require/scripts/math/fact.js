"use strict"

define([], () => {
    function fact(n) {
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result = result * i;
        }
        return result;
    }

    return fact;
});
