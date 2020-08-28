module.exports = {


  friendlyName: 'Delete',


  description: 'Delete gateway.',


  inputs: {
    gateway:{
      type:'ref',
      description:"Data of delete gateway",
      example:{}
    },
  },


  exits: {

  },


  fn: async function (inputs) {
    
    var newGateway = inputs.gateway
   
    if ( typeof (newGateway.gatewayName) === 'undefined')
      return this.res.json({mssg:'ERROR', mssgtxt:'Not exist parameter gatewayName in Gateway object'});
     
    var result = await  Gateway.destroy({'id':newGateway.id})
    // All done.
    return this.res.json({mssg:'OK', mssgtxt: result});     
   

  }

};

