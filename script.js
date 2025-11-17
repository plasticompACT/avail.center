localStorage.clear();
/* === AUTO CLEAR ON LOAD === */
localStorage.clear();
// ===== Extended Model (8 domains × Type A/B with 20 criteria)
const BASE_MODEL = [
  // --- Organizational Domains ---
  { domain: "People & Talent", types: {
    A: { name: "HR Hiring Decisions", items: [
      "Educational background","Relevant work experience","Technical skills","Soft skills (communication, teamwork)","Problem-solving ability","Motivation and engagement","Cultural fit","Leadership potential","Adaptability and learning agility","Integrity and professionalism","References and past performance","Presentation and interview quality","Creativity and innovation potential","Attention to detail","Initiative and proactivity","Availability and timing","Salary expectations vs. budget","Location or mobility readiness","Long-term potential for growth","Overall suitability for the role"
    ]},
    B: { name: "Employee Performance Review", items: [
      "Goal achievement rate","Work quality and accuracy","Productivity and efficiency","Initiative and innovation","Collaboration and teamwork","Communication effectiveness","Leadership and mentoring","Reliability and consistency","Customer or stakeholder feedback","Problem-solving under pressure","Adaptability to change","Professional development effort","Ethical behavior and integrity","Contribution to company culture","Time management","Attendance and punctuality","Project delivery success","Peer and manager feedback","KPI or metric attainment","Overall performance rating"
    ]}
  }},
  { domain: "Organizational & Strategic", types: {
    A: { name: "Project or Strategy Evaluation", items: [
      "Strategic alignment","Market potential","Financial feasibility","Risk level","Time to impact","Stakeholder support","Technological feasibility","Legal or regulatory compliance","Resource availability","Competitive advantage","Scalability potential","Innovation value","Environmental or social impact","Communication clarity","Implementation readiness","Operational efficiency","Measurability of outcomes","Cost-benefit ratio","Long-term sustainability","Overall strategic value"
    ]},
    B: { name: "Supplier or Partner Selection", items: [
      "Technical compliance","Product or service quality","Delivery reliability","Financial stability","Industry reputation","References and past projects","Customer service responsiveness","Scalability and flexibility","Innovation capacity","Compliance with regulations","Ethical and ESG standards","Risk exposure","Warranty and support","Contractual clarity","Communication transparency","Cultural and operational fit","Geographic reach","Price competitiveness","Total cost of ownership","Overall supplier rating"
    ]}
  }},
  { domain: "Financial & Investment", types: {
    A: { name: "Investment Evaluation", items: [
      "Return on investment (ROI)","Net present value (NPV)","Internal rate of return (IRR)","Payback period","Market growth potential","Competitive landscape","Risk profile and volatility","Financial structure and leverage","Management team quality","Business model sustainability","Legal and regulatory exposure","Exit strategy options","Liquidity and cash flow stability","Economic environment sensitivity","ESG and ethical compliance","Technological disruption risk","Operational efficiency","Diversification benefits","Stakeholder alignment","Overall investment attractiveness"
    ]},
    B: { name: "Budget or Funding Allocation", items: [
      "Alignment with strategic goals","Expected ROI or impact","Resource availability","Cost realism and accuracy","Financial transparency","Past performance of budget holder","Risk of overspend","Opportunity cost","Urgency of need","Compliance with funding rules","Accountability mechanisms","Efficiency of use","Long-term sustainability","Social or environmental benefit","Innovation potential","Equity across units or projects","Implementation readiness","Monitoring and reporting plan","Flexibility for adjustment","Overall funding justification"
    ]}
  }},
  { domain: "Innovation & Creativity", types: {
    A: { name: "Idea Evaluation & Feasibility", items: [
      "Originality","Relevance to goals","Problem definition clarity","Solution novelty","Market potential","Feasibility of execution","Resource requirements","Scalability","Time to prototype","Collaboration opportunity","Risk level","Expected impact","Environmental sustainability","Cross-disciplinary value","User experience potential","Ethical considerations","Technical viability","Measurable success criteria","Presentation clarity","Overall innovation strength"
    ]},
    B: { name: "Creative Team Performance", items: [
      "Idea generation frequency","Collaboration quality","Diversity of thinking","Experimentation rate","Feedback culture","Risk-taking comfort","Time allocation for innovation","Leadership support","Cross-functional input","Recognition of creativity","Access to tools and resources","Alignment to strategy","Iteration speed","Learning from failure","Communication of ideas","Team cohesion","Project follow-through","Output quality","Knowledge sharing","Overall creative impact"
    ]}
  }},
  { domain: "Environment & Sustainability", types: {
    A: { name: "Corporate Sustainability Assessment", items: [
      "Carbon footprint","Energy efficiency","Waste management","Water use efficiency","Supplier sustainability","Product lifecycle impact","Recycling rates","Packaging reduction","ESG policy strength","Employee awareness","Transportation impact","Office energy initiatives","Sustainable procurement","Offsetting programs","Renewable energy share","Regulatory compliance","Transparency in reporting","Community engagement","Innovation in green practices","Overall sustainability score"
    ]},
    B: { name: "Environmental Project Evaluation", items: [
      "Ecological impact","Feasibility of implementation","Long-term benefits","Community involvement","Cost efficiency","Risk management","Stakeholder support","Data accuracy and baseline","Legal compliance","Innovation potential","Scalability","Monitoring plan","Funding sustainability","Education and outreach","Biodiversity impact","Resource efficiency","Social equity considerations","Partnership quality","Communication effectiveness","Overall environmental value"
    ]}
  }},

  // --- Personal Domains ---
  { domain: "Health & Wellbeing", types: {
    A: { name: "Personal Health Goals & Lifestyle Choices", items: [
      "Physical activity consistency","Nutrition balance","Sleep quality","Stress management","Work-life balance","Mental health awareness","Social connections","Emotional resilience","Rest and recovery habits","Hydration and diet variety","Preventive checkups","Self-discipline in habits","Substance moderation","Adaptability to change","Goal clarity and tracking","Mindfulness practice","Hobbies and joyful activities","Time outdoors / nature","Family and support system","Overall wellbeing score"
    ]},
    B: { name: "Workplace Wellness Programs", items: [
      "Program participation rate","Diversity of offerings","Psychological safety","Ergonomic support","Flexibility policies","Burnout prevention","Leadership role-modeling","Inclusivity of activities","Budget allocation","Communication and awareness","Measurable impact on health","Accessibility for all employees","Manager support training","Feedback loop quality","Vendor partnerships","Incentive alignment","Data privacy in wellness metrics","Continuous improvement plans","Integration with HR systems","Overall program effectiveness"
    ]}
  }},
  { domain: "Learning & Development", types: {
    A: { name: "Individual Skill Growth", items: [
      "Relevance to career goals","Time investment required","Learning method fit (style)","Mentor availability","Feedback mechanisms","Knowledge retention","Practical application","Skill transferability","Confidence gain","Peer learning opportunities","Alignment with current projects","Access to resources","Consistency of practice","Certification value","Cost vs benefit","Adaptability of curriculum","Motivation to continue","Recognition for progress","Measured outcomes","Overall learning impact"
    ]},
    B: { name: "Organizational Training Programs", items: [
      "Alignment with strategic needs","Participation rate","Trainer quality","Content relevance","Platform usability","Completion rates","Cost effectiveness","Post-training application","Manager involvement","Employee feedback","Accessibility and inclusivity","Frequency and cadence","Integration with HR systems","Learning analytics usage","Follow-up mechanisms","ROI measurement","Knowledge sharing culture","Innovation stimulus","Scalability across departments","Long-term capability building"
    ]}
  }},
  { domain: "Community & Social Impact", types: {
    A: { name: "CSR Project Evaluation", items: [
      "Alignment with mission","Beneficiary reach","Measurable outcomes","Stakeholder involvement","Resource allocation","Long-term sustainability","Social equity focus","Inclusivity","Transparency","Volunteer engagement","Impact tracking","Media visibility","Innovation in approach","Cost efficiency","Partnership strength","Local community feedback","Ethical standards","Risk assessment","Knowledge transfer","Overall social value"
    ]},
    B: { name: "Non-profit Program Performance", items: [
      "Clarity of objectives","Funding efficiency","Volunteer retention","Program reach","Community partnerships","Beneficiary feedback","Outcome measurement","Innovation capacity","Transparency in reporting","Staff competence","Donor satisfaction","Governance quality","Adaptability","Collaboration with others","Resource management","Sustainability of impact","Policy alignment","Public perception","Replication potential","Overall program effectiveness"
    ]}
  }}

  ,
  { domain: "Real Estate", types: {
    A: { name: "Property Purchase Decision", items: [
      "Location quality","Neighborhood safety","Price vs market","Structural condition",
      "Maintenance history","Legal title clarity","Zoning compliance","Construction quality",
      "Energy efficiency","Natural light & ventilation","Noise levels","Infrastructure & transport",
      "Nearby amenities","Future development outlook","Tax & fees impact",
      "Resale potential","Rental yield potential","Total cost of ownership",
      "Fit to requirements","Overall assessment"
    ]},
    B: { name: "Property Rental Decision", items: [
      "Location suitability","Safety of area","Rent vs market","Condition of property",
      "Maintenance responsiveness","Landlord reliability","Privacy level","Security features",
      "Contract clarity","Deposit fairness","Noise environment","Transport connections",
      "Amenities distance","Building age","Energy efficiency","Flexibility of contract",
      "Utility costs","Internet quality","Fit to needs","Overall assessment"
    ]}
  }},
  { domain: "Procurement", types: {
    A: { name: "Procurement Decision", items: [
      "Compliance with specifications","Product/service quality","Supplier reliability",
      "Delivery time capability","Technical support","Supplier reputation","Past performance",
      "Scalability","Warranty conditions","Contract clarity","Risk management","ESG responsibility",
      "Innovation potential","Financial stability","Communication responsiveness","Transparency",
      "Total cost of ownership","Price competitiveness","Compatibility","Overall value"
    ]},
    B: { name: "Supplier Performance Review", items: [
      "Quality consistency","Timeliness of delivery","Accuracy of orders","Responsiveness",
      "Support quality","Innovation contribution","Compliance adherence","Risk behavior",
      "Flexibility","Cost performance","Relationship quality","Process transparency",
      "Documentation quality","Capability growth","Sustainability alignment",
      "Contract fulfillment","Communication clarity","Escalation handling","Reliability","Overall performance"
    ]}
  }},
  { domain: "Skills", types: {
    A: { name: "Skills Assessment", items: [
      "Technical expertise","Problem-solving","Communication","Teamwork","Creativity",
      "Adaptability","Learning agility","Accuracy","Speed","Confidence",
      "Autonomy","Planning","Prioritization","Stakeholder management","Leadership",
      "Stress tolerance","Decision quality","Professionalism","Knowledge breadth","Overall skill rating"
    ]},
    B: { name: "Skill Development Needs", items: [
      "Gap criticality","Learning priority","Role relevance","Impact potential","Difficulty level",
      "Training urgency","Resource availability","Time feasibility","Mentor support","Practice opportunity",
      "Transferability","Retention likelihood","Motivation fit","Confidence growth","Peer learning potential",
      "Certification value","Progress measurability","Expected ROI","Career alignment","Overall priority"
    ]}
  }},
  { domain: "Performance", types: {
    A: { name: "Job Performance Review", items: [
      "Goal achievement","Work quality","Productivity","Initiative","Teamwork","Communication",
      "Leadership","Reliability","Customer feedback","Problem-solving","Adaptability",
      "Time management","Professional growth","Ethics","Innovation","Attendance",
      "Project success","KPI results","Peer feedback","Overall performance"
    ]},
    B: { name: "Sports Performance Evaluation", items: [
      "Physical condition","Strength","Agility","Speed","Endurance","Technique",
      "Tactical understanding","Consistency","Injury prevention","Discipline",
      "Team contribution","Focus","Motivation","Recovery","Execution quality",
      "Competition results","Training intensity","Coachability","Adaptability","Overall performance"
    ]}
  }}

]; // Grouping metadata
const GROUPS = {
  "Organizational Domains": [
    "People & Talent",
    "Organizational & Strategic",
    "Financial & Investment",
    "Innovation & Creativity",
    "Environment & Sustainability",
    "Community & Social Impact",
    "Procurement",
    "Performance"
  ],
  "Personal Domains": [
    "Health & Wellbeing",
    "Learning & Development",
    "Skills"
  ],
  "Market & Assets": [
    "Real Estate"
  ]
};

