"use strict";

var indiaResortsMinContainer = ReactDOM.createRoot(document.getElementById('india-resorts-list'));
var IndiaResortsMin = function IndiaResortsMin() {
  return /*#__PURE__*/React.createElement("ul", {
    className: "article__resorts resorts resorts--list-min"
  }, /*#__PURE__*/React.createElement("li", {
    className: "resorts__item resorts__item--list-min"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/country/india/goa/index.html",
    className: "resorts__item-link resorts__item-link--list-min"
  }, /*#__PURE__*/React.createElement("picture", null, /*#__PURE__*/React.createElement("source", {
    type: "image/webp",
    srcSet: "/img/tours/india/goa-resort.webp"
  }), /*#__PURE__*/React.createElement("img", {
    src: "/img/tours/india/goa-resort.jpg",
    alt: "\u0413\u043E\u0430",
    className: "resorts__item-image resorts__item-image--list-min",
    width: "280"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "resorts__item-title resorts__item-title--list-min"
  }, "\u0413\u043E\u0430"))));
};
var element = /*#__PURE__*/React.createElement(IndiaResortsMin, null);
indiaResortsMinContainer.render(element);