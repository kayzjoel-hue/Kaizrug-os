const reveals = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  reveals.forEach((item) => observer.observe(item));
} else {
  reveals.forEach((item) => item.classList.add("is-visible"));
}

const marqueeTrack = document.querySelector(".marquee-track");

if (marqueeTrack) {
  marqueeTrack.innerHTML += marqueeTrack.innerHTML;
}

const topbar = document.getElementById("topbar");

if (topbar) {
  const syncTopbar = () => {
    topbar.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  syncTopbar();
  window.addEventListener("scroll", syncTopbar, { passive: true });
}

const form = document.getElementById("waitlist-form");
const note = document.getElementById("form-note");

if (form && note) {
  form.addEventListener("submit", (event) => {
    const emailInput = form.elements.namedItem("email");
    if (!(emailInput instanceof HTMLInputElement)) {
      return;
    }

    if (emailInput.value.trim().length === 0) {
      event.preventDefault();
      note.textContent = "Add an email address to join the early access list.";
      return;
    }

    note.textContent = "Submitting early access request...";
  });
}
