var supertest = require('supertest');
var assert = require('assert');
var faker = require('faker');

describe('GatewayController.ipvalidator', function() {
  describe('#', function() {
    it('Validate ip with /gateway/ipvalidator ipv4',  function (done) {
               var gateway = null;
              // var ipv4 = "212.212.100.110"
               //var ipv6 = "0000:0000:0000:0000:0000:0000:0000:0001"
               var nipToVerify = "212.212.100.110";
               var nipType = true;
                //Request paramenters
                 req = { 
                  ipToVerify: nipToVerify ,
                  ipType: nipType              
                 }
               
                 supertest(sails.hooks.http.app)
                 .get('/gateway/ipvalidator')
                 .query(req)
                 .expect(200,  function (err, res) {                  
                      if (err) return done(err);           
                      assert.equal("OK",res.body.mssg) 
                      assert.equal(true,res.body.result)
                      done()                                             
                  })   
    });   
    it('Validate ip with /gateway/ipvalidator ipv6',  function (done) {
      var gateway = null;
     // var ipv4 = "212.212.100.110"
      //var ipv6 = "0000:0000:0000:0000:0000:0000:0000:0001"
      var nipToVerify = "0000:0000:0000:0000:0000:0000:0000:0001";
      var nipType = false;
       //Request paramenters
        req = { 
         ipToVerify: nipToVerify ,
         ipType: nipType              
        }
      
        supertest(sails.hooks.http.app)
        .get('/gateway/ipvalidator')
        .query(req)
        .expect(200,  function (err, res) {                  
             if (err) return done(err);           
             assert.equal("OK",res.body.mssg) 
             assert.equal(true,res.body.result)
             done()                                             
         })   
    }); 
    it('Validate ip with false /gateway/ipvalidator ipv4',  function (done) {
      var gateway = null;
     // var ipv4 = "212.212.100.110"
      //var ipv6 = "0000:0000:0000:0000:0000:0000:0000:0001"
      var nipToVerify = "212.212.100.110";
      var nipType = false;
       //Request paramenters
        req = { 
         ipToVerify: nipToVerify ,
         ipType: nipType              
        }
      
        supertest(sails.hooks.http.app)
        .get('/gateway/ipvalidator')
        .query(req)
        .expect(200,  function (err, res) {                  
             if (err) return done(err);           
             assert.equal("OK",res.body.mssg) 
             assert.equal(false,res.body.result)
             done()                                             
         })   
    }); 
    it('Validate ip with false /gateway/ipvalidator ipv6',  function (done) {
      var gateway = null;
     // var ipv4 = "212.212.100.110"
      //var ipv6 = "0000:0000:0000:0000:0000:0000:0000:0001"
      var nipToVerify = "0000:0000:0000:0000:0000:0000:0000:0001";
      var nipType = true;
       //Request paramenters
        req = { 
         ipToVerify: nipToVerify ,
         ipType: nipType              
        }
      
        supertest(sails.hooks.http.app)
        .get('/gateway/ipvalidator')
        .query(req)
        .expect(200,  function (err, res) {                  
             if (err) return done(err);           
             assert.equal("OK",res.body.mssg) 
             assert.equal(false,res.body.result)
             done()                                             
         })   
    }); 
  });
});