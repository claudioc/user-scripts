// ==UserScript==
// @name         Facebook Visibility Blocker
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Prevent Facebook from detecting tab switches and automatically reload the page
// @author       Claudio Cicali <claudio.cicali@gmail.com>
// @match        https://*.facebook.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
  'use strict';

  // Overrides the "hidden" property of document to always say "I am not hidden!"
  Object.defineProperty(document, 'hidden', {
    get: function () {
      return false;
    },
  });

  // Overrides the "visibilityState" property of document to always say "I am visible!"
  Object.defineProperty(document, 'visibilityState', {
    get: function () {
      return 'visible';
    },
  });

  // Finally, block visibility change events unsing proxies
  window.addEventListener('load', function () {
    document.removeEventListener('visibilitychange', null);
    EventTarget.prototype.addEventListener = new Proxy(EventTarget.prototype.addEventListener, {
      apply: function (target, thisArg, argumentsList) {
        if (argumentsList[0] !== 'visibilitychange') {
          return Reflect.apply(target, thisArg, argumentsList);
        }
      },
    });
  });
})();
