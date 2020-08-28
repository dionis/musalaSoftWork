module.exports = {


    friendlyName: 'Delete',
  
  
    description: 'Delete gateway.',
  
  
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
      
      var newGateway = inputs.gatewayname
    
      if ( typeof (newGateway) === 'undefined')
        return this.res.json({mssg:'ERROR', mssgtxt:'Not exist parameter gatewayName in Gateway object'});
       
      var result = await  Gateway.find({'gatewayName':newGateway})
      // All done.
      if (result.length > 0)
        return this.res.json({mssg:'OK', gateway: result[0]}); 
      else
        return this.res.json({mssg:'ERROR', mssgtxt:'Not exist Gateway'});
      
             
     
  
    }
  
  };
  
  