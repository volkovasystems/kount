const assert = require( "assert" );
const kount = require( "./kount.js" );

assert.equal( kount( { "name": "simple" } ), 1, "should have value 1" );

assert.equal( kount( { } ), 0, "should have value 0" );

assert.equal( kount( ), 0, "should have value 0" );

console.log( "ok" );
