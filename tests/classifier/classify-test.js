var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var classify = require('./../../srv/classifier');
var fs = require("fs");

var images = require('./../samples/image');
var urls = require('./../samples/url');


describe('Classify', function() {
  it(' should return hipchat for sample', function(done) {
    fs.readFile("tests/samples/hipchat.sample", "utf8", function(err, data) {
      const hash = classify(data);

      expect(hash.type).to.equal("hipchat");
      expect(hash.text).to.equal("Hipchat Conversation");
      expect(hash.description).to.equal(data);
      expect(hash.domain).to.equal("");
      done();
    });
  });

  it(' should return url for sample', function(done) {
    urls.forEach(function(url) {
      const hash = classify(url.url);

      expect(hash.type).to.equal("url");
      expect(hash.text).to.equal(url.url);

      expect(hash.domain).to.equal(url.domain)
      // expect(hash.domain).to.equal(url);
    })
    done();
  });

  it(' should return image for sample', function(done) {
    images.forEach(function(url) {
      const hash = classify(url);
      
      expect(hash.type).to.equal("image");
      expect(hash.text).to.equal(url);

      expect(hash.domain).to.equal("www.worldcoal.org")
    })
    done();
  });

});
