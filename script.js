document.addEventListener("DOMContentLoaded", () => {
  // Scroll fade-in
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.project-card, .team-member').forEach(el => {
    el.classList.add("fade-init");
    observer.observe(el);
  });

});


