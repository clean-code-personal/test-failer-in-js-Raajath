const {expect} = require('chai');
const {colorArray,colorMapObject}=require('../misalignedStctures');


//check misalignment
let firstSeperator=colorArray[0].indexOf('|');
let secondSeperator=colorArray[0].lastIndexOf('|');
function testAlignment(colorArray){
colorArray.forEach((currentRow)=>{
expect(currentRow.charAt(firstSeperator)).equals('|');  
expect(currentRow.charAt(secondSeperator)).equals('|'); 
});
}

 
function testEntry(colorMapObject){
   let previousRowNumber=null; 

  colorMapObject.forEach((currentRow)=>{
    expect(colorArray.length).equals(25); //size check
    expect(["White", "Red", "Black", "Yellow", "Violet"]).to.include(currentRow.majorColor);  //validity
    expect(["Blue", "Orange", "Green", "Brown", "Slate"]).to.include(currentRow.minorColor);
    expect(currentRow.number).to.be.within(1,25); // Range check
  
    //check duplicate presence
    if(currentRow.number===previousRowNumber){
      expect(currentRow.number).equals(previousRowNumber+1);
     }
    previousRowNumber=currentRow.number;
    

});

}

testAlignment(colorArray);
testEntry(colorMapObject);



console.log('All is well (maybe!)');

