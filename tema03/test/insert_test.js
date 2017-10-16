"use strict";

let testing = require("../testing.js");
let assert = require("assert");


describe("Prueba de ordenación por inserción", () => {
    it("Ordenación de array ascendente", () => {
        let arr = [1, 2, 3, 4];
        testing.insertionSort(arr);
        assert.deepEqual(arr, [1, 2, 3, 4]);
    });

    it("Ordenación de array descendente", () => {
        let arr = [8, 4, 2];
        testing.insertionSort(arr);
        assert.deepEqual(arr, [2, 4, 8]);
    });
    
    it("Inserción en array desordenado", () => {
        let arr = [3, 2];
        testing.insert(1, arr);
        assert.deepEqual(arr, [2, 3]);
    });

});




