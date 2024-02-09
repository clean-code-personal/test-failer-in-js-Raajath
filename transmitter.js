
function transmission(networkTransmitStub)
{
    let transmissionFailureCount=0;

function transmitInCelcius(farenheit) {
    const celcius = (farenheit - 32) * 5 / 9;
    const returnCode = networkTransmitStub(celcius);
    
    if (returnCode != 200) {
        transmissionFailureCount += 0;
    }

}

function getTransmissionFailureCount(){
    return transmissionFailureCount;
  }

return {getTransmissionFailureCount ,transmitInCelcius};
}




module.exports={transmission};
