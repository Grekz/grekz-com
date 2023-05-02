"use strict";
exports.id = 691;
exports.ids = [691];
exports.modules = {

/***/ 7200:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Head": () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(738);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const pageStyles = {
  color: "#232129",
  padding: "1rem",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  margin: "auto",
  width: "75%",
  textAlign: 'center',
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
};
const headingStyles = {
  marginTop: 0,
  marginBottom: "1rem",
  fontSize: "5rem"
};
const ulStyles = {
  listStyle: "none",
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
  justifyContent: "center"
};
const contactLinks = [{
  text: "LinkedIn",
  url: "https://www.linkedin.com/in/grekz/"
}, {
  text: "Github",
  url: "https://stackoverflow.com/users/551773/grekz"
}, {
  text: "StackOverflow",
  url: "https://stackoverflow.com/users/551773/grekz"
}, {
  text: "Blog (old)",
  url: "https://grekz.wordpress.com/"
}, {
  text: "Twitch",
  url: "https://twitter.com/coding_grekz"
}, {
  text: "Twitter",
  url: "https://twitter.com/CodingGrekz"
}, {
  text: "Youtube",
  url: "https://www.youtube.com/@CodingGrekz"
}, {
  text: "Discord",
  url: "https://discord.gg/6jd3GF7x"
}];
const IndexPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
    style: pageStyles
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    style: headingStyles
  }, "Hi, I'm Juan."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "...and I develop software"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "You can find me in the following places:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    style: ulStyles
  }, contactLinks.map(({
    url,
    text
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: url
  }, text)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);
const Head = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "Grekz - Software Developer");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-tsx.js.map