#!/usr/bin/node

const firstArg = process.argv[2];

if (firstArg === undefined) {
    console.log('No arguments specified');
} else {
    console.log(firstArg);
}