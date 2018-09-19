const { URL } = require('url');

function isHipchat(string) {
  return /^\[[1-9][0-9]{0,1}\:[0-5][0-9]\ [AP]M\]/.test(string);
}

function isTodo(string) {
  return (/^todo/i).test(string);
}

function isURL(string) {
  return /^(http|https|ftp):\/\//.test(string);
}

function isImage(string) {
  return (isURL(string)) && /(gif|jpg|jpeg|svg|png)$/.test(string);
}

function getDomain(string) {
  const myURL = new URL(string);
  return myURL.hostname;
}

const classify = function(text) {
  var description = text;
  var domain      = ""
  var tags        = [];
  var title       = text;
  var type        = "text"
  if (isTodo(text)) {
    type = "todo"
    pt = text.match(/todo ([A-Za-z0-9]+):\s*(.*)/i);
    if (pt) {
      tags = [pt[1]]
      title = pt[2]
      description = pt[2]
    }
  } else if (isHipchat(text)) {
    type  = "hipchat"
    title = "Hipchat Conversation"
  } else if (isImage(text)) {
    type    = "image";
    domain  = getDomain(text);
  } else if (isURL(text)) {
    type    = "url";
    domain  = getDomain(text);
  }

  var retval = {
    archived: false,
    text: title,
    tags: tags,
    type: type,
    description: description,
    domain: domain,
  }

  console.log("Classified node as: ")
  console.log(retval);

  return retval;
}
module.exports = classify

// function getTitle(string, callback) {
//   var _this = this;
//   if (string.startsWith("http://") || string.startsWith("https://")) {
//     console.log("Getting Title for " + string)
//     axios.get(`https://api.urlmeta.org/?url=${string}`)
//     .then(function (response) {
//       _this.setState({
//         title: response.data.meta.title,
//         image: response.data.meta.image,
//         description: response.data.meta.description
//       })
//       callback();
//     })
//     .catch(function (error) {
//       callback("");
//     });
//   } else {
//     console.log("Ignoring...");
//     callback("");
//   }
// }
