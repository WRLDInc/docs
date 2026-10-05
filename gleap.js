// Gleap support widget for help.wrld.tech.
//
// Mintlify injects every `.js` file in the content directory into every page,
// so this runs site-wide without any docs.json wiring. It uses the same public
// Gleap SDK token as wrld.one / wrld.tech so chats, tickets, and the help
// center land in the shared WRLD Gleap project.
//
// Mirrors the official Gleap loader (https://docs.gleap.io/javascript): a
// method-queuing stub is installed on `window.Gleap` so calls made before the
// SDK finishes downloading are replayed once it loads.
(function () {
  // Public client-side SDK key (same one served in wrld.one's HTML); not a secret.
  var GLEAP_API_KEY = "GwUBVVrc0r6XgEthA41dwFXeev3mGB3p"; // pragma: allowlist secret
  var GLEAP_SDK_URL = "https://sdk.gleap.io/latest/index.js";

  var Gleap = (window.Gleap = window.Gleap || []);
  if (Gleap.invoked) {
    return;
  }

  window.GleapActions = [];
  Gleap.invoked = true;
  Gleap.methods = [
    "identify", "setEnvironment", "setTags", "attachCustomData", "setCustomData",
    "removeCustomData", "clearCustomData", "registerCustomAction", "trackEvent", "log",
    "preFillForm", "showSurvey", "sendSilentCrashReport", "startFeedbackFlow", "startBot",
    "setAppBuildNumber", "setAppVersionCode", "setApiUrl", "setFrameUrl", "isOpened",
    "open", "close", "on", "setLanguage", "setOfflineMode", "startClassicForm",
    "initialize", "disableConsoleLogOverwrite", "logEvent", "hide", "enableShortcuts",
    "showFeedbackButton", "destroy", "getIdentity", "isUserIdentified", "clearIdentity",
    "openConversations", "openConversation", "openHelpCenterCollection",
    "openHelpCenterArticle", "openHelpCenter", "searchHelpCenter", "openNewsArticle",
    "openChecklists", "startChecklist", "openNews", "openFeatureRequests", "isLiveMode",
    "setUrlHandler", "setAiTools", "setTicketAttribute", "unsetTicketAttribute",
    "clearTicketAttributes", "setNetworkLogsBlacklist", "setNetworkLogPropsToIgnore",
    "attachNetworkLogs", "setDisablePageTracking", "setDisableInAppNotifications",
    "setStyles", "getFrameUrl", "setModalUrl", "getModalUrl", "showNotificationBadge",
    "setNotificationCount", "attachAppInsightsSession", "setUseCookies", "setupTracking"
  ];

  Gleap.f = function (method) {
    return function () {
      window.GleapActions.push({
        e: method,
        a: Array.prototype.slice.call(arguments)
      });
    };
  };

  for (var i = 0; i < Gleap.methods.length; i++) {
    Gleap[Gleap.methods[i]] = Gleap.f(Gleap.methods[i]);
  }

  Gleap.load = function () {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = GLEAP_SDK_URL;
    document.head.appendChild(script);
  };

  Gleap.load();
  Gleap.initialize(GLEAP_API_KEY);
})();
