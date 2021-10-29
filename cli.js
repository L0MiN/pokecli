#!/usr/bin/env node
'use strict';
const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();

const cli = meow(`
	Usage
	  $ pokecli <pokemon>

	Examples
        $ pokecli eevee
        $ pokecli pikachu
        $ pokecli zacian
`);

const input = cli.input;

if (input.length = 1) {

    P.getPokemonByName(input[0])
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log('Unknown Pokemon: ', error);
    }
    );
} else {
	console.log(cli.help);
}
