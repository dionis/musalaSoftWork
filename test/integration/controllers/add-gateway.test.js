var supertest = require('supertest');
var assert = require('assert');
var faker = require('faker');

describe('GatewayController.add-gateway', function() {
  describe('#count-all-gateway', function() {
    it('Should redirect to /gateway/add-gateway',  function (done) {
     Gateway.count({}).then(
         beforeTest => {
            newGateway= {
               serial:faker.random.uuid(),
               gatewayName:faker.commerce.productName(),
               iPv4Address:faker.internet.ip()
            }
            //Request paramenters
            req = { 
               gateway:  newGateway     
            }
         
            supertest(sails.hooks.http.app)
            .get('/gateway/add-gateway')
            .query(req)
            .expect(200,  function (err, res) {                  
                  if (err) return done(err);           
                  assert.equal("OK",res.body.mssg) 
      
                  Gateway.count({}).then(afterTest=>{
                  assert.equal(true, beforeTest < afterTest ) 
                     done() 
                  }).catch(error=>{
                     throw Error(error)
                  }) 
            });
         }
      ).catch(error =>{
         throw Error(error)
      })
     
    });   

    it('Should redirect to /gateway/add-gateway with not gateway paramenter', function (done) {
      //Request paramenters
       req = {         
                 
       }     
       supertest(sails.hooks.http.app)
       .get('/gateway/add-gateway')
       .query(req)
       .expect(400, function (err, res) {                    
           done() 
        });
     });

     it('Should redirect to /gateway/add-gateway with Gateway without data', function (done) {
      //Request paramenters
       req = { 
        gateway:{}
       }     
       supertest(sails.hooks.http.app)
       .get('/gateway/add-gateway')
       .query(req)
       .expect(400, function (err, res) {                    
           done() 
        });
     });     
  });
});