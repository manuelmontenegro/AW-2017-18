const bcrypt = require("bcrypt");

const saltRounds = 10;

bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash("hola", salt, (err, encrypted) => {
        console.log(`Tras encriptar "hola": ${encrypted}`);
    });
    bcrypt.hash("hola", salt, (err, encrypted) => {
        console.log(`Tras encriptar "hola": ${encrypted}`);
    });
    bcrypt.hash("adios", salt, (err, encrypted) => {
        console.log(`Tras encriptar "adios": ${encrypted}`);
    });
});