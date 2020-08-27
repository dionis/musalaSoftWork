module.exports = {


  friendlyName: 'Count all gateway',


  description: '',


  inputs: {
    page:{
      type:'number',
      description:"Page number for pagination effect",
      example:45
    },
    len:{
      type:'number',
      description:"Number of citizen for each page",
      example:20

    }
  },


  exits: {

  },


  fn: async function (inputs) {

     allReviews = await Gateway.count({})
    //await this.res.json({reviews:allReviews})
     return this.res.json({mssg:'OK', gateways:allReviews});
    //return exits.success({result: "!!!Sucessful"});

  }


};
