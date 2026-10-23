// Builds the contact email address in the browser so it never appears in the
// site's HTML, where simple email scrapers look for it.
//
// To change the address, update PARTS. Joined together they are the address
// written backwards (reverse the new address, then split it at "@" and ".").
// Don't write the plain address anywhere in this repo, including comments.
//
// Any link with class "js-email" becomes a mailto: link.
//   data-subject="..."  pre-fills the email's subject line
//   data-show           also replaces the link text with the address itself
(function () {
  var PARTS = ["moc", ".", "stnemtsevninida", "@", "ofni"];
  var address = PARTS.join("").split("").reverse().join("");

  var links = document.querySelectorAll(".js-email");
  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    var subject = link.getAttribute("data-subject");
    link.href = "mailto:" + address + (subject ? "?subject=" + encodeURIComponent(subject) : "");
    if (link.hasAttribute("data-show")) {
      link.textContent = address;
    }
  }

  var years = document.querySelectorAll(".js-year");
  for (var j = 0; j < years.length; j++) {
    years[j].textContent = String(new Date().getFullYear());
  }
})();
