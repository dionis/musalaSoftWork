var supertest = require('supertest');
var assert = require('assert');

describe('GatewayController.count-all-gateway', function() {
  describe('#count-all-gateway', function() {
    it('Should redirect to /gateway/count-all-gateway', function (done) {
     //Request paramenters
      req = { 
        page:0,
        len:20       
      }
    
      supertest(sails.hooks.http.app)
      .get('/gateway/count-all-gateway')
      .query({ 
        page:0,
        len:20      
      })
      .expect(200, function (err, res) {                  
           if (err) return done(err);           
           assert.equal("OK",res.body.mssg) 
           assert.equal(true,res.body.gateways > 0 ) 
          done() 
       });
    });   

    it('Should redirect to /gateway/count-all-gateway with not page paramenter', function (done) {
      //Request paramenters
       req = {         
         len:20,
        
       }     
       supertest(sails.hooks.http.app)
       .get('/gateway/count-all-gateway')
       .query(req)
       .expect(400, function (err, res) {                    
           done() 
        });
     });

     it('Should redirect to /gateway/count-all-gateway with not len paramenter', function (done) {
      //Request paramenters
       req = { 
         page:0,        
         campaingid:234,
         initialDate:'2020-02-23 20:34',
         finalDate:'2020-03-10 06:34'
       }     
       supertest(sails.hooks.http.app)
       .get('/gateway/count-all-gateway')
       .query(req)
       .expect(400, function (err, res) {                    
           done() 
        });
     });   
     it('Should redirect to /gateway/count-all-gateway with not initialDate paramenter', function (done) {
      //Request paramenters
       req = { 
         page:0,        
         campaingid:234,
         finalDate:'2020-03-10 06:34'
       }     
       supertest(sails.hooks.http.app)
       .get('/gateway/count-all-gateway')
       .query(req)
       .expect(400, function (err, res) {                    
           done() 
        });
     });
  });
});