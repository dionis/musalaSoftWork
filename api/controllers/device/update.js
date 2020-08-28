module.exports = {


    friendlyName: 'Delete',
  
  
    description: 'Delete device.',
  
  
    inputs: {
      device:{
        type:'ref',
        description:"Data of new device",
        example:{}
      },
    },
  
  
    exits: {
  
    },
  
  
    fn: async function (inputs) {
      
      var newDevice = input.device.uid
     
      if ( typeof (newDevice.id) === 'undefined')
        return this.res.json({mssg:'ERROR', mssgtxt:'Not exist parameter id in Device object'});
       
      var result = await  Device.update({'uid':newDevice.uid}).set(newDevice).fetch();
      // All done.
      return this.res.json({mssg:'OK', mssgtxt: result});     
     
  
    }
  
  };
  