// ===== State & Persistence
const LS_KEY = "avail_v7_state";
function loadState(){ try { return JSON.parse(localStorage.getItem(LS_KEY) || "{}"); } catch { return {}; } }
function saveState(state){ localStorage.setItem(LS_KEY, JSON.stringify(state)); }
const state = loadState(); // { [domain__type]: { optionNames, questions, values } }
function scenarioKey(domain, type){ return `${domain}__${type}`; }

// ===== Utilities
function optionColor(i, alpha=0.15){ const hue = (i * 137) % 360; return { stroke: `hsl(${hue} 50% 45%)`, fill: `hsla(${hue} 60% 50% / ${alpha})` }; }
function deepClone(x){ return JSON.parse(JSON.stringify(x)); }
function findDomain(name){ return BASE_MODEL.find(d=>d.domain===name); }
function isPersonalDomain(name){ return GROUPS["Personal Domains"].includes(name); }

// ===== DOM
const select = document.getElementById("domainSelect");
const typeRadios = document.getElementById("typeRadios");
const optionNamesRoot = document.getElementById("optionNames");
const questionsRoot = document.getElementById("questions");
const addOptionBtn = document.getElementById("addOption");
const removeOptionBtn = document.getElementById("removeOption");
const addQuestionBtn = document.getElementById("addQuestion");
const removeQuestionBtn = document.getElementById("removeQuestion");
const btnPng = document.getElementById("btnPng");
const btnPdf = document.getElementById("btnPdf");
const categoryHint = document.getElementById("categoryHint");

