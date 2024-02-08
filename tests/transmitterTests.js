const {expect}=require('chai');

const {transmissionFailureCount}=require('../transmitter');



// Stub of network transmission is in transmitter file where randomly 200 or 500 is called
expect(transmissionFailureCount).to.be.at.least(1);

console.log(`Transmission failed ${transmissionFailureCount} times.`);

console.log('All is well (maybe!)');