/**
 * Gateway.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    serial: {
      type: 'string',
      required: true,
      description: 'A unique serial number (string)',
      unique: true,
      example: 'uMMS892200ssmbncn'
    },
  
    gatewayName: {
      type: 'string',
      required: true,
      description: 'Human-readable name (string)',
      maxLength: 120,
      example: 'Gatway-123'
    },

    iPv4Address: {
      type: 'string',
      required: true,
      description: 'Human-readable name (string)',
      maxLength: 20,
      example: 'Gatway-123',
      isIP: true
    },
    

    
    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
   // Add a reference to Devices
   devices: {
    collection: 'device',
    via: 'gateway'
  }
  },

};