// Build grouped dropdown
function buildDropdown(){
  select.innerHTML = `<option value="">– choose –</option>`;
  for(const [group, domains] of Object.entries(GROUPS)){
    const og = document.createElement("optgroup");
    og.label = group;
    domains.forEach(name => {
      const opt = document.createElement("option");
      opt.value = name;
      opt.textContent = name;
      og.appendChild(opt);
    });
    select.appendChild(og);
  }
}
buildDropdown();

// ===== Charts (mobile + desktop)
function makeChart(id){
  const ctx = document.getElementById(id)?.getContext("2d");
  if(!ctx) return null;
  return new Chart(ctx, {
    type:"radar",
    data:{ labels:[], datasets:[] },
    options:{
      responsive:true, maintainAspectRatio:false,
      scales:{ r:{ beginAtZero:true, min:0, max:10, ticks:{ stepSize:2 }, grid:{ circular:true, color:"rgba(0,0,0,0.08)"}, angleLines:{color:"rgba(0,0,0,0.08)"}, pointLabels:{font:{size:12}} } },
      plugins:{ legend:{ position:"bottom" } },
      animation:{ duration:220, easing:"easeOutQuad" }
    }
  });
}
const chartMob = makeChart("radar-mobile");
const chartDesk = makeChart("radar-desktop");
const overlayMob = document.getElementById("overlay-mob");
const overlayDesk = document.getElementById("overlay-desk");

