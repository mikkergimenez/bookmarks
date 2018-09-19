var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var classify = require('./../../srv/classifier');
var fs = require("fs");

var images = require('./../samples/image');
var urls = require('./../samples/url');


describe('Classify', function() {
  it(' should return hipchat for sample', function(done) {
    resolve = require('path').resolve
    fs.readFile(resolve("test/samples/hipchat.sample"), "utf8", function(err, data) {
      if (err) {
        console.log(err);
        process.exit(1)
      }
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

  it('should return image for sample', function(done) {
    images.forEach(function(url) {
      const hash = classify(url);

      expect(hash.type).to.equal("image");
      expect(hash.text).to.equal(url);

      expect(hash.domain).to.equal("www.worldcoal.org")
    })
    done();
  });

  it('should return todo for sample', function(done) {
    var hash;
    hash = classify("TODO: make cookies");
    expect(hash.type).to.equal("todo");
    hash = classify("ToDo make cookies");
    expect(hash.type).to.equal("todo");
    hash = classify("Todo make cookies");
    expect(hash.type).to.equal("todo");
    done();
  })


  it('should return tags from a todo for sample', function(done) {
    var hash;
    hash = classify("TODO: make cookies")
    expect(hash.tags).to.eql([]);
    hash = classify("toDo make cookies")
    expect(hash.tags).to.eql([]);
    hash = classify("TODO dinner: make cookies")
    expect(hash.type).to.eql("todo");
    expect(hash.tags).to.eql(["dinner"]);
    hash = classify("toDo dinner: make cookies")
    expect(hash.type).to.eql("todo");
    expect(hash.tags).to.eql(["dinner"]);
    expect(hash.text).to.eql("make cookies")
    done();
  })


});
