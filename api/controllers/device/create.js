module.exports = {


  friendlyName: 'Create',


  description: 'Create device.',


  inputs: {
    device:{
      type:'ref',
      description:"Data of new device",
      example:{}
    },

    gatewayname:{
      type:'string',
      description:"Name of Gateway",
      example:"Database name"

    }

  },


  exits: {

  },


  fn: async function (inputs) {
    var MAX_BOUND = 10; //Number max of device for each Gateway
    var newDevice = inputs.device
    var gateWayName = inputs.gatewayname
   
    var gatewayList = await  Gateway.find({'gatewayName':gateWayName}).populate('devices')
    // All done.

    if (gatewayList.length == 0 ){
      return this.res.json({mssg:'ERROR', mssgtxt:'Not exist a Gateway with name: '+ gateWayName});
     }
    else {
       var aGateway = gatewayList[0];  
       if (aGateway.devices.length >= MAX_BOUND) {
        return this.res.json({mssg:'ERROR', mssgtxt: gateWayName + ' has enough devices.'});
        }
       else {
        newDevice.gateway = aGateway.id;
        await Device.create(newDevice);
        return this.res.json({mssg:'OK', mssgtxt: 'A Device with name ' + newDevice.uid + ' was created'});
     
       }
       
    }
    

  }


};
