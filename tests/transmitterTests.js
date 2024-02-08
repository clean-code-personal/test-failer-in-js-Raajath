const {expect}=require('chai');

const {transmitInCelcius,transmissionFailureCount}=require('../transmitter');



transmitInCelcius(400.5);
transmitInCelcius(303.6);

transmitInCelcius(401.5);
transmitInCelcius(302.6);

transmitInCelcius(403.5);
transmitInCelcius(305.6);

// Stub of network transmission is in transmitter file where randomly 200 or 500 is called
expect(transmissionFailureCount).to.be.at.least(1);

console.log(`Transmission failed ${transmissionFailureCount} times.`);

console.log('All is well (maybe!)');