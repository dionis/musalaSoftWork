module.exports = {


  friendlyName: 'Ipvalidator',


  description: 'Ipvalidator gateway.',


  inputs: {

    ipToVerify:{
      type:'string',
      description:"Ip to verify inner services",
      example:"212.212.100.110"
    },

    ipType:{
      type:'boolean',
      description:"Identifier if ipv4 or ipv6",
      example:true
    },

  },


  exits: {

  },


  fn: async function (inputs) {

    const ipToVerify = inputs.ipToVerify;
    var ipType = true;

    if (typeof(inputs.ipType) !== 'undefined')
         ipType = inputs.ipType;
        
    var validation = await sails.helpers.ipvalidator.with({ 'ipToVerify': ipToVerify, 'ipType':ipType})

    return this.res.json({mssg:'OK', result:validation}); 

  }


};
