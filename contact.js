 const scrollBtn = document.getElementById("scrollTopBtn");
    window.onscroll = function () {
      scrollBtn.style.display = window.scrollY > 100 ? "flex" : "none";
    };
    scrollBtn.onclick = function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

