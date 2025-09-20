/* ============================================================
   Skills — Category tiles (compact icon + label)
   - Top row: 4 standard tiles (Programming, Data Tools, Libraries, Cloud)
   - Below: DevOps tile (auto-placed by masonry)
   - Bottom: one WIDE tile for "GenAI / LLMs"
   - Logos have labels; failed logos fall back to a text badge.
   - Masonry reflow keeps rows tight and prevents overlap with Projects.
   ============================================================ */

const ExpertiseData = {
  "Programming Languages": [
    { name: "SQL",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "SparkSQL",  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" },
    { name: "NoSQL",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "CQL",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cassandra/cassandra-original.svg" },
    { name: "DAX",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powerbi/powerbi-original.svg" },
    { name: "Python",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "PySpark",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" },
  ],

  "Data Tools & Platforms": [
    { name: "SQL Server",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
    { name: "MySQL",         logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Databricks",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" },
    { name: "Power BI",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powerbi/powerbi-original.svg" },
    { name: "SSIS",          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" }, // placeholder
    { name: "MongoDB",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Docker",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Neo4j",         logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },     // placeholder
    { name: "Google Colab",  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
    { name: "Visual Studio", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" },
    { name: "Cursor",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },    // closest match
  ],

  "Libraries & Frameworks": [
    { name: "Pandas",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "NumPy",         logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "TensorFlow",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "PyTorch",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { name: "XGBoost",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },    // placeholder
    { name: "Keras",         logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Scikit-learn",  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "SpaCy",         logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "NLTK",          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Gensim",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Pydantic",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  ],

  "Cloud": [
    { name: "AWS S3",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
    { name: "AWS ECR",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
    { name: "AWS Bedrock",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
    { name: "AWS SageMaker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
  ],

  "DevOps & Version Control": [
    { name: "CI/CD",           logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },        // generic CI/CD
    { name: "Git",             logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub",          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "GitHub Actions",  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg" }
  ],

  // Full-width tile
  "GenAI / LLMs": [
    { name: "OpenAI",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg" },
    { name: "Llama",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },   // placeholder
    { name: "Gemini",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
    { name: "Mistral",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },   // placeholder
    { name: "Hugging Face", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/huggingface/huggingface-original.svg" },
    { name: "LangChain",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },   // placeholder
    { name: "LangGraph",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },   // placeholder
    { name: "Langflow",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },   // placeholder
    { name: "Ollama",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },   // placeholder
    { name: "FastAPI",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    { name: "Streamlit",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg" },
    { name: "Groq",         logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },   // placeholder
    { name: "Pinecone",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },   // placeholder
    { name: "FAISS",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },   // placeholder
    { name: "CrewAI",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }    // placeholder
  ]
};

// Render order (GenAI last = wide full-width row at bottom)
const ORDER = [
  "Programming Languages",
  "Data Tools & Platforms",
  "Libraries & Frameworks",
  "Cloud",
  "DevOps & Version Control",
  "GenAI / LLMs"
];

// Build tiles
const ExpertiseDataHTML = ORDER.map(category => {
  const items = ExpertiseData[category] || [];

  const tileClass =
    category === "GenAI / LLMs"
      ? "expertise-category-tile wide"
      : category === "DevOps & Version Control"
      ? "expertise-category-tile devops"
      : "expertise-category-tile";

  const gridClass = category === "GenAI / LLMs" ? "mini-logo-grid wide" : "mini-logo-grid";

  const logos = items.map(item => `
    <div class="logo-item" title="${item.name}">
      <img src="${item.logo}" alt="${item.name}"
           onerror="this.onerror=null; const li=this.closest('.logo-item'); li.classList.add('fallback'); if(window.skillsMasonryReflow){window.skillsMasonryReflow();} ">
      <span class="label">${item.name}</span>
    </div>
  `).join("");

  return `
    <div class="${tileClass}">
      <h3>${category}</h3>
      <div class="${gridClass}">
        ${logos}
      </div>
    </div>
  `;
}).join("");

// Mount & Masonry
document.addEventListener("DOMContentLoaded", () => {
  const mount = document.getElementById("expertise-card-container");
  if (mount) {
    mount.innerHTML = ExpertiseDataHTML;
  }
});

/* ===== Masonry row-span helper (packs tiles vertically, prevents overlap) =====
   Requires CSS:
   #expertise-section #expertise-card-container {
     display: grid;
     grid-auto-rows: 8px;  // small unit row
     grid-auto-flow: dense;
   }
*/
function skillsMasonryReflow() {
  const grid = document.querySelector('#expertise-section #expertise-card-container');
  if (!grid) return;

  const rowHeight = parseInt(getComputedStyle(grid).getPropertyValue('grid-auto-rows'), 10);
  const rowGap    = parseInt(getComputedStyle(grid).getPropertyValue('gap'), 10);

  grid.querySelectorAll('.expertise-category-tile').forEach(tile => {
    const h = tile.getBoundingClientRect().height;
    const span = Math.ceil((h + rowGap) / (rowHeight + rowGap));
    tile.style.gridRowEnd = `span ${span}`;
  });
}

// Expose for inline onerror callback, and run at the right times
window.skillsMasonryReflow = skillsMasonryReflow;
window.addEventListener('load', () => {
  skillsMasonryReflow();

  // Reflow when icons load late
  document.querySelectorAll('#expertise-section img').forEach(img => {
    if (!img.complete) img.addEventListener('load', skillsMasonryReflow, { once: true });
  });

  // safety reflow after paint
  setTimeout(skillsMasonryReflow, 60);
});
window.addEventListener('resize', skillsMasonryReflow);