function updateCharts(labels, datasets){
  [chartMob, chartDesk].forEach(ch => {
    if(!ch) return;
    ch.data.labels = labels;
    ch.data.datasets = datasets;
    ch.update();
  });
}
function updateLegendLabels(optionNames){
  [chartMob, chartDesk].forEach(ch => {
    ch?.data?.datasets?.forEach((ds, i) => ds.label = optionNames[i] || ds.label);
    ch?.update();
  });
}

// ===== Current selection
let currentDomain = null;
let currentType = null;

// Scenario state helpers
function getScenarioState(){
  if(!currentDomain || !currentType) return null;
  const key = scenarioKey(currentDomain, currentType);
  if(!state[key]){
    const base = findDomain(currentDomain)?.types?.[currentType]?.items || [];
    state[key] = {
      optionNames: ["Option A","Option B","Option C"],
      questions: deepClone(base),
      values: Array.from({length: 3}, () => new Array(base.length).fill(5))
    };
    saveState(state);
  }
  return state[key];
}
function setScenarioState(partial){
  const key = scenarioKey(currentDomain, currentType);
  state[key] = Object.assign({}, getScenarioState(), partial);
  saveState(state);
}

// Render category hint line
function renderCategoryHint(){
  if(!currentDomain){
    categoryHint.textContent = "My avail is about …";
    categoryHint.style.opacity = 0.9;
    return;
  }
  const isPers = isPersonalDomain(currentDomain);
  categoryHint.textContent = isPers ? "My avail is about …" : "My avail is about …";
  categoryHint.style.opacity = 0.95;
  categoryHint.style.color = isPers ? "#9f7f88" : "#8a7a66"; // subtle rose/brown
}

