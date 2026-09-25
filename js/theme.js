(function () {
  var storageKey = "theme";

  function systemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") || systemTheme();
  }

  function applyTheme(theme, persist) {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.colorScheme = theme;
    if (persist) {
      try {
        localStorage.setItem(storageKey, theme);
      } catch (e) { }
    }
    var toggle = document.getElementById("theme-toggle");
    if (toggle) {
      var next = theme === "dark" ? "light" : "dark";
      toggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
      toggle.setAttribute("aria-label", "Switch to " + next + " theme");
      toggle.setAttribute("title", "theme:" + theme + " — switch to " + next);
    }
  }

  function init() {
    var stored = null;
    try {
      stored = localStorage.getItem(storageKey);
    } catch (e) { }
    applyTheme(stored || systemTheme(), false);

    var toggle = document.getElementById("theme-toggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        applyTheme(currentTheme() === "dark" ? "light" : "dark", true);
      });
    }

    var media = window.matchMedia("(prefers-color-scheme: dark)");
    var onChange = function () {
      var storedNow = null;
      try {
        storedNow = localStorage.getItem(storageKey);
      } catch (e) { }
      if (!storedNow) {
        applyTheme(systemTheme(), false);
      }
    };
    if (media.addEventListener) {
      media.addEventListener("change", onChange);
    } else if (media.addListener) {
      media.addListener(onChange);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
