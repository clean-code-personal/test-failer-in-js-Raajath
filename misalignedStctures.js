const{colorString}=require('./misaligned');

let colorArray=colorString.split('\n');
colorArray.pop();

const colorMapObject = colorArray.map(currentRow => {
    const [numberString, majorColor, minorColor] = currentRow.split('|').map(currentString => 
        {
           return currentString.trim(); //Trim extra space
        });

    return {
        number: parseInt(numberString),
        majorColor,
        minorColor
    };
});


module.exports={colorArray,colorMapObject};