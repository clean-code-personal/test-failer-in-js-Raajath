const {expect} = require('chai');

function getColorString() {
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
    let colorString = "";
    const maxLength = Math.max(...majorColors.map(color => color.length));
    
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            const index = i * minorColors.length + j + 1;
            const paddedIndex = String(index).padStart(2, ' ');
            const paddedMajor = majorColors[i].padEnd(maxLength, ' ');
            colorString += `${paddedIndex} | ${paddedMajor} | ${minorColors[j]}\n`;
        }
    }
    return colorString;
}


let colorString = getColorString();
console.log(colorString);


module.exports={colorString}
