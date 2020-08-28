// var supertest = require('supertest');
var assert = require('assert');
var faker = require('faker');
var supertest = require('supertest');


describe('GatewayController.find-gateway', function() {
    describe('#find-gateway', function() {
      it('Should redirect to /gateway/find-all-gateway',  function (done) {
       //Request paramenters
       Gateway.find({}).then(gatewayList=>{                      
                  
            supertest(sails.hooks.http.app)
            .get('/gateway/find-all-gateway')
            .expect(200, function (err, res) {                  
                if (err) return done(err);  
                        
                assert.equal("OK",res.body.mssg) 
                var listResultGateway = res.body.result
                assert.equal(gatewayList.length,listResultGateway.length ) 
                listResultGateway.forEach(element => {
                    assert.equal(true,element.devices.length >= 0 )
                });
                done() 
            });
       } ).catch(error=>{
           throw Error(error);
       })       
      });   
  
      it('Should redirect to /gateway/find-all-gateway with not gatewayName', function (done) {
        //Request paramenters
         req = {         
                    
         }     
         supertest(sails.hooks.http.app)
         .get('/gateway/find-all-gateway')
         .query(req)
         .expect(200, function (err, res) {                    
             done() 
          });
       });
             
    });
  });