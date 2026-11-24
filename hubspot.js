// HubSpot embed code for help.wrld.tech (wrld.help redirects here).
//
// Mintlify injects every `.js` file in the content directory into every page,
// so this runs site-wide without any docs.json wiring, the same way gleap.js
// does. It loads the standard WRLD embed (portal 4824142), which the WRLD
// Design System requires on every public WRLD site:
//
//   <script type="text/javascript" id="hs-script-loader" async defer
//     src="//js.hs-scripts.com/4824142.js"></script>
//
// Mintlify navigates client-side, and the HubSpot tracking code only records
// the page it loaded on, so route changes are reported as page views through
// the documented `_hsq` queue (setPath + trackPageView).
(function () {
  if (document.getElementById("hs-script-loader")) {
    return;
  }

  var script = document.createElement("script");
  script.type = "text/javascript";
  script.id = "hs-script-loader";
  script.async = true;
  script.defer = true;
  script.src = "//js.hs-scripts.com/4824142.js";
  document.head.appendChild(script);

  var lastPath = location.pathname + location.search;
  function trackRoute() {
    var path = location.pathname + location.search;
    if (path === lastPath) {
      return;
    }
    lastPath = path;
    var _hsq = (window._hsq = window._hsq || []);
    _hsq.push(["setPath", path]);
    _hsq.push(["trackPageView"]);
  }

  ["pushState", "replaceState"].forEach(function (method) {
    var original = history[method];
    history[method] = function () {
      var result = original.apply(this, arguments);
      trackRoute();
      return result;
    };
  });
  window.addEventListener("popstate", trackRoute);
})();
