const {expect}=require('chai');
const {networkTransmitStubFailure,networkTransmitStubSucess}=require('./stub');
const {transmission}=require('../transmitter');

//successful Transmission
let testTransmissionSucess=transmission(networkTransmitStubSucess); 
testTransmissionSucess.transmitInCelcius(300);
testTransmissionSucess.transmitInCelcius(200);
expect(testTransmissionSucess.getTransmissionFailureCount()).equals(0);
console.log(`Transmission failed ${testTransmissionSucess.getTransmissionFailureCount()} times.`);


//Failure in Transmission
let testTransmissionFailure=transmission(networkTransmitStubFailure);
testTransmissionFailure.transmitInCelcius(250);
testTransmissionFailure.transmitInCelcius(350);
expect(testTransmissionFailure.getTransmissionFailureCount()).equals(2);
console.log(`Transmission failed ${testTransmissionFailure.getTransmissionFailureCount()} times.`);



console.log('All is well (maybe!)');

