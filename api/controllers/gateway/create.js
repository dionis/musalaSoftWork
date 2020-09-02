module.exports = {


  friendlyName: 'Create',


  description: 'Create gateway.',


  inputs: {

    gateway: {
      type: 'ref',
      example: '{}',
      description: 'The Gatway objet, without device relation',
      required: true
    }
   

  },


  exits: {

  },


  fn: async function (inputs) {
      var newGateway = inputs.gateway
    // All done. 

    if (typeof (newGateway) === 'undefined' || newGateway === null )
         return this.res.json({mssg:'ERROR', mssgtxt:'Not exist a new Gateway data'});
    else{

      var findGatewayList = await Gateway.find({gatewayName:newGateway.gatewayName})
      
      if (findGatewayList.length > 0){
        return this.res.json({mssg:'ERROR', mssgtxt:'Exist a Gateway with a same name'});
      }
      else {

        if ( typeof(newGateway.iPv4Address) === 'undefined' || await sails.helpers.ipvalidator.with({ 'ipToVerify': newGateway.iPv4Address, 'ipType':true}) === false){
        
          return this.res.json({mssg:'ERROR', mssgtxt:'The ip is wrong'});
        }
        else {
          await Gateway.create(newGateway)
          return this.res.json({mssg:'OK', mssgtxt: 'A Gateway with name ' + newGateway.gatewayName + ' was created'});
        }
      }
      
    }      

  }


};
