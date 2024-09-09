"use strict";

var chainaResortsMinContainer = ReactDOM.createRoot(document.getElementById('chaina-resorts-list'));
var ChinaResortsMin = function ChinaResortsMin() {
  return /*#__PURE__*/React.createElement("ul", {
    className: "article__resorts resorts resorts--list-min"
  }, /*#__PURE__*/React.createElement("li", {
    className: "resorts__item resorts__item--list-min"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/country/china/hainan/index.html",
    className: "resorts__item-link resorts__item-link--list-min"
  }, /*#__PURE__*/React.createElement("picture", null, /*#__PURE__*/React.createElement("source", {
    type: "image/webp",
    srcSet: "/img/tours/china/hainan-resort.webp"
  }), /*#__PURE__*/React.createElement("img", {
    src: "/img/tours/china/hainan-resort.jpg",
    alt: "\u0425\u0430\u0439\u043D\u0430\u043D\u044C",
    className: "resorts__item-image resorts__item-image--list-min",
    width: "280"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "resorts__item-title resorts__item-title--list-min"
  }, "\u0425\u0430\u0439\u043D\u0430\u043D\u044C"))));
};
var element = /*#__PURE__*/React.createElement(ChinaResortsMin, null);
chinaResortsMinContainer.render(element);