const {expect} = require('chai');
const {size}=require('../tshirts');

expect(size(37)).equals('S');
expect(size(40)).equals('M');
expect(size(43)).equals('L');
expect(size(38)).equals('S');
//expect(size(38)).equals('M');
console.log('All is well (maybe!)');