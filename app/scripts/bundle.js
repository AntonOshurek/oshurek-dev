/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/components/mobile-menu.js":
/*!***********************************************!*\
  !*** ./src/scripts/components/mobile-menu.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const mobileMenu = () => {
  const mobileButton = document.querySelector('.nav-button');
  const mobileBtnIcon = document.querySelector('.nav-button__burger');
  const navigation = document.querySelector('.nav');
  const body = document.querySelector('.body');
  let menuStatus;
  const toogleMobileMenu = () => {
    menuStatus ? closeMobileMenu() : openMobileMenu();
  };
  const onBackgroundClick = evt => {
    if (evt.target.parentElement.tagName === 'HTML') {
      closeMobileMenu();
    }
  };
  function openMobileMenu() {
    navigation.classList.add('nav--open');
    body.classList.add('body--menu-open');
    mobileBtnIcon.classList.add('nav-button__burger--active');
    menuStatus = true;
    body.addEventListener('click', onBackgroundClick);
  }
  function closeMobileMenu() {
    navigation.classList.remove('nav--open');
    body.classList.remove('body--menu-open');
    mobileBtnIcon.classList.remove('nav-button__burger--active');
    menuStatus = false;
    body.removeEventListener('click', onBackgroundClick);
  }
  mobileButton.addEventListener('click', toogleMobileMenu);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mobileMenu);

/***/ }),

/***/ "./src/scripts/components/theme-switcher.js":
/*!**************************************************!*\
  !*** ./src/scripts/components/theme-switcher.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const tchemeControl = () => {
  const lightStyles = document.querySelectorAll('link[rel=stylesheet][media*=prefers-color-scheme][media*=light]');
  const darkStyles = document.querySelectorAll('link[rel=stylesheet][media*=prefers-color-scheme][media*=dark]');
  const darkSchemeMedia = matchMedia('(prefers-color-scheme: dark)');
  const fieldset = document.querySelector('.theme-switcher');
  function setupSwitcher() {
    const savedScheme = getSavedScheme();
    if (savedScheme !== null) {
      const currentRadio = document.querySelector(`.theme-switcher__radio[value=${savedScheme}]`);
      currentRadio.checked = true;
    }
    fieldset.addEventListener('change', evt => {
      setScheme(evt.target.value);
    });
  }
  function setupScheme() {
    const savedScheme = getSavedScheme();
    const systemScheme = getSystemScheme();
    if (savedScheme === null) return;
    if (savedScheme !== systemScheme) {
      setScheme(savedScheme);
    }
  }
  function setScheme(scheme) {
    switchMedia(scheme);
    if (scheme === 'auto') {
      clearScheme();
    } else {
      saveScheme(scheme);
    }
  }
  function switchMedia(scheme) {
    let lightMedia;
    let darkMedia;
    if (scheme === 'auto') {
      lightMedia = '(prefers-color-scheme: light)';
      darkMedia = '(prefers-color-scheme: dark)';
    } else {
      lightMedia = scheme === 'light' ? 'all' : 'not all';
      darkMedia = scheme === 'dark' ? 'all' : 'not all';
    }
    [...lightStyles].forEach(link => {
      link.media = lightMedia;
    });
    [...darkStyles].forEach(link => {
      link.media = darkMedia;
    });
  }
  function getSystemScheme() {
    const darkScheme = darkSchemeMedia.matches;
    return darkScheme ? 'dark' : 'light';
  }
  function getSavedScheme() {
    return localStorage.getItem('color-scheme');
  }
  function saveScheme(scheme) {
    localStorage.setItem('color-scheme', scheme);
  }
  function clearScheme() {
    localStorage.removeItem('color-scheme');
  }
  setupSwitcher();
  setupScheme();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tchemeControl);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_theme_switcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/theme-switcher.js */ "./src/scripts/components/theme-switcher.js");
/* harmony import */ var _components_mobile_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/mobile-menu.js */ "./src/scripts/components/mobile-menu.js");


window.addEventListener('DOMContentLoaded', () => {
  (0,_components_theme_switcher_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_components_mobile_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map