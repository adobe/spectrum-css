webpackHotUpdate("styles",{

/***/ "./components/css/resourceCard.scss":
/*!******************************************!*\
  !*** ./components/css/resourceCard.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"card":"card___2ZaLE","content":"content___1VKv9","cardTitle":"cardTitle___35xj1","cardSubTitle":"cardSubTitle___12tj6","link":"link___3YiP4","row":"row___3btx3","cardButton":"cardButton___2kEb-","npmImage":"npmImage___1VsWz","githubImage":"githubImage___SbTWk","spectrumImage":"spectrumImage___2lmd8"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1571697859103");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.bb4d62f7c3804369b1a9.hot-update.js.map