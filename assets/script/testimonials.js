// ===== Testimonials data (edit to your real quotes) =====
const TestimonialsData = [
  {
    photo: "assets/img/ankurarya.png",
    text: "I worked with Sachin and he has proven to be an invaluable asset to the team. His database engineering skills, proficiency in SQL and Python, along with expertise in generative AI development, have played a pivotal role in the success of our collaborative projects. I highly appreciate Sachin's commitment to excellence and innovative problem-solving",
    stars: 5,
    name: "Ankur Arya",
    role: "Senior Director - AI & Analytics, Altudo"
  },
  {
    photo: "assets/img/ankurbansal.png",
    text: "Sachin was the best Researcher and Problem Solver I’ve worked with across the organization. For any project feasibility or POC, he was always my first choice. Proficient in Python, SQL, Databases, Analytics, Data Science, ML, AI, NLP, GenAI, and LLMs, he stayed updated with the latest technologies and frequently conducted training sessions to share his knowledge. Proactive, innovative, and a natural leader, his exceptional storytelling and presentation skills made him highly effective in communicating technical concepts to non-technical stakeholders, including CEO and foreign clients. Any team would be fortunate to have him.",
    stars: 5,
    name: "Ankur Bansal",
    role: "Technical Lead & Manager, Q3 Technologies"
  },
  {
    photo: "assets/img/sakshi.png",
    text: "I had the pleasure of working with Sachin in our Data & BI team, where he excelled as a problem-solver with strong technical expertise in data domain. His proactive approach, in-depth research skills, and ability to manage tasks efficiently made him an invaluable team player and leader. Beyond his technical skills, Sachin’s supportive nature, dedication, and ability to drive team efficiency set him apart. He is not just a skilled professional but also a great individual to work with, and I’m confident he’ll excel in any role he takes on.",
    stars: 5,
    name: "Sakshi",
    role: "Module Lead, Q3 Technologies"
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
