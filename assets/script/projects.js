const ProjectsData = [
  {
    name: "Sheffield Council School CatchmentBot (Groq + LLaMA3)",
    logo: "https://play-lh.googleusercontent.com/au3QvRNWZiRamIYLRb0irFPno-xuzSJDzrL1Te0vGx7889ROiOp3Sr7dIByGomFDJpbX=w480-h960-rw",
    description:
      "Built an AI-powered assistant for Sheffield City Council to analyze school catchment zones using geospatial data, Groq-accelerated LLaMA 3, and LangChain agents. Delivered a Streamlit dashboard enabling fairness audits, overlap detection, transport burden classification, and scenario planning through natural language queries.",
    link: "https://github.com/sachin14596/Sheffield-Council-School-CatchmentBot-llm-groq-llama3/blob/main/README.md",
  },
  {
    name: "CrewAI Multi-Agent Blog Post Generator",
    logo: "https://cdn-icons-png.flaticon.com/128/14664/14664511.png",
    description:
      "Developed a multi-agent AI system using CrewAI, Serper API, and GPT-3.5 to automate research-backed blog generation. Designed agents for web research and content writing, integrated error handling via LiteLLM, and deployed a Streamlit UI producing markdown outputs with inline citations.",
    link: "https://github.com/sachin14596/CrewAI-Multi-Agent-Blog-Generator/blob/main/README.md",
  },
  {
    name: "Natural Language SQL Agent (LangGraph + LLaMA 3)",
    logo: "https://cdn-icons-png.flaticon.com/128/1011/1011812.png",
    description:
      "Built an autonomous LLM-powered agent with LangGraph and Groq-accelerated LLaMA 3 that converts natural language queries into SQL with schema understanding, error correction, and retries. Delivered through a Streamlit UI with real-time query execution on SQLite.",
    link: "https://github.com/sachin14596/Natural-Language-SQL-Agent/blob/main/README.md",
  },
  {
    name: "Multimodal Agentic AI Video Summarizer",
    logo: "https://cdn-icons-png.flaticon.com/128/17335/17335144.png",
    description:
      "Developed a Streamlit app using Phidata Agents and Google Gemini 2.0 Flash to analyze and summarize videos through custom natural language queries. Enhanced responses with real-time web search (DuckDuckGo) and delivered an interactive multimodal user experience.",
    link: "https://github.com/sachin14596/Agentic-Video-Summarizer/blob/main/README.md",
  },
  {
    name: "Medical RAG System (Privacy-Focused Healthcare AI)",
    logo: "https://cdn-icons-png.flaticon.com/128/434/434798.png",
    description:
      "Built a locally deployed Retrieval-Augmented Generation (RAG) system for medical case analysis using Bio_ClinicalBERT, all-mpnet-base-v2, Medical-LLaMA3-8B, and Gemma-2-2B. Ensured privacy compliance and robust accuracy through evaluation with Precision@k, Recall@k, BLEU, and ROUGE.",
    link: "https://github.com/sachin14596/Medical-RAG-System/blob/main/README.md",
  },
  {
    name: "Advanced Database – Bank Management System",
    logo: "https://cdn-icons-png.flaticon.com/128/6873/6873405.png",
    description:
      "Designed and implemented a relational database system for banking operations covering customer management, transactions, loans, and compliance. Delivered secure role-based access, optimized query performance with indexing and execution plans, and ensured concurrency control for reliable multi-user transactions.",
    link: "https://github.com/sachin14596/Advanced-Database---Bank-Management-System/blob/main/README.md",
  },
  {
    name: "Cyberbullying Detection with Advanced Data Mining",
    logo: "https://cdn-icons-png.flaticon.com/128/6873/6873405.png",
    description:
      "Applied SVM, Random Forest, Logistic Regression, and K-Means clustering on Kaggle datasets to detect and analyze cyberbullying patterns. Achieved 77% classification accuracy, identified distinct behavioral clusters, and extracted high-lift association rules to enhance online safety.",
    link: "https://github.com/sachin14596/Advanced-Data-Mining-Techniques-in-Cyberbullying-Detection/blob/main/README.md",
  },
  {
    name: "Customer Churn Prediction with Genetic Algorithm Feature Selection",
    logo: "https://cdn-icons-png.flaticon.com/128/6873/6873405.png",
    description:
      "Analyzed IBM telecom dataset with EDA and preprocessing, applying one-point, two-point, and uniform crossover genetic algorithms for feature selection. Used logistic regression for churn prediction and evaluated performance with error bar plots.",
    link: "https://github.com/sachin14596/Customer-Churn-Prediction-Feature-Selection-using-Genetic-Algorithm/blob/main/README.md",
  },
  {
    name: "Big Data & LLM Applications – EDA, ML, and Graph Analytics",
    logo: "https://cdn-icons-png.flaticon.com/128/6873/6873405.png",
    description:
      "Explored the evolution and future of big data with practical applications using the Catch the Pink Flamingo dataset for EDA and ML, and Neo4J for graph analytics. Highlighted the role of big data and LLMs in enabling innovation and data-driven decision-making.",
    link: "https://github.com/sachin14596/Big-Data-Ecosystem/blob/main/README.md",
  },
  {
    name: "Web Social Media Analytics – Sentiment, Graph, and Topic Modeling",
    logo: "https://cdn-icons-png.flaticon.com/128/6873/6873405.png",
    description:
      "Analyzed Twitter, news, and event data using Python for sentiment analysis, classification (SVM, Naïve Bayes, LSTM), and text summarization. Applied graph analytics with NetworkX to study community structures and centrality, uncovering hidden narratives in digital interactions.",
    link: "https://github.com/sachin14596/Web-Social-Media-Analytics-NLP-and-Grpah-Analytics/blob/main/README.md",
  },
  {
    name: "Sales Analytics Dashboard – AtliQ Technologies",
    logo: "https://cdn-icons-png.flaticon.com/128/6873/6873405.png",
    description:
      "Built a Power BI dashboard with SQL-based data cleaning and exploration to analyze revenue, profit margins, and customer performance across markets and zones. Identified COVID-19-driven sales decline, regional profit gaps, and top customers, enabling data-driven growth strategies.",
    link: "https://github.com/sachin14596/Sales-Analysis---AtliQ-Technologies/blob/main/README.md",
  }
];

const ProjectsDataHTML = ProjectsData.map(item => `
  <div class="projects-card">
    <div class="card-body">
      <img loading="lazy" src="${item.logo}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
    </div>
    <div class="card-footer">
      <a class="view" href="${item.link}" title="${item.name}" target="_blank" rel="noopener">View</a>
    </div>
  </div>
`).join("");

document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("projects-track");
  track.innerHTML = ProjectsDataHTML;

  const prev = document.querySelector(".proj-nav.prev");
  const next = document.querySelector(".proj-nav.next");

  // Scroll by ~one page (3 cards) smoothly
  const pageScroll = () => Math.max(1, Math.floor(track.clientWidth * 0.95));

  next.addEventListener("click", () => track.scrollBy({ left:  pageScroll(), behavior: "smooth" }));
  prev.addEventListener("click", () => track.scrollBy({ left: -pageScroll(), behavior: "smooth" }));

  // Convert vertical wheel to horizontal scroll (desktop)
  track.addEventListener("wheel", (e) => {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      track.scrollBy({ left: e.deltaY, behavior: "auto" });
      e.preventDefault();
    }
  }, { passive: false });

  // Drag to scroll
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
});


