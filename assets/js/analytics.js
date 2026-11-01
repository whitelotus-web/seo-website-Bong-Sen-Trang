(function () {
  if (typeof window.gtag !== "function") return;

  var pagePath = window.location.pathname;

  function send(name, extra) {
    var params = { page_path: pagePath };
    if (extra) {
      Object.keys(extra).forEach(function (key) {
        params[key] = extra[key];
      });
    }
    window.gtag("event", name, params);
  }

  function linkLabel(link) {
    return (link.textContent || "").replace(/\s+/g, " ").trim().slice(0, 60);
  }

  document.addEventListener(
    "click",
    function (event) {
      var node = event.target;
      var link = node && node.closest ? node.closest("a") : null;
      if (!link) return;
      var href = link.getAttribute("href") || "";

      if (href.indexOf("tel:") === 0) {
        send("call_click", { link_text: linkLabel(link) });
        return;
      }
      if (href.indexOf("zalo.me") !== -1) {
        send("zalo_click", { link_text: linkLabel(link) });
        return;
      }
      if (href.indexOf("maps.google") !== -1 || href.indexOf("google.com/maps") !== -1) {
        send("direction_click");
        return;
      }
      if (href.indexOf("facebook.com/whitelotus.vn") !== -1) {
        send("facebook_click");
      }
    },
    true
  );

  document.addEventListener(
    "submit",
    function (event) {
      var form = event.target;
      var name = (form && form.getAttribute("name")) || "khong-ten";
      send("form_submit", { form_name: name });
    },
    true
  );
})();
