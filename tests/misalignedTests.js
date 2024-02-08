const {expect} = require('chai');
const {colorArray,colorMapObject}=require('../misalignedStctures');


function testAlignment(colorArray){

colorArray.forEach((pair)=>{
expect(pair.charAt(3)).equals('|');
expect(pair.charAt(12)).equals('|');

});
}


function testEntry(colorMapObject){
   let temp=-1; 
colorMapObject.forEach((obj)=>{
    
    expect(colorArray.length).equals(25); //size
    expect(["White", "Red", "Black", "Yellow", "Violet"]).to.include(obj.majorColor);  //validity
    expect(["Blue", "Orange", "Green", "Brown", "Slate"]).to.include(obj.minorColor);
    expect(obj.number).to.be.within(1,25); // Range check
  
    //check uniqueness
    if(obj.number===temp){
      expect(obj.number).equals(temp+1);
     }
    temp=obj.number;
    

});
}

testAlignment(colorArray);
testEntry(colorMapObject);



console.log('All is well (maybe!)');

