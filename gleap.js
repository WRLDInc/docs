// Gleap support widget — loaded on every page by Mintlify custom scripts.
// Same public SDK token as wrld.one. https://docs.gleap.ai/javascript
(function () {
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
  script.src = "https://sdk.gleap.io/latest/index.js";
  document.head.appendChild(script);

  window.Gleap.initialize("GwUBVVrc0r6XgEthA41dwFXeev3mGB3p");
})();
