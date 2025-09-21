// ===== Testimonials data (edit to your real quotes) =====
const TestimonialsData = [
  {
    photo: "assets/img/reco/manager1.jpg",
    text: "Sachin’s RAG pipeline cut search time by over 70% and finally made our knowledge base usable. He’s fast, pragmatic, and communicates clearly.",
    stars: 5,
    name: "Robert Russell",
    role: "Head of Trading Analytics, Zishi"
  },
  {
    photo: "assets/img/reco/client1.jpg",
    text: "We migrated legacy Access flows to Power Platform with zero downtime. The role-based UI mirrored our old process so training was minimal.",
    stars: 5,
    name: "Bev Turner",
    role: "Ops Manager, Prestige Windows & Doors"
  },
  {
    photo: "assets/img/reco/mentor1.jpg",
    text: "Strong LLMOps instincts—versioned prompts, evals, and safe deploys. Exactly what you need to move from POC to production.",
    stars: 5,
    name: "Ben Saunders",
    role: "Co-Founder, WeBuild-AI"
  }
];

// ===== Render one slide =====
function starRow(n=5){
  const full = "★".repeat(Math.max(0, Math.min(5, n)));
  const empty = "☆".repeat(5 - Math.max(0, Math.min(5, n)));
  return `<span class="testi-stars" aria-label="${n} out of 5 stars">${full}${empty}</span>`;
}

function slideHTML(t){
  return `
    <article class="testi-card">
      <div class="testi-photo">
        <div class="frame">
          <img loading="lazy" src="${t.photo}" alt="${t.name}">
        </div>
      </div>
      <div class="testi-content">
        <div class="testi-quoteicon">“</div>
        <p class="testi-text">${t.text}</p>
        ${starRow(t.stars || 5)}
        <div class="testi-author">${t.name}</div>
        <div class="testi-role">${t.role || ""}</div>
      </div>
    </article>
  `;
}

// ===== Setup slider (buttons, wheel, drag) =====
document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("testi-track");
  track.innerHTML = TestimonialsData.map(slideHTML).join("");

  const prev = document.querySelector(".testi-nav.prev");
  const next = document.querySelector(".testi-nav.next");

  const page = () => track.clientWidth * 0.98;

  next.addEventListener("click", () => track.scrollBy({ left:  page(), behavior: "smooth" }));
  prev.addEventListener("click", () => track.scrollBy({ left: -page(), behavior: "smooth" }));

  // Convert vertical wheel to horizontal scroll
  track.addEventListener("wheel", (e) => {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      track.scrollBy({ left: e.deltaY, behavior: "auto" });
      e.preventDefault();
    }
  }, { passive: false });

  // Drag to scroll (desktop)
  let isDown = false, startX = 0, startScroll = 0;
  track.addEventListener("pointerdown", (e) => {
    isDown = true; startX = e.clientX; startScroll = track.scrollLeft;
    track.setPointerCapture(e.pointerId);
  });
  track.addEventListener("pointermove", (e) => {
    if (!isDown) return;
    const dx = e.clientX - startX;
    track.scrollLeft = startScroll - dx;
  });
  ["pointerup","pointercancel","mouseleave"].forEach(evt =>
    track.addEventListener(evt, () => { isDown = false; })
  );

  // Optional: autoplay (uncomment to enable)
  // let timer = setInterval(()=> next.click(), 4500);
  // track.addEventListener("mouseenter", ()=> clearInterval(timer));
  // track.addEventListener("mouseleave", ()=> timer = setInterval(()=> next.click(), 4500));
});
