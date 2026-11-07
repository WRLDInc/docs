// Gleap support widget for help.wrld.tech.
//
// Mintlify injects every `.js` file in the content directory into every page,
// so this runs site-wide without any docs.json wiring. It uses the same public
// Gleap SDK token as wrld.one / wrld.tech so chats, tickets, and the help
// center land in the shared WRLD Gleap project.
//
// Mirrors the official Gleap loader (https://docs.gleap.ai/javascript): calls
// made before the SDK finishes downloading are queued and replayed once it loads.
(function () {
  // Public client-side SDK key (same one served in wrld.one's HTML); not a secret.
  var GLEAP_API_KEY = "GwUBVVrc0r6XgEthA41dwFXeev3mGB3p"; // pragma: allowlist secret
  var GLEAP_SDK_URL = "https://sdk.gleap.io/latest/index.js";

  if (window.Gleap && window.Gleap.invoked) {
    return;
  }

  window.GleapActions = [];
  window.Gleap = new Proxy(
    { invoked: true },
    {
      get: function (target, name) {
        if (name === "invoked") {
          return target.invoked;
        }
        return function () {
          window.GleapActions.push({
            e: name,
            a: Array.prototype.slice.call(arguments),
          });
        };
      },
      set: function (target, name, value) {
        target[name] = value;
        return true;
      },
    }
  );

  var script = document.createElement("script");
  script.type = "text/javascript";
  script.async = true;
  script.src = GLEAP_SDK_URL;
  document.head.appendChild(script);

  window.Gleap.initialize(GLEAP_API_KEY);
})();
