"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var headerContainer = ReactDOM.createRoot(document.getElementById('header'));
var getLastLetter = function getLastLetter(str) {
  return str[str.length - 1];
};
var Modal = function Modal(_ref) {
  var isOpened = _ref.isOpened,
    setIsOpened = _ref.setIsOpened;
  var _React$useState = React.useState(''),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    phoneValue = _React$useState2[0],
    setPhoneValue = _React$useState2[1];
  var _React$useState3 = React.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    feedback = _React$useState4[0],
    setFeedback = _React$useState4[1];
  var _React$useState5 = React.useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    error = _React$useState6[0],
    setError = _React$useState6[1];
  var phoneValueHandler = function phoneValueHandler(_ref2) {
    var target = _ref2.target;
    var lastLetter = getLastLetter(target.value);
    if (target.value.length < phoneValue.length) {
      setPhoneValue(function () {
        return target.value;
      });
      return;
    }
    if (target.value.length < 2 && target.value === '+') {
      setPhoneValue(function () {
        return "".concat(target.value, "7 (");
      });
      return;
    }
    if (target.value.length < 2 && target.value === '7') {
      setPhoneValue(function () {
        return "+7 (";
      });
      return;
    }
    if (target.value.length < 2 && target.value === '8') {
      setPhoneValue(function () {
        return "+7 (";
      });
      return;
    }
    if (target.value.length === 8) {
      setPhoneValue(function () {
        return "".concat(phoneValue, ") ").concat(lastLetter);
      });
      return;
    }
    if (target.value.length === 13) {
      setPhoneValue(function () {
        return "".concat(phoneValue, "-").concat(lastLetter);
      });
      return;
    }
    if (target.value.length === 16) {
      setPhoneValue(function () {
        return "".concat(phoneValue, "-").concat(lastLetter);
      });
      return;
    }
    if (target.value.length >= 19) {
      return;
    }
    setPhoneValue(function () {
      return target.value;
    });
  };
  var buttonCloseHandler = function buttonCloseHandler() {
    setIsOpened(function () {
      return !isOpened;
    });
    setFeedback(function () {
      return false;
    });
    setError(function () {
      return false;
    });
  };
  var callbackFormHandler = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var phone;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            phone = JSON.stringify({
              phone: phoneValue
            });
            _context.prev = 2;
            _context.next = 5;
            return fetch('/api/phone', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: phone
            });
          case 5:
            setFeedback(function () {
              return !feedback;
            });
            _context.next = 12;
            break;
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](2);
            console.log(_context.t0);
            setError(function () {
              return true;
            });
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 8]]);
    }));
    return function callbackFormHandler(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement("section", {
    className: "modal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal__wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal__content"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: buttonCloseHandler,
    className: "modal__close"
  }, /*#__PURE__*/React.createElement("span", {
    className: "visually-hidden"
  }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C")), feedback ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", {
    className: "modal__title modal__title--feedback"
  }, "\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0447\u0442\u043E \u0440\u0435\u0448\u0438\u043B\u0438 \u0434\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u043D\u0430\u043C \u0441\u0432\u043E\u0439 \u043E\u0442\u0434\u044B\u0445, \u043C\u044B \u0432\u0430\u043C \u0441\u0435\u0439\u0447\u0430\u0441 \u043F\u0435\u0440\u0435\u0437\u0432\u043E\u043D\u0438\u043C!"), /*#__PURE__*/React.createElement("p", {
    className: "modal__text"
  }, "\u0410 \u043F\u043E\u043A\u0430 \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u0447\u0438\u0442\u0430\u0442\u044C \u043E \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0445 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F\u0445, \u043A\u0443\u0440\u043E\u0440\u0442\u0430\u0445 \u0438 \u043E\u0442\u0435\u043B\u044F\u0445, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0442\u0443\u0440\u044B"), /*#__PURE__*/React.createElement("ul", {
    className: "pages__list countries countries--feedback"
  }, /*#__PURE__*/React.createElement("li", {
    className: "countries__item countries__item--feedback"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/country/thailand/index.html",
    className: "countries__item-link countries__item-link--feedback"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "countries__item-title countries__item-title--feedback tabs__title tabs__title--thailand"
  }, "\u0422\u0430\u0438\u043B\u0430\u043D\u0434"))), /*#__PURE__*/React.createElement("li", {
    className: "countries__item countries__item--feedback"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/country/uae/index.html",
    className: "countries__item-link countries__item-link--feedback"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "countries__item-title countries__item-title--feedback tabs__title tabs__title--uae"
  }, "\u041E\u0410\u042D"))), /*#__PURE__*/React.createElement("li", {
    className: "countries__item countries__item--feedback"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/country/vietnam/index.html",
    className: "countries__item-link countries__item-link--feedback"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "countries__item-title countries__item-title--feedback tabs__title tabs__title--vietnam"
  }, "\u0412\u044C\u0435\u0442\u043D\u0430\u043C"))), /*#__PURE__*/React.createElement("li", {
    className: "countries__item countries__item--feedback"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/country/egypt/index.html",
    className: "countries__item-link countries__item-link--feedback"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "countries__item-title countries__item-title--feedback tabs__title tabs__title--egypt"
  }, "\u0415\u0433\u0438\u043F\u0435\u0442"))), /*#__PURE__*/React.createElement("li", {
    className: "countries__item countries__item--feedback"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/country/turkey/index.html",
    className: "countries__item-link countries__item-link--feedback"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "countries__item-title countries__item-title--feedback tabs__title tabs__title--turkey"
  }, "\u0422\u0443\u0440\u0446\u0438\u044F"))))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", {
    className: "modal__title"
  }, "\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0432\u0430\u0448 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u0438 \u043C\u044B \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0432\u0430\u043C \u043F\u0435\u0440\u0435\u0437\u0432\u043E\u043D\u0438\u043C!"), /*#__PURE__*/React.createElement("form", {
    action: "post",
    id: "callback-form",
    onSubmit: callbackFormHandler,
    className: "feedback-form"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "feedback-form__list"
  }, /*#__PURE__*/React.createElement("li", {
    className: "feedback-form__list-item"
  }, /*#__PURE__*/React.createElement("input", {
    type: "tel",
    id: "phone",
    name: "phone",
    className: "feedback-form__input",
    required: true,
    placeholder: "+7(___)___-__-__",
    value: phoneValue,
    onChange: phoneValueHandler
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "phone",
    className: "visually-hidden"
  }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D"))), /*#__PURE__*/React.createElement("button", {
    className: "feedback-form__submit",
    type: "submit"
  }, "\u041F\u0435\u0440\u0435\u0437\u0432\u043E\u043D\u0438\u0442\u0435 \u043C\u043D\u0435"))))));
};
var HeaderAddress = function HeaderAddress() {
  var _React$useState7 = React.useState(false),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    mapIsOpened = _React$useState8[0],
    setMapIsOpened = _React$useState8[1];
  var mapClickHandler = function mapClickHandler(e) {
    e.preventDefault();
    setMapIsOpened(function () {
      return !mapIsOpened;
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("address", {
    className: "header__address__container"
  }, /*#__PURE__*/React.createElement("p", {
    className: "header__address__street"
  }, "\u041C\u0443\u0441\u0442\u0430\u0444\u0438\u043D\u0430 81/3, \u043E\u0444\u0438\u0441 206"), /*#__PURE__*/React.createElement("p", {
    className: "header__address__city"
  }, "\u0433. \u041A\u0430\u0440\u0430\u0433\u0430\u043D\u0434\u0430"), /*#__PURE__*/React.createElement("a", {
    href: "/info/contacts/index.html",
    onClick: mapClickHandler,
    className: "header__address__link phones-list__callback"
  }, "\u0421\u0445\u0435\u043C\u0430 \u043F\u0440\u043E\u0435\u0437\u0434\u0430 \u043A \u043E\u0444\u0438\u0441\u0443")), mapIsOpened ? /*#__PURE__*/React.createElement("section", {
    className: "modal modal--map"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal__wrapper modal__wrapper--map"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal__content"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "modal__title--map"
  }, "\u0422\u0443\u0440\u0430\u0433\u0435\u043D\u0442\u0441\u0442\u0432\u043E \xABTime to Travel\xBB"), /*#__PURE__*/React.createElement("p", {
    className: "modal__text--map"
  }, "\u0433. \u041A\u0430\u0440\u0430\u0433\u0430\u043D\u0434\u0430, \u0443\u043B. \u041C\u0443\u0441\u0442\u0430\u0444\u0438\u043D\u0430 81/3, \u043E\u0444\u0438\u0441 206"), /*#__PURE__*/React.createElement("p", {
    className: "modal__text--map"
  }, "\u043F\u043D-\u043F\u0442 10:00-19:00"), /*#__PURE__*/React.createElement("button", {
    onClick: mapClickHandler,
    className: "modal__close modal__close--map"
  }, /*#__PURE__*/React.createElement("span", {
    className: "visually-hidden"
  }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://yandex.kz/maps/ru/org/time_to_travel/196365210130/?lang=ru&utm_medium=mapframe&utm_source=maps",
    style: {
      color: '#eee',
      fontSize: '12px',
      position: 'absolute',
      top: '0px'
    }
  }, "Time to travel"), /*#__PURE__*/React.createElement("a", {
    href: "https://yandex.kz/maps/ru/164/karaganda/category/travel_agency/184106432/?lang=ru&utm_medium=mapframe&utm_source=maps",
    style: {
      color: '#eee',
      fontSize: '12px',
      position: 'absolute',
      top: '14px'
    }
  }, "\u0422\u0443\u0440\u0430\u0433\u0435\u043D\u0442\u0441\u0442\u0432\u043E \u0432 \u041A\u0430\u0440\u0430\u0433\u0430\u043D\u0434\u0435"), /*#__PURE__*/React.createElement("iframe", {
    src: "https://yandex.kz/map-widget/v1/?ll=73.112339%2C49.813474&mode=search&oid=196365210130&ol=biz&z=16.99",
    width: 680,
    height: 400,
    frameBorder: 0,
    allowFullScreen: true,
    style: {
      position: 'relative'
    }
  }))))) : null);
};
var HeaderPhones = function HeaderPhones() {
  var _React$useState9 = React.useState(false),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    modalIsOpened = _React$useState10[0],
    setModalIsOpened = _React$useState10[1];
  var callbackHandler = function callbackHandler(e) {
    e.preventDefault();
    setModalIsOpened(function () {
      return !modalIsOpened;
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ul", {
    className: "header__phones phones-list"
  }, /*#__PURE__*/React.createElement("li", {
    className: "phones-list__item"
  }, /*#__PURE__*/React.createElement("p", {
    className: "phones-list__time"
  }, "\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0441 10:00 \u0434\u043E 19:00")), /*#__PURE__*/React.createElement("li", {
    className: "phones-list__item"
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:+77078863633",
    className: "phones-list__link"
  }, "+7 (707) 886-36-33")), /*#__PURE__*/React.createElement("li", {
    className: "phones-list__item"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/pages/contacts.html",
    onClick: callbackHandler,
    className: "phones-list__callback"
  }, "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u0439 \u0437\u0432\u043E\u043D\u043E\u043A"))), modalIsOpened ? /*#__PURE__*/React.createElement(Modal, {
    isOpened: modalIsOpened,
    setIsOpened: setModalIsOpened
  }) : false);
};
var Credit = function Credit() {
  return /*#__PURE__*/React.createElement("section", {
    className: "credit"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/info/credit/index.html"
  }, /*#__PURE__*/React.createElement("div", {
    className: "credit__container"
  }, /*#__PURE__*/React.createElement("p", {
    className: "credit__subtitle"
  }, "\u041E\u0442\u0434\u044B\u0445\u0430\u0439\u0442\u0435 \u0441\u0435\u0439\u0447\u0430\u0441 \u043F\u043B\u0430\u0442\u0438\u0442\u0435", /*#__PURE__*/React.createElement("span", {
    className: "credit__subtitle__text--accent"
  }, " \u043F\u043E\u0442\u043E\u043C")), /*#__PURE__*/React.createElement("h2", {
    className: "credit__title"
  }, "\u0422\u0443\u0440\u044B \u0432 \u0440\u0430\u0441\u0441\u0440\u043E\u0447\u043A\u0443", /*#__PURE__*/React.createElement("span", {
    className: "credit__title__text--small"
  }, " \u0434\u043E"), /*#__PURE__*/React.createElement("span", {
    className: "credit__title__text--accent"
  }, " 3 000 000"), /*#__PURE__*/React.createElement("span", {
    className: "credit__title__text--small"
  }, " \u0442\u0433.")))));
};
var Header = function Header() {
  var _React$useState11 = React.useState(false),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    isOpened = _React$useState12[0],
    setIsOpened = _React$useState12[1];
  var mobileMenuHandler = function mobileMenuHandler() {
    setIsOpened(function () {
      return !isOpened;
    });
  };
  var getClassNav = function getClassNav() {
    return isOpened ? 'header__nav main-nav main-nav--show' : 'header__nav main-nav';
  };
  var getClassButton = function getClassButton() {
    return isOpened ? 'main-nav__button main-nav__button--opened' : 'main-nav__button main-nav__button--closed';
  };
  var classNav = getClassNav();
  var classButton = getClassButton();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Credit, null), /*#__PURE__*/React.createElement("div", {
    className: "header__container"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/index.html",
    className: "header__logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/img/Logo.png",
    width: "50",
    height: "50",
    alt: "\u041B\u043E\u0433\u043E\u0442\u0438\u043F",
    className: "header__logo-image"
  })), /*#__PURE__*/React.createElement("nav", {
    className: classNav
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: classButton,
    onClick: mobileMenuHandler
  }, /*#__PURE__*/React.createElement("span", {
    className: "visually-hidden"
  }, "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0435 \u043C\u0435\u043D\u044E")), /*#__PURE__*/React.createElement("ul", {
    className: "main-nav__list",
    itemScope: true,
    itemType: "http://schema.org/SiteNavigationElement"
  }, /*#__PURE__*/React.createElement("li", {
    className: "main-nav__list-item"
  }, /*#__PURE__*/React.createElement("a", {
    itemProp: "url",
    href: "/tours/index.html",
    className: "main-nav__list-link"
  }, "\u0422\u0443\u0440\u044B")), /*#__PURE__*/React.createElement("li", {
    className: "main-nav__list-item"
  }, /*#__PURE__*/React.createElement("a", {
    itemProp: "url",
    href: "/country/index.html",
    className: "main-nav__list-link"
  }, "\u0421\u0442\u0440\u0430\u043D\u044B")), /*#__PURE__*/React.createElement("li", {
    className: "main-nav__list-item"
  }, /*#__PURE__*/React.createElement("a", {
    itemProp: "url",
    href: "/hottours/index.html",
    className: "main-nav__list-link"
  }, "\u0413\u043E\u0440\u044F\u0449\u0438\u0435 \u0442\u0443\u0440\u044B")), /*#__PURE__*/React.createElement("li", {
    className: "main-nav__list-item"
  }, /*#__PURE__*/React.createElement("a", {
    itemProp: "url",
    href: "/articles/articles.html",
    className: "main-nav__list-link"
  }, "\u0421\u0442\u0430\u0442\u044C\u0438")), /*#__PURE__*/React.createElement("li", {
    className: "main-nav__list-item"
  }, /*#__PURE__*/React.createElement("a", {
    itemProp: "url",
    href: "/info/about/index.html",
    className: "main-nav__list-link"
  }, "\u041E \u043D\u0430\u0441")), /*#__PURE__*/React.createElement("li", {
    className: "main-nav__list-item"
  }, /*#__PURE__*/React.createElement("a", {
    itemProp: "url",
    href: "/info/contacts/index.html",
    className: "main-nav__list-link"
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B")))), /*#__PURE__*/React.createElement("div", {
    className: "header__address"
  }, /*#__PURE__*/React.createElement(HeaderAddress, null)), /*#__PURE__*/React.createElement(HeaderPhones, null)));
};
var element = /*#__PURE__*/React.createElement(Header, null);
headerContainer.render(element);