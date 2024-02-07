const {expect} = require('chai')
let colorMap=[];
function printColorMap() {
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            console.log(`${i * 5 + j} | ${majorColors[i]} | ${minorColors[j]}`);
            let currentObject={number:i*5+j,majorColor:majorColors[i],minorColor:minorColors[i]};
            colorMap.push(currentObject);
        }
    }
    return colorMap;
}

let result = printColorMap();
expect(result.length).equals(25);

result.forEach((obj)=>{
    expect(["White", "Red", "Black", "Yellow", "Violet"]).to.include(obj.majorColor);
    expect(["Blue", "Orange", "Green", "Brown", "Slate"]).to.include(obj.minorColor);
    expect(obj.number).to.be.within(1,25);

});

console.log('All is well (maybe!)');
