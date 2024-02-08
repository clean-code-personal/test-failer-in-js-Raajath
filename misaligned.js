
function getColorMap() {
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
    let colorMap=[];
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            //console.log(`${i * 5 + j} | ${majorColors[i]} | ${minorColors[j]}`);
            let currentObject={number:i*5+j,majorColor:majorColors[i],minorColor:minorColors[i]};
            colorMap.push(currentObject);
        }
    }
    return colorMap;
}

let colorMap = getColorMap();
function printColorMap(){
    colorMap.forEach((obj)=>{
         console.log(`${obj.number} | ${obj.majorColor} | ${obj.minorColor}`)
    }); 
}
printColorMap();


module.exports={colorMap}