// Render type radios
function renderTypeRadios(domainName){
  typeRadios.innerHTML = "";
  const dom = findDomain(domainName);
  if(!dom) return;
  const entries = [
    {key:"A", label: dom.types.A.name},
    {key:"B", label: dom.types.B.name}
  ];
  entries.forEach((t) => {
    const id = "type-" + t.key;
    const row = document.createElement("label");
    row.className = "flex items-center gap-2 cursor-pointer mb-2";
    row.innerHTML = `<input type="radio" name="scenarioType" id="${id}" value="${t.key}" class="accent-[#B06A77]"><span>${t.label}</span>`;
    typeRadios.appendChild(row);
  });
  typeRadios.querySelectorAll("input[type='radio']").forEach(r => {
    r.addEventListener("change", () => {
      currentType = r.value;
      renderScenario();
    });
  });
}

function renderOptionInputs(s){
  optionNamesRoot.innerHTML = "";
  s.optionNames.forEach((name, idx) => {
    const wrap = document.createElement("div");
    wrap.className = "flex items-center gap-2";
    const color = optionColor(idx, 0.25);
    wrap.innerHTML = `
      <div class="h-4 w-4 rounded-full" style="background:${color.stroke}"></div>
      <input type="text" class="border rounded-lg px-2 py-1 w-full" value="${name}" data-idx="${idx}" />
    `;
    optionNamesRoot.appendChild(wrap);
  });
  optionNamesRoot.querySelectorAll("input[type='text']").forEach(inp => {
    inp.addEventListener("input", () => {
      const i = +inp.dataset.idx;
      s.optionNames[i] = inp.value || `Option ${String.fromCharCode(65+i)}`;
      setScenarioState({ optionNames: s.optionNames });
      updateLegendLabels(s.optionNames);
    });
  });
}

function buildDatasets(s){
  return s.optionNames.map((name, i) => {
    const col = optionColor(i);
    return {
      label: name,
      data: s.values[i].slice(),
      borderColor: col.stroke,
      backgroundColor: col.fill,
      pointRadius: 3,
      pointHoverRadius: 5,
      tension: 0.2
    };
  });
}

