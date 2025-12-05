document.addEventListener("DOMContentLoaded", function () {
  // Intersection Observer Settings
  const observerOptions = {
    root: null,
    threshold: 0.15, // Trigger when 15% visible
  };

  // Create Observer
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Target all elements
  const animatedElements = document.querySelectorAll(".animate-on-scroll");
  animatedElements.forEach((el) => {
    observer.observe(el);
  });
});