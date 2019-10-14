webpackHotUpdate("styles",{

/***/ "./components/css/sidebar.scss":
/*!*************************************!*\
  !*** ./components/css/sidebar.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"appHeader":"appHeader___1ukmz","overlay":"overlay___ohheB","menuClosed":"menuClosed___1538U","sideBar":"sideBar___oMpBa","menuOpen":"menuOpen___3cldn","spectrumSidebar":"spectrumSidebar___3o3U6","header":"header___pV9wH","navigation":"navigation___342Gc","logo":"logo___KrQMx","title":"title___EZ0XC","headerLink":"headerLink___2-zW6","titleText":"titleText___bDj-Z","internal":"internal___2BOEY"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1571060663055");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.babd1479e48cee0c987c.hot-update.js.map