function renderQuestions(s){
  questionsRoot.innerHTML = "";
  s.questions.forEach((criterion, qIdx) => {
    const card = document.createElement("div");
    card.className = "card criteria-card p-2";
    const labelDiv = document.createElement("div");
    labelDiv.className = "text-xl font-semibold headline mb-2 editable";
    labelDiv.contentEditable = "true";
    labelDiv.textContent = criterion;
    card.appendChild(labelDiv);

    const hint = document.createElement("p");
    hint.className = "italic text-slate-600 mb-4";
    hint.textContent = "Edit label above. Rate each option 0–10.";
    card.appendChild(hint);

    const grid = document.createElement("div");
    grid.className = "grid grid-cols-1 md:grid-cols-3 gap-1.5 text-sm";
    s.optionNames.forEach((name, oIdx) => {
      const col = optionColor(oIdx);
      const box = document.createElement("div");
      box.className = "p-3 rounded-xl border border-black/5 bg-white/70";
      box.innerHTML = `
        <label class="block text-sm text-slate-700 mb-1">${name}: <span id="val-${oIdx}-${qIdx}" class="font-semibold">${s.values[oIdx][qIdx]}</span></label>
        <input id="sl-${oIdx}-${qIdx}" type="range" min="0" max="10" value="${s.values[oIdx][qIdx]}" step="1" class="slider w-full" style="accent-color:${col.stroke}">
      `;
      grid.appendChild(box);
    });
    card.appendChild(grid);
    questionsRoot.appendChild(card);

    // Persist label edits
    labelDiv.addEventListener("input", () => {
      s.questions[qIdx] = labelDiv.textContent.trim() || `Criterion ${qIdx+1}`;
      setScenarioState({ questions: s.questions });
      updateCharts(s.questions, buildDatasets(s));
    });

    // Slider events
    s.optionNames.forEach((_, oIdx) => {
      const sl = card.querySelector(`#sl-${oIdx}-${qIdx}`);
      const val = card.querySelector(`#val-${oIdx}-${qIdx}`);
      sl.addEventListener("input", () => {
        s.values[oIdx][qIdx] = +sl.value;
        val.textContent = sl.value;
        setScenarioState({ values: s.values });
        [chartMob, chartDesk].forEach(ch => {
          ch.data.datasets[oIdx].data[qIdx] = +sl.value;
          ch.update();
        });
      });
    });
  });
}

function renderScenario(){
  renderCategoryHint();
  const s = getScenarioState();
  if(!s){
    updateCharts([], []);
    overlayMob.style.opacity = 1;
    overlayMob.style.transition = "opacity 0.5s ease";
    overlayMob.classList.remove("hidden");
    overlayDesk.style.opacity = 1;
    overlayDesk.style.transition = "opacity 0.5s ease";
    overlayDesk.classList.remove("hidden");
    return;
  }
  overlayMob.style.opacity = 0;
    setTimeout(() => overlayMob.classList.add("hidden"), 500);
  overlayDesk.style.opacity = 0;
    setTimeout(() => overlayDesk.classList.add("hidden"), 500);

  renderOptionInputs(s);
  renderQuestions(s);
  const datasets = buildDatasets(s);
  updateCharts(s.questions, datasets);
}

// ===== Buttons: add/remove options & questions
document.getElementById("addOption").addEventListener("click", () => {
  const s = getScenarioState(); if(!s) return;
  const newIdx = s.optionNames.length;
  s.optionNames.push(`Option ${String.fromCharCode(65+newIdx)}`);
  s.values.push(new Array(s.questions.length).fill(5));
  setScenarioState({ optionNames: s.optionNames, values: s.values });
  renderScenario();
});
document.getElementById("removeOption").addEventListener("click", () => {
  const s = getScenarioState(); if(!s) return;
  if(s.optionNames.length <= 1) return;
  s.optionNames.pop();
  s.values.pop();
  setScenarioState({ optionNames: s.optionNames, values: s.values });
  renderScenario();
});
document.getElementById("addQuestion").addEventListener("click", () => {
  const s = getScenarioState(); if(!s) return;
  const newLabel = `New criterion ${s.questions.length+1}`;
  s.questions.push(newLabel);
  s.values.forEach(row => row.push(5));
  setScenarioState({ questions: s.questions, values: s.values });
  renderScenario();
});
document.getElementById("removeQuestion").addEventListener("click", () => {
  const s = getScenarioState(); if(!s) return;
  if(s.questions.length <= 1) return;
  s.questions.pop();
  s.values.forEach(row => row.pop());
  setScenarioState({ questions: s.questions, values: s.values });
  renderScenario();
});

