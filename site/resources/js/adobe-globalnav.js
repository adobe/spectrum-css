window.adobeGlobalnavConfig = {
	locale: "en",
	footer: {
		target: document.getElementById("footer_global"),
		excludeNavigation: true
	},
	callbacks: {
		globalnav_ready: function() {
			document.querySelector(".Footernav-region").style.visibility = "hidden";

			document.querySelector("#AdobeFooterNav").classList.add("has-spectrum-css-customTheme");

			var css = document.createElement("style");
			css.type = "text/css";

			var styles = `
        #AdobeFooterNav.Footernav-wrapper.has-spectrum-css-customTheme {
          background-color: var(--spectrum-gray-25);
        }

        #AdobeFooterNav.Footernav-wrapper.has-spectrum-css-customTheme .Footernav-disclaimer {
          color: var(--spectrum-neutral-content-color-default);
        }

        #AdobeFooterNav.Footernav-wrapper.has-spectrum-css-customTheme .Footernav-disclaimer-link:hover {
          color: var(--spectrum-neutral-content-color-hover);
        }

        #AdobeFooterNav.Footernav-wrapper.has-spectrum-css-customTheme .Footernav-disclaimer[adChoices] .Footernav-disclaimer-link {
          fill: var(--spectrum-neutral-content-color-default);
        }

        #AdobeFooterNav.Footernav-wrapper.has-spectrum-css-customTheme .Footernav-disclaimer[adChoices] .Footernav-disclaimer-link:hover {
          fill: var(--spectrum-neutral-content-color-hover);
        }
      `;

			if (css.styleSheet)
				css.styleSheet.cssText = styles;
			else
				css.appendChild(document.createTextNode(styles));

			document.getElementsByTagName("head")[0].appendChild(css);
		}
	}
};
