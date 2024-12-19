// ==UserScript==
// @name        Remove useless crap from sidebar
// @namespace   Violentmonkey Scripts
// @match       https://x.com/home
// @grant       GM_addStyle
// @version     1.0
// @author      Claudio C.
// @description 16/09/2023, 16:51:00
// ==/UserScript==

(() => {
  GM_addStyle("div:has(> [aria-label='Subscribe to Premium']) { display: none !important; }");
  GM_addStyle("div:has(> [aria-label='Who to follow']) { display: none !important; }");
  GM_addStyle("a[aria-label='Communities'] { display: none !important; }");
  GM_addStyle("a[aria-label='Premium'] { display: none !important; }");
  GM_addStyle("a[aria-label='Lists'] { display: none !important; }");
  GM_addStyle("[data-testid='DMDrawer'] { display: none !important; }");
})();
