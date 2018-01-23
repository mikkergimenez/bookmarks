module.exports = [
  {
    url: "http://foo.com/blah_blah",
    domain: "foo.com"
  },
  {
    url: "http://foo.com/blah_blah/",
    domain: "foo.com"
  },
  {
    url: "http://foo.com/blah_blah_(wikipedia)",
    domain: "foo.com"
  },
  {
    url: "http://foo.com/blah_blah_(wikipedia)_(again)",
    domain: "foo.com"
  },
  {
    url: "http://www.example.com/wpstyle/?p=364",
    domain: "www.example.com"
  },
  {
    url: "https://www.example.com/foo/?bar=baz&inga=42&quux",
    domain: "www.example.com",
  },
  {
    url: "http://✪df.ws/123",
    domain: "xn--df-oiy.ws"
  },
  {
    url: "http://userid:password@example.com:8080",
    domain: "example.com"
  },
  {
    url: "http://userid:password@example.com:8080/",
    domain: "example.com"
  },
  {
    url: "http://userid@example.com",
    domain: "example.com"
  },
  {
    url: "http://userid@example.com/",
    domain: "example.com"
  },
  {
    url: "http://userid@example.com:8080",
    domain: "example.com"
  },
  {
    url: "http://userid@example.com:8080/",
    domain: "example.com"
  },
  {
    url: "http://userid:password@example.com",
    domain: "example.com"
  },
  {
    url: "http://userid:password@example.com/",
    domain: "example.com"
  },
  {
    url: "http://142.42.1.1/",
    domain: "142.42.1.1"
  },
  {
    url: "http://142.42.1.1:8080/",
    domain: "142.42.1.1"
  },
  {
    url: "http://➡.ws/䨹",
    domain: "xn--hgi.ws"
  },
  {
    url: "http://⌘.ws",
    domain: "xn--bih.ws"
  },
  {
    url: "http://⌘.ws/",
    domain: "xn--bih.ws"
  },
  {
    url: "http://foo.com/blah_(wikipedia)#cite-1",
    domain: "foo.com"
  },
  {
    url: "http://foo.com/blah_(wikipedia)_blah#cite-1",
    domain: "foo.com"
  },
  {
    url: "http://foo.com/unicode_(✪)_in_parens",
    domain: "foo.com"
  },
  {
    url: "http://foo.com/(something)?after=parens",
    domain: "foo.com"
  },
  {
    url: "http://☺.damowmow.com/",
    domain: "xn--74h.damowmow.com"
  },
  {
    url: "http://code.google.com/events/#&product=browser",
    domain: "code.google.com"
  },
  {
    url: "http://j.mp",
    domain: "j.mp"
  },
  {
    url: "ftp://foo.bar/baz",
    domain: "foo.bar"
  },
  {
    url: "http://foo.bar/?q=Test%20URL-encoded%20stuff",
    domain: "foo.bar"
  },
  {
    url: "http://مثال.إختبار",
    domain: "xn--mgbh0fb.xn--kgbechtv"
  },
  {
    url: "http://例子.测试",
    domain: "xn--fsqu00a.xn--0zwm56d"
  },
  {
    url: "http://उदाहरण.परीक्षा",
    domain: "xn--p1b6ci4b4b3a.xn--11b5bs3a9aj6g"
  },
  {
    url: "http://-.~_!$&'()*+,;=:%40:80%2f::::::@example.com",
    domain: "example.com"
  },
  {
    url: "http://1337.net",
    domain: "1337.net"
  },
  {
    url: "http://a.b-c.de",
    domain: "a.b-c.de"
  },
  {
    url: "http://223.255.255.254",
    domain: "223.255.255.254"
  }]
