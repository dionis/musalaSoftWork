module.exports = {

    friendlyName: 'Showall',
  
  
    description: 'Showall gateway: The service must also offer an operation \
   for displaying information about all stored gateways (and their devices) ',

  
  
    inputs: {
        gatewayname:{
        type:'string',
        description:"Data of delete gateway",
        example:"Intelligent Steel Shoes"
      },
    },
  
  
    exits: {
  
    },
  
  
    fn: async function (inputs) {
      
      var nresult = await  Gateway.find({}).populate('devices')
      // All done.
      if (nresult.length > 0)
        return this.res.json({mssg:'OK', result: nresult}); 
      else
        return this.res.json({mssg:'ERROR', mssgtxt:'Not exist Gateways'});
    }
}