// ===== Experience data (edit freely) =====
const ExperienceData = [
  {
    role: "AI Engineer",
    company: "Miaoon / NicFresh",
    location: "Sheffield, UK",
    from: "Jan 2024",
    to: "Present",
    bullets: [
      "Built multi-agent RAG on AWS Bedrock with FAISS on S3, guardrails, and evals.",
      "Deployed LLMOps CI/CD via GitHub Actions → ECR/ECS; CloudWatch metrics & logs.",
      "Optimized Shopify multi-country store (cookies, metafields) → ↑ CR by 18%."
    ],
    tech: ["Python","AWS Bedrock","FAISS","LangGraph","ECS","S3","GitHub Actions","Shopify/Liquid"]
  },
  {
    role: "Data / Platform Engineer",
    company: "Prestige Windows & Doors (Consulting)",
    location: "UK (Remote)",
    from: "Aug 2023",
    to: "Dec 2024",
    bullets: [
      "Delivered pricing & margin analytics; SKU-mix insights → +3.1pp margin uplift.",
      "Automated ETL with Python/Pandas; dashboards in Power BI.",
      "Modeled demand seasonality; reduced stockouts with reorder rules."
    ],
    tech: ["Python","Pandas","Excel","Power BI","ETL"]
  },
  {
    role: "Power Platform Developer",
    company: "Various (Access → Dataverse migration)",
    location: "UK",
    from: "2022",
    to: "2023",
    bullets: [
      "Rebuilt Access workflows in Power Apps/Automate with Dataverse and audit trails.",
      "Queue management for ~675 requests/week; 24-month retention for audit.",
      "Role-based UI mirrored legacy to cut training time."
    ],
    tech: ["Power Apps","Power Automate","Dataverse","Power BI","SQL"]
  }
];

// ===== Render =====
function expItemHTML(e) {
  const bullets = (e.bullets || []).map(b => `<li>${b}</li>`).join("");
  const chips   = (e.tech || []).map(t => `<span class="exp-chip">${t}</span>`).join("");

  return `
    <article class="exp-item">
      <div class="exp-head">
        <span class="exp-role">${e.role}</span>
        <span class="exp-sep">·</span>
        <span class="exp-co">${e.company}</span>
        ${e.location ? `<span class="exp-loc">(${e.location})</span>` : ""}
        <span class="exp-date">${e.from} — ${e.to}</span>
      </div>

      ${bullets ? `<ul class="exp-desc">${bullets}</ul>` : ""}

      ${chips ? `<div class="exp-tech">${chips}</div>` : ""}
    </article>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("experience-timeline");
  el.innerHTML = ExperienceData.map(expItemHTML).join("");
});
