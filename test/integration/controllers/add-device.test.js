var supertest = require('supertest');
var assert = require('assert');
var faker = require('faker');

describe('DeviceController.add-device', function() {
  describe('#', function() {
    it('Should redirect to /device/add-device', function (done) {

        Device.count({}).then(
            beforeTest =>{         
                Gateway.find({}).populate('devices').then(gatewayList=>{
                var gateway = null;
                while(true){
                    gateway = faker.random.arrayElement(gatewayList)
                    if (gateway.devices.length < 10 )
                      break;
                 }
               
                  newDevice = {
                    uid:faker.random.uuid(),
                    vendor: faker.company.companyName(),
                    status:faker.random.arrayElement(arrayStatus),
                    gateway : gatewayObjet.id
                  }
                 
                 //Request paramenters
                  req = { 
                    device:  newDevice,
                    gatewayname:gateway.gatewayName
                  }
                
                  //.put('/api/v1.0/tasks/5')
                  //.send({title:'Code Refactor API',user:'ivanleoncz'})
                  
                  
                  // .get('/device/add-device')
                  // .query( { 
                  //   device:  newDevice,
                  //   gatewayname:gateway.gatewayName
                  // })


                  supertest(sails.hooks.http.app)
                  .put('/device/add-device')
                  .send( { 
                    device:  newDevice,
                    gatewayname:gateway.gatewayName
                  })
                  .expect(200, function (err, res) {                  
                       if (err) return done(err);           
                       assert.equal("OK",res.body.mssg) 
                       Device.count({}).then(
                        afterTest =>{
                            assert.equal(true, beforeTest < afterTest ) 
                            done()                     }
                        ).catch(error=>{throw Error(error)})                  
                   });
            })
            .catch(error=>{ throw Error(error)})
        })
        .catch(error=>{ throw Error(error)})       
    });
  
      

    it('Should redirect to /device/add-device with not device paramenter', function (done) {
      //Request paramenters
       req = {         
                 
       }     
       supertest(sails.hooks.http.app)
       .put('/device/add-device')
       .send(req)
       .expect(400, function (err, res) {                    
           done() 
        });
     });

     it('Should redirect to /device/add-device with a Gateway winth 10 devices', function (done) {
      //Request paramenters
       Device.count({}).then(
            beforeTest =>{         
                Gateway.find({}).populate('devices').then(gatewayList=>{
                var gateway = null;
                while(true){
                    gateway = faker.random.arrayElement(gatewayList)
                    if (gateway.devices.length == 10 )
                      break;
                 }
               
                  newDevice = {
                    uid:faker.random.uuid(),
                    vendor: faker.company.companyName(),
                    status:faker.random.arrayElement(arrayStatus),
                    gateway : gatewayObjet.id
                  }
                 
                 //Request paramenters
                  req = { 
                    device:  newDevice,
                    gatewayname:gateway.gatewayName
                  }
                  ERROR_MESSAGE = gateway.gatewayName + " has enough devices."

                  supertest(sails.hooks.http.app)
                  .put('/device/add-device')
                  .send(req)
                  .expect(200, function (err, res) {                  
                       if (err) return done(err);           
                       assert.equal("ERROR",res.body.mssg)  
                       Device.count({}).then(
                        afterTest =>{
                            assert.equal(true, beforeTest ==  afterTest ) 
                            assert.equal(ERROR_MESSAGE, res.body.mssgtxt )
                            done()                     
                        }).catch(error=>{throw Error(error)})                  
                   });
            })
            .catch(error=>{ throw Error(error)})
        }).catch(error=>{ throw Error(error)})
            
     });     
    })
});