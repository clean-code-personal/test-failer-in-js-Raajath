const{colorString}=require('./misaligned');

let colorArray=colorString.split('\n');
colorArray.pop();
// as it splits based on \n at last an extra element "" is created Hence removed


let colorMap=[];
colorArray.forEach((pair)=>{

    colorMap.push(pair.split('|'));
});



colorMapObject=[];
colorMap.forEach((pair)=>{
    
    tempObject= {
                number: parseInt(pair[0].trim().replace(/\s+/g,'')),
                majorColor:pair[1].trim().replace(/\s+/g, ' '),
                minorColor:pair[2].trim().replace(/\s+/g, ' ')
            } 
    colorMapObject.push(tempObject);        
});

module.exports={colorArray,colorMapObject};