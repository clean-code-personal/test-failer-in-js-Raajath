function networkTransmitStubSucess(celcius) {
    console.log(`Temperature to transmit: ${celcius} celcius`);
  return 200;
}
function networkTransmitStubFailure(celcius){
    console.log(`Temperature to transmit: ${celcius} celcius`);
   return 500;

}

module.exports={networkTransmitStubFailure,networkTransmitStubSucess};
