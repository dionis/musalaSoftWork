var faker = require('faker');

module.exports = {


  friendlyName: 'Seed gateway support',


  description: '',


  inputs: {

  },


  exits: {

    success: {
      description: 'All done.',
    },

  },

//   A few reminders:
//  (1)  To call this helper:

//           // With default usage:
//           await sails.helpers.seedGatwaySupport(…, …);

//           // With named parameters:
//           await sails.helpers.seedGatwaySupport.with({
//             someInput: …,
//             someOtherInput: …
//           });

  fn: async function (inputs, exits) {
    // TODO
   
    arrayStatus = ['online', 'offline']
   
    var gateWayArray = []

    var registerSize = 3;
    
    for ( var iValue = 1 ; iValue <  registerSize; iValue++) {

     gateWayArray.push({
        serial:faker.random.uuid(),
        gatewayName:faker.commerce.productName(),
        iPv4Address:faker.internet.ip(),      

      })
    }

    await Gateway.createEach(gateWayArray)
   
    allGateway = await Gateway.find({})
   
    registerSize = 20

    for ( var iValue = 1 ; iValue <  registerSize; iValue++) {

      gatewayObjet = faker.random.arrayElement(allGateway)

      let device = await Device.count({'gateway':gatewayObjet.id})
      if (device < 10) {
          newDevice = {
            uid:faker.random.uuid(),
            vendor: faker.company.companyName(),
            status:faker.random.arrayElement(arrayStatus),
            gateway : gatewayObjet.id
          }
          
          await Device.create(newDevice)
       }
    }

    return exits.success("OK");
  }


};

