const {expect} = require('chai');
const {colorMap}=require('../misaligned');

expect(colorMap.length).equals(25);

colorMap.forEach((obj)=>{
    expect(["White", "Red", "Black", "Yellow", "Violet"]).to.include(obj.majorColor);  
    expect(["Blue", "Orange", "Green", "Brown", "Slate"]).to.include(obj.minorColor);
    expect(obj.number).to.be.within(1,25); // Range check

});

console.log('All is well (maybe!)');

