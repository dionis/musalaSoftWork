var supertest = require('supertest');
var assert = require('assert');
var faker = require('faker');

describe('DeviceController.add-device', function() {
  describe('#', function() {
    it('Should redirect to /gateway/remove-gateway',  function (done) {
    
    Gateway.find({}).populate('devices').then(
      gatewayList =>{
        var ngateway = null;
        while(true){
           gateway = faker.random.arrayElement(gatewayList)
           if (gateway.devices.length > 0 )
             break;
        }
        beforeTest = gateway.devices.length
        deviceToRemove = faker.random.arrayElement(gateway.devices)
        //Request paramenters
        req = { 
          gateway:  gateway,
          gatewayname:gateway.gatewayName
        }
        
      
        supertest(sails.hooks.http.app)
        .get('/gateway/remove-gateway')
        .query(req)
        .expect(200, function (err, res) {                  
            if (err) return done(err); 
            console.log("==> " + res.body.mssgtxt)          
            assert.equal("OK",res.body.mssg) 
            Gateway.find({'gatewayName':gateway.gatewayName}).populate('devices').then(
              gatewayList =>{               
                assert.equal(true, gatewayList.length == 0 ) 
                done() 
              }
            ).catch(error=>{throw Error(error)})          
          });      
        }
      ).catch( error => {throw Error(error)})      
    });   

    // it('Should redirect to /gateway/remove-gateway with not device paramenter', function (done) {
    //   //Request paramenters
    //    req = {         
                 
    //    }     
    //    supertest(sails.hooks.http.app)
    //    .get('/gateway/remove-gateway')
    //    .query(req)
    //    .expect(400, function (err, res) {                    
    //        done() 
    //     });
    //  });

    //  it('Should redirect to /gateway/remove-gateway without a Gatewayname', async function (done) {
    //   //Request paramenters
    //   const beforeTest = await Devices.count({})
    //     const gatewayList = await Gateway.find({}).populate('devices')
    //     const gateway = null;
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
    //     .get('/gateway/remove-gateway')
    //     .query(req)
    //     .expect(400, function (err, res) {                    
    //         done() 
    //     });
    //     });     
  });
});