module.exports = {


  friendlyName: 'Delete',


  description: 'Delete device.',


  inputs: {
    devicename:{
      type:'string',
      description:"Data of new device",
      example:"a uid number"
    },
  },


  exits: {

  },


  fn: async function (inputs) {
    
    var newDevice = inputs.devicename
    var listDevices = await Device.find({'uid':newDevice})

    if (listDevices.length == 0)
       return this.res.json({mssg:'ERROR', mssgtxt:'Not exist Device with uid ' + newDevice});
    
    if ( typeof (newDevice) === 'undefined')
      return this.res.json({mssg:'ERROR', mssgtxt:'Not exist parameter id in Device object'});
     
    var result = await  Device.destroy({'uid':newDevice}).fetch();
    // All done.
    return this.res.json({mssg:'OK', mssgtxt: result});     
   

  }

};
