import React, { Component } from 'react';

var css = require('./index.styl');

function extractHostname(url) {
    var hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf("://") > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }

    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];

    if (hostname == "localhost") {
      return hostname;
    }

    if (hostname.includes(" ")) {
      return "";
    }

    if (hostname.includes(".")) {
      return hostname;
    }

    return "";
}

function ArrNoDupe(a) {
    var temp = {};
    for (var i = 0; i < a.length; i++)
        temp[a[i]] = true;
    var r = [];
    for (var k in temp)
        r.push(k);
    return r;
}

export default class DomainList extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.things = props.things;

    this.state = {
      domains: []
    };
  }

  render() {
    var _this = this;

    let domainList = this.state.domains.map(function(domain, i){
      return (<li key={i}><a href={"/#/links/" + domain}>{domain}</a></li>)
    });

    return (
      <div className="domain-list">
        <h4>Domains</h4>
        <ul>
        {domainList}
        </ul>
      </div>
    );
  }
}
