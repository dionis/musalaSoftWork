var validate = require('ip-validator');
module.exports = {


  friendlyName: 'Ipvalidator',


  description: '',


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

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs) {
    const ipToVerify = inputs.ipToVerify;
    var ipType = true;

    if (typeof(inputs.ipType) !== 'undefined')
         ipType = inputs.ipType;
        
    return  (ipType === true)?validate.ipv4(ipToVerify):validate.ipv6(ipToVerify); 

  }


};

