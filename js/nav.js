document.addEventListener("DOMContentLoaded", function () {
  let navItems = document.querySelectorAll(".navbar-nav .nav-item a");

  navItems.forEach((link) => {
    if (link.href === window.location.href) {
      link.parentElement.classList.add("active");
    } else {
      link.parentElement.classList.remove("active");
    }

    link.addEventListener("click", function () {
      navItems.forEach((nav) => nav.parentElement.classList.remove("active"));
      this.parentElement.classList.add("active");
    });
  });
});
