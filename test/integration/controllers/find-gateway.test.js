var supertest = require('supertest');
var assert = require('assert');
var faker = require('faker');

describe('GatewayController.find-gateway', function() {
    describe('#find-gateway', function() {
      it('Should redirect to /gateway/find-gateway',  function (done) {
       //Request paramenters
       Gateway.find({}).then(gatewayList=>{
            var gateway = gatewayList[0]
            
            req = { 
                gatewayname:gateway.gatewayName            
            }
        
            supertest(sails.hooks.http.app)
            .get('/gateway/find-gateway')
            .query( { 
                gatewayname:gateway.gatewayName            
            })
            .expect(200, function (err, res) {                  
                if (err) return done(err);  
                        
                assert.equal("OK",res.body.mssg) 
                assert.equal(gateway.gatewayName,res.body.gateway.gatewayName ) 
                done() 
            });
       } ).catch(error=>{
           throw Error(error);
       })       
      });   
  
      it('Should redirect to /gateway/find-gateway with not gatewayName', function (done) {
        //Request paramenters
         req = {         
                    
         }     
         supertest(sails.hooks.http.app)
         .get('/gateway/find-gateway')
         .query(req)
         .expect(400, function (err, res) {                    
             done() 
          });
       });
  
       it('Should redirect to /gateway/find-gateway with gatewayName than not exist', function (done) {
        //Request paramenters
        req = { 
            gatewayname:"____"
         
       }

        ERROR_MESSAGE  = "Not exist Gateway"
      
        supertest(sails.hooks.http.app)
        .get('/gateway/find-gateway')
        .query(req)
        .expect(200, function (err, res) {                  
             if (err) return done(err);           
             assert.equal("ERROR",res.body.mssg) 
             assert.equal(ERROR_MESSAGE,res.body.mssgtxt ) 
            done() 
         });
       });         
    });
  });