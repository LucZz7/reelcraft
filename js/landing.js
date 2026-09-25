/* ReelCraft Studio — landing interactions */
(function () {
  "use strict";

  // Mobile menu
  var burger = document.getElementById("burger");
  var menu = document.getElementById("mobileMenu");
  if (burger && menu) {
    burger.addEventListener("click", function () {
      menu.classList.toggle("open");
    });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { menu.classList.remove("open"); });
    });
  }

  // FAQ accordion
  var items = document.querySelectorAll(".faq-item");
  items.forEach(function (item) {
    var q = item.querySelector(".faq-q");
    var a = item.querySelector(".faq-a");
    q.addEventListener("click", function () {
      var isOpen = item.classList.contains("open");
      items.forEach(function (o) {
        o.classList.remove("open");
        o.querySelector(".faq-a").style.maxHeight = "0px";
      });
      if (!isOpen) {
        item.classList.add("open");
        a.style.maxHeight = a.scrollHeight + "px";
      }
    });
  });

  // Hero phone — cycling demo reel
  var demos = [
    { tag: "HOOK", bg: "radial-gradient(circle at 70% 20%, rgba(255,45,64,.5), transparent 60%), #12060a",
      text: "Stop scrolling. Your next reel is 30 seconds away." },
    { tag: "TIP 1", bg: "radial-gradient(circle at 30% 80%, rgba(255,45,64,.45), transparent 60%), #0a0a0f",
      text: "Type one line. Pick Hindi, Marathi or English." },
    { tag: "TIP 2", bg: "radial-gradient(circle at 80% 70%, rgba(255,120,90,.35), transparent 60%), #100810",
      text: "AI writes the script and speaks the voiceover." },
    { tag: "TIP 3", bg: "radial-gradient(circle at 20% 25%, rgba(255,45,64,.4), transparent 60%), #0c0a12",
      text: "Animated vertical video renders instantly." },
    { tag: "CTA", bg: "radial-gradient(circle at 50% 100%, rgba(255,45,64,.55), transparent 65%), #140609",
      text: "Download, copy hashtags, and publish today." }
  ];
  var reel = document.getElementById("heroReel");
  var hrTag = document.getElementById("hrTag");
  var hrText = document.getElementById("hrText");
  var hrCount = document.getElementById("hrCount");
  var hrBar = document.getElementById("hrBar");
  var idx = 0, timer = null;

  function showDemo(i) {
    var d = demos[i];
    reel.style.background = d.bg;
    hrTag.textContent = d.tag;
    hrText.style.opacity = "0";
    hrText.style.transform = "translateY(14px)";
    setTimeout(function () {
      hrText.textContent = d.text;
      hrText.style.transition = "opacity .45s ease, transform .45s ease";
      hrText.style.opacity = "1";
      hrText.style.transform = "translateY(0)";
    }, 160);
    hrCount.textContent = (i + 1) + " / " + demos.length;
    hrBar.style.transition = "none";
    hrBar.style.width = "0%";
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        hrBar.style.transition = "width 2.6s linear";
        hrBar.style.width = "100%";
      });
    });
  }
  function startHero() {
    showDemo(0);
    timer = setInterval(function () {
      idx = (idx + 1) % demos.length;
      showDemo(idx);
    }, 3000);
  }
  if (reel) {
    if (document.hidden) {
      document.addEventListener("visibilitychange", function h() {
        if (!document.hidden) { document.removeEventListener("visibilitychange", h); startHero(); }
      });
    } else {
      startHero();
    }
  }

  // Expose for tests
  window.__landing = {
    faqCount: items.length,
    toggleFirstFaq: function () {
      if (items[0]) items[0].querySelector(".faq-q").click();
      return items[0] ? items[0].classList.contains("open") : false;
    }
  };

  // Autotest (?autotest=1)
  try {
    if (new URLSearchParams(location.search).get("autotest") === "1") {
      var opened = window.__landing.toggleFirstFaq();
      var pass = opened && window.__landing.faqCount === 6;
      document.getElementById("autotest-output").textContent =
        JSON.stringify({ done: true, pass: pass, faqCount: window.__landing.faqCount });
      document.title = "AUTOTEST:" + (pass ? "PASS" : "FAIL");
    }
  } catch (e) { /* never break the page for tests */ }
})();
