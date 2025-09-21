// ===== Experience data (edit freely) =====
const ExperienceData = [
  {
    role: "Data Engineer (Freelance)",
    company: "Prestige Windows",
    location: "Sheffield, UK",
    from: "Aug. 2024",
    to: "Nov. 2024",
    bullets: [
      "Built an automated data pipeline using Python and Power Platform to extract sales data from 500+ PDFs and 3 websites, cutting manual effort, and increased revenue by 15%.",
      "Created Power BI dashboards using DAX measures and dynamic filters to visualize product-level sales trends, enabling targeted strategy execution that increased sales by 40% and empowered real-time, data-driven business decisions."
    ],
    tech: ["Python","Power Platform","Power BI","ETL","Selenium","Beautiful Soup"]
  },
  {
    role: "Software Engineer (Data & BI)",
    company: "Q3 Technologies",
    location: "Gurugram, India",
    from: "Jan. 2022",
    to: "Jan. 2024",
    bullets: [
      "Built a RAG-based AI chatbot to extract insights from project documents and research papers, cutting manual lookup by 35% and improving requirement clarity in IT and scientific decisions in the chemical industry.",
      "Engineered an AI-driven tender automation system using RPA, OCR, and a RAG-based LLM chatbot to extract, categorize, and query documents, automating 80% of manual work and enabling 5x more daily applications to increase coverage and competitiveness.",
      "Enabled OpenAI-MySQL integration for natural language sales queries on 50K+ records/month, reducing query time by 60% for non-technical jewellery client.",
      "Developed a sentiment and topic modeling system (SVM, TF-IDF, LDA, preprocessing) for a quick-commerce client to flag delivery-related issues, achieving 83% accuracy and helping CX and product teams improve user experience.",
      "Led a scalable web application for south Korean electronics firm with 140+ SQL procedures and ETL pipelines for 1M records, cutting processing time by 90% and Streamlining workflows to enable swift decision-making within the finance and accounts team."
    ],
    tech: ["Python","SQL","Machine Learning","NLP","RAG","LLM","RPA","Databases","ETL","Text Analytics","Business Intelligence","Process Optimization"]
  },
  {
    role: "Data Analyst Project Intern",
    company: "iNeuron.ai",
    location: "Bangalore, India",
    from: "Aug. 2021",
    to: "Nov. 2021",
    bullets: [
      "Analysed 300+ patient records, creating 22+ Python visualizations and a Power BI dashboard, improving diagnostic decision-making.",
      "Created High/Low level designs, architecture, and wireframes to define analysis flow, reducing rework by 25%."
    ],
    tech: ["Python","Power BI","Data Analytics","Exploratory Data Analysis", "Data Visualization", "Wireframing"]
  },
  {
    role: "Software Engineer (Data)",
    company: "Goalwit Technologies",
    location: "Delhi, India",
    from: "Aug. 2019",
    to: "Dec. 2020",
    bullets: [
      "Architected end-to-end SQL database for matrimony product including schema design, indexing strategies, and stored procedures in collaboration with backend developers, improved query speed by 70% and enabled scalable performance as user base grew 5x.",
      "Designed and executed ETL pipelines in SQL and Python to cleanse, transform, and integrate multi-source user data, improving CRM accuracy by 40% and driving efficient lead segmentation.",
      "Engineered a rule-based matchmaking system using SQL and Python to filter profiles based on demographic, religious, and behavioral preferences, reduced mismatch complaints by 27% and boosted successful pairings, directly increasing match-to-sale conversions.",
      "Built a logistic regression model to score user engagement during onboarding based on behavior signals like field skip rate and time spent, identified high-risk drop-offs, optimized form UX, and increased profile completion by 23%.",
      "Applied NLP techniques like TF-IDF and cosine similarity using Python to analyze user bios and interests, increasing match relevance by 53% and boosting engagement on suggested profiles in the matrimony workflow."
    ],
    tech: ["Python","SQL","ETL","Data Engineering","ML", "NLP", "Business Intelligence"]
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