// ===== Export
function currentChart(){ return (window.innerWidth >= 1024) ? chartDesk : chartMob; }
document.getElementById("btnPng").addEventListener("click", () => {
  const ch = currentChart();
  const url = ch?.toBase64Image("image/png", 1.0);
  if(!url) return;
  const a = document.createElement("a");
  const date = new Date().toISOString().split("T")[0];
  const domTxt = currentDomain || "domain";
  const typeTxt = currentType || "type";
  a.href = url;
  a.download = `avail_${domTxt}_${typeTxt}_${date}.png`;
  a.click();
});
// Wire domain select
select.addEventListener("change", () => {
  currentDomain = select.value || null;
  currentType = null;
  renderTypeRadios(currentDomain);
  renderScenario();
});

// Kick off
renderScenario();


// === Hard override: branded red header ===
function exportPNGRed(){
  const ch = currentChart();
  if(!ch) return;
  const chartImg = ch.canvas.toDataURL("image/png");

  const headerH = 100;
  const w = ch.canvas.width;
  const h = ch.canvas.height + headerH;

  const cnv = document.createElement("canvas");
  cnv.width = w;
  cnv.height = h;
  const ctx = cnv.getContext("2d");

  ctx.fillStyle = "#de0707";
  ctx.fillRect(0,0,w,headerH);

  ctx.fillStyle = "white";
  ctx.font = "bold 40px Space Grotesk, sans-serif";
  ctx.fillText("avail.center", 30, 60);

  const img = new Image();
  img.onload = () => {
    ctx.drawImage(img,0,headerH);
    const url = cnv.toDataURL("image/png");
    const a = document.createElement("a");
    const d = new Date().toISOString().split("T")[0];
    a.href = url;
    a.download = `avail_${currentDomain||"domain"}_${currentType||"type"}_${d}.png`;
    a.click();
  };
  img.src = chartImg;
}

function exportPDFRed(){
  if(!currentDomain || !currentType) return;
  const s = getScenarioState();
  const d = new Date().toISOString().split("T")[0];
  const ch = currentChart();
  const chartImg = ch.canvas.toDataURL("image/png");
  const { jsPDF } = window.jspdf;

  const pdf = new jsPDF({unit:"pt", format:"a4"});
  const pageWidth = pdf.internal.pageSize.getWidth();

  pdf.setFillColor(222,7,7);
  pdf.rect(0,0,pageWidth,70,"F");

  pdf.setTextColor(255,255,255);
  pdf.setFontSize(28);
  pdf.text("avail.center", 30, 45);

  let y = 90;
  pdf.setTextColor(0,0,0);
  pdf.setFont("helvetica","bold");
  pdf.setFontSize(14);
  pdf.text(`Domain: ${currentDomain}`, 40, y);
  y+=18;
  pdf.text(`Type: ${ findDomain(currentDomain).types[currentType].name }`, 40, y);
  y+=18;
  pdf.setFontSize(10);
  pdf.text(`Date: ${d}`, 40, y);
  y+=20;

  const imgSize = Math.min(pageWidth-80, 380);
  const cx = (pageWidth-imgSize)/2;
  pdf.addImage(chartImg,"PNG",cx,y,imgSize,imgSize);
  y+=imgSize+20;

  const headers = ["Criterion", ...s.optionNames];
  const rows = s.questions.map((q,i)=>[q, ...s.values.map(col=>col[i])]);

  let x=40; const colW=(pageWidth-80)/headers.length;
  pdf.setFont("helvetica","bold");
  pdf.setFontSize(9);
  headers.forEach(h=>{ pdf.text(String(h),x,y); x+=colW; });
  y+=12;

  pdf.setFont("helvetica","normal");
  rows.forEach(row=>{
    x=40;
    row.forEach(cell=>{
      const split = pdf.splitTextToSize(String(cell), colW-6);
      pdf.text(split,x,y,{maxWidth:colW-6});
      x+=colW;
    });
    y+=12;
    if(y > pdf.internal.pageSize.getHeight()-40){
      pdf.addPage();
      y=40;
    }
  });

  pdf.save(`avail_${currentDomain}_${currentType}_${d}.pdf`);
}


