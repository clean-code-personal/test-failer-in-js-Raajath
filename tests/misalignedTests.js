const {expect} = require('chai');
const {colorArray,colorMapObject}=require('../misalignedStctures');

function testAlignment(colorArray){

colorArray.forEach((pair)=>{
expect(pair.charAt(3)).equals('|');  //check first |
expect(pair.charAt(12)).equals('|'); //check second |

});
}

 
function testEntry(colorMapObject){
   let previousRowNumber=-1; 

  colorMapObject.forEach((currentRow)=>{
    
    expect(colorArray.length).equals(25); //size
    expect(["White", "Red", "Black", "Yellow", "Violet"]).to.include(currentRow.majorColor);  //validity
    expect(["Blue", "Orange", "Green", "Brown", "Slate"]).to.include(currentRow.minorColor);
    expect(currentRow.number).to.be.within(1,25); // Range check
  
    //check uniqueness
    if(currentRow.number===previousRowNumber){
      expect(currentRow.number).equals(previousRowNumber+1);
     }
    previousRowNumber=currentRow.number;
    

});

}

testAlignment(colorArray);
testEntry(colorMapObject);



console.log('All is well (maybe!)');

