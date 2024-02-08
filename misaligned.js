const {expect} = require('chai');
function getColorString() {
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
    let colorString="";
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            
            colorString+=`${i * 5 + j} | ${majorColors[i]} | ${minorColors[j]} \n`;
        }
    }
    return colorString;
}

let colorString = getColorString();

console.log(colorString);




module.exports={colorString}
