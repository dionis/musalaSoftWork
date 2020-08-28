var supertest = require('supertest');
var assert = require('assert');
var faker = require('faker');

describe('DeviceController.add-device', function() {
  describe('#', function() {
    it('Should redirect to /device/remove-device',  function (done) {

      Device.count({})
     .then(beforeTest=>{
        Gateway.find({}).populate('devices').then(
            gatewayList => {
                var gateway = null;
                while(true){
                   gateway = faker.random.arrayElement(gatewayList)
                   if (gateway.devices.length > 0 )
                     break;
                }
                const beforeTest = gateway.devices.length
                deviceToRemove = faker.random.arrayElement(gateway.devices)
                
                //Request paramenters
                 req = { 
                  devicename:  deviceToRemove.uid                  
                 }
               
                 supertest(sails.hooks.http.app)
                 .get('/device/remove-device')
                 .query(req)
                 .expect(200,  function (err, res) {                  
                      if (err) return done(err);           
                      assert.equal("OK",res.body.mssg) 
                      Gateway.find({'gatewayName':gateway.gatewayName}).populate('devices')
                      .then(gatewayList=>{
                        const afterTest = gatewayList[0].devices.length
                        assert.equal(true, beforeTest > afterTest ) 

                        ///Find device in device list
                       done() 
                      })
                      //.catch(error=> {throw Error(error)})                     
                  });
            })
       // .catch(error=>{throw Error(error)})
     })
     //.catch(error=>{throw Error(error)})
    
    });   

    // it('Should redirect to /device/remove-device with not device paramenter', function (done) {
    //   //Request paramenters
    //    req = {         
                 
    //    }     
    //    supertest(sails.hooks.http.app)
    //    .get('/device/remove-device')
    //    .query(req)
    //    .expect(400, function (err, res) {                    
    //        done() 
    //     });
    //  });

    //  it('Should redirect to /device/remove-device without a Gatewayname', async function (done) {
    //   //Request paramenters
    //   const beforeTest = await Devices.count({})
    //     var gatewayList = await Gateway.find({}).populate('devices')
    //     var gateway = null;
    //     while(true){
    //         gateway = faker.random.arrayElement(gatewayList)
    //         if (gateway.devices.length() > 0 )
    //         break;
    //     }
    //     beforeTest = gateway.devices.length()
    //     deviceToRemove = faker.random.arrayElement(gateway.devices)
        
    //     //Request paramenters
    //     req = { 
    //         devicename:  deviceToRemove.uid,        
    //     }
            
    //     supertest(sails.hooks.http.app)
    //     .get('/device/remove-device')
    //     .query(req)
    //     .expect(400, function (err, res) {                    
    //         done() 
    //     });
    //     });     
  });
});