// === Paywall: plastico code ===
function validatePlastico(code) {
  if (!/^\d{8}$/.test(code)) return false;
  const digits = code.split("").map(Number);
  const sum = digits.slice(0, 7).reduce((a, b) => a + b, 0);
  const checksum = sum % 10;
  return digits[7] === checksum;
}

const paywallModal = document.getElementById("paywallModal");
const plasticoInput = document.getElementById("plasticoInput");
const plasticoError = document.getElementById("plasticoError");
const plasticoCancel = document.getElementById("plasticoCancel");
const plasticoVerify = document.getElementById("plasticoVerify");

function openPaywall() {
  // Force paywall always; no fallback export here.
  if (!paywallModal) {
    return;
  }
  plasticoInput.value = "";
  plasticoError.classList.add("hidden");
  paywallModal.classList.remove("hidden");
  paywallModal.classList.add("flex");
}

function closePaywall() {
  if (!paywallModal) return;
  paywallModal.classList.add("hidden");
  paywallModal.classList.remove("flex");
}

if (plasticoCancel) {
  plasticoCancel.addEventListener("click", () => {
    closePaywall();
  });
}

if (plasticoVerify) {
  plasticoVerify.addEventListener("click", () => {
    const code = plasticoInput.value.trim();
    if (!validatePlastico(code)) {
      plasticoError.classList.remove("hidden");
      return;
    }
    closePaywall();
    exportPDFRed(); // one-time export per successful code, no timer, no unlock memory
  });
}

// Wire exports with paywall for PDF
btnPng.onclick = exportPNGRed;
btnPdf.onclick = () => {
  openPaywall();
};

// === RESET BUTTON ===
const resetBtn = document.getElementById("resetBtn");
if (resetBtn) {
  resetBtn.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
  });
}

// === Align reset button to same height as export buttons ===
function alignResetToExport(){
  const reset = document.getElementById("resetBtn");
  const pdf = document.getElementById("btnPdf");
  if(reset && pdf){
     const r = pdf.getBoundingClientRect();
     reset.style.top = r.top + "px";
  }
}
window.addEventListener("load", alignResetToExport);
window.addEventListener("resize", alignResetToExport);

// Reset logic
document.addEventListener("DOMContentLoaded", () => {
  const r=document.getElementById("resetBtn");
  if(r){ r.onclick=()=>{ localStorage.clear(); location.reload(); }; }
});

// Auto clear
localStorage.clear();



const paypalBtn = document.getElementById("paypalBtn");
if (paypalBtn) {
  paypalBtn.addEventListener("click", () => {
    alert("PayPal payment coming soon.");
  });
}



const stripeBtn = document.getElementById("stripeBtn");
if (stripeBtn) {
  stripeBtn.addEventListener("click", () => {
    alert("Stripe payment coming soon.");
  });
}

// === Company License Modal ===
const companyLicenseModal=document.getElementById("companyLicenseModal");
const companyLicenseBtn=document.getElementById("companyLicenseBtn");
const companyPlasticoInput=document.getElementById("companyPlasticoInput");
const companyPlasticoError=document.getElementById("companyPlasticoError");
const companyPlasticoCancel=document.getElementById("companyPlasticoCancel");
const companyPlasticoVerify=document.getElementById("companyPlasticoVerify");
if(companyLicenseBtn) companyLicenseBtn.onclick=()=>{companyLicenseModal.classList.add("flex");companyLicenseModal.classList.remove("hidden");};
if(companyPlasticoCancel) companyPlasticoCancel.onclick=()=>{companyLicenseModal.classList.add("hidden");companyLicenseModal.classList.remove("flex");};
