module.exports = {


  friendlyName: 'Showall',


  description: 'Showall device.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    var nresult = await  Device.find({}).populate('gateway')
    // All done.
    if (nresult.length > 0)
      return this.res.json({mssg:'OK', result: nresult}); 
    else
      return this.res.json({mssg:'ERROR', mssgtxt:'Not exist Devices'});

  }


};
