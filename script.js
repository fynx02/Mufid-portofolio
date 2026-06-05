const body = document.querySelector("body"),
  sidebar = body.querySelector("nav"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  mobileToggle = body.querySelector(".mobile-sidebar-toggle"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
  if (window.innerWidth <= 900) {
    sidebar.classList.toggle("open");
  } else {
    sidebar.classList.toggle("close");
  }
});

if (mobileToggle) {
  mobileToggle.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });
}

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
  sidebar.classList.add("open");
});

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Light mode";
  } else {
    modeText.innerText = "Dark mode";
  }
});

var typed = new Typed(".input", {
  strings: ["Siswa SMK TELKOM BANDUNG", "kelas 10 PPLG 1", "Siap Untuk dibimbing menuju lebih baik"],
  typeSpeed: 100,
  backSpeed: 55,
  loop: true,
});

// Intro lines background generation
(function () {
  var c = document.getElementById('introLines');
  if (!c) return;
  var m = window.innerWidth < 769;
  var v = m ? 6 : 12;
  var h = m ? 5 : 10;

  for (var i = 0; i < v; i++) {
    var line = document.createElement('div');
    line.className = 'intro-line';
    line.style.left = (5 + Math.random() * 90) + '%';
    line.style.height = (40 + Math.random() * 60) + '%';
    line.style.animationDelay = (Math.random() * 0.8) + 's';
    var fb = Math.random() > 0.5;
    if (fb) { line.style.bottom = '0'; line.style.top = 'auto'; line.classList.add('from-bottom'); }
    else { line.style.top = '0'; }
    c.appendChild(line);
    for (var j = 0, n = 1 + Math.floor(Math.random() * 3); j < n; j++) {
      var d = document.createElement('div');
      d.className = 'intro-drop ' + (fb ? 'drop-up' : (Math.random() > .5 ? 'drop-down' : 'drop-up'));
      d.style.setProperty('--duration', (3 + Math.random() * 5) + 's');
      d.style.setProperty('--delay', (Math.random() * 3) + 's');
      line.appendChild(d);
    }
  }

  for (var i = 0; i < h; i++) {
    var line = document.createElement('div');
    line.className = 'intro-line-horizontal';
    line.style.top = (10 + Math.random() * 80) + '%';
    line.style.width = (40 + Math.random() * 60) + '%';
    line.style.animationDelay = (Math.random() * 1) + 's';
    var fr = Math.random() > 0.5;
    if (fr) { line.style.right = '0'; line.style.left = 'auto'; line.classList.add('from-right'); }
    else { line.style.left = '0'; }
    c.appendChild(line);
    for (var j = 0, n = 1 + Math.floor(Math.random() * 3); j < n; j++) {
      var d = document.createElement('div');
      d.className = 'intro-drop-horizontal ' + (fr ? 'drop-left' : (Math.random() > .5 ? 'drop-right' : 'drop-left'));
      d.style.setProperty('--duration', (3 + Math.random() * 5) + 's');
      d.style.setProperty('--delay', (Math.random() * 3) + 's');
      line.appendChild(d);
    }
  }
})();
