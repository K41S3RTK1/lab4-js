const STORAGE_KEY = "disciapp_state_v1";

const XP_BY_DIFFICULTY = {
  "Fácil": 10,
  "Normal": 25,
  "Difícil": 50,
};

function getRank(globalXp) {
  if (globalXp < 50) return "Normal";
  if (globalXp < 120) return "Disciplinado";
  return "Legendario";
}

function safeTrim(value) {
  return String(value || "").trim();
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { missions: [] };
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.missions)) return { missions: [] };
    return parsed;
  } catch {
    return { missions: [] };
  }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function computeGlobalXp(missions) {
  return missions
    .filter((m) => m.status === "SUCCESFUL")
    .reduce((sum, m) => sum + (m.xp || 0), 0);
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = String(value);
}

function setChipActive(activeId) {
  const ids = ["filterAll", "filterPending", "filterDone"];
  ids.forEach((id) => {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.classList.toggle("chip-active", id === activeId);
  });
}

function createMission({ name, description, difficulty }) {
  const mission = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    name,
    description,
    difficulty,
    xp: XP_BY_DIFFICULTY[difficulty] ?? 0,
    status: "PENDING",
    createdAt: new Date().toISOString(),
    completedAt: null,
  };

  console.log("Misión creada:", mission);

  return mission;
}

function renderMissions(state, filter) {
  const list = document.getElementById("missionsList");
  const empty = document.getElementById("emptyState");
  if (!list || !empty) return;

  list.innerHTML = "";

  const missionsToShow = state.missions.filter((m) => {
    if (filter === "PENDING") return m.status !== "SUCCESFUL";
    if (filter === "DONE") return m.status === "SUCCESFUL";
    return true;
  });

  empty.style.display = missionsToShow.length === 0 ? "block" : "none";

  missionsToShow.forEach((mission) => {
    const li = document.createElement("li");
    li.className = "mission";

    const top = document.createElement("div");
    top.className = "mission-top";

    const title = document.createElement("h3");
    title.className = "mission-title";
    title.textContent = mission.name;

    const badges = document.createElement("div");
    badges.className = "badges";

    const b1 = document.createElement("span");
    b1.className = "badge";
    b1.textContent = mission.difficulty;

    const b2 = document.createElement("span");
    b2.className = "badge badge-strong";
    b2.textContent = `${mission.xp} XP`;

    const b3 = document.createElement("span");
    b3.className = "badge";
    b3.textContent = mission.status;

    badges.appendChild(b1);
    badges.appendChild(b2);
    badges.appendChild(b3);

    top.appendChild(title);
    top.appendChild(badges);

    const desc = document.createElement("p");
    desc.className = "mission-desc";
    desc.textContent = mission.description;

    const actions = document.createElement("div");
    actions.className = "mission-actions";

    const btn = document.createElement("button");
    btn.className = "btn btn-small";
    btn.type = "button";

    if (mission.status === "SUCCESFUL") {
      btn.textContent = "Completada";
      btn.classList.add("btn-disabled");
      btn.disabled = true;
    } else {
      btn.textContent = "Marcar como terminada";
      btn.addEventListener("click", () => {
        markMissionSuccessful(state, mission.id);
      });
    }

    actions.appendChild(btn);

    li.appendChild(top);
    li.appendChild(desc);
    li.appendChild(actions);

    list.appendChild(li);
  });
}

function updateStats(state) {
  const globalXp = computeGlobalXp(state.missions);
  setText("globalXp", globalXp);
  setText("rank", getRank(globalXp));
}

function markMissionSuccessful(state, missionId) {
  const idx = state.missions.findIndex((m) => m.id === missionId);
  if (idx === -1) return;

  const mission = state.missions[idx];
  if (mission.status === "SUCCESFUL") return;

  mission.status = "SUCCESFUL";
  mission.completedAt = new Date().toISOString();

  saveState(state);
  updateStats(state);
  renderMissions(state, currentFilter);
}

let state = loadState();
let currentFilter = "ALL";

function wireUI() {
  const form = document.getElementById("missionForm");
  const nameEl = document.getElementById("name");
  const descEl = document.getElementById("description");
  const diffEl = document.getElementById("difficulty");

  const resetBtn = document.getElementById("resetAll");

  const fAll = document.getElementById("filterAll");
  const fPending = document.getElementById("filterPending");
  const fDone = document.getElementById("filterDone");

  if (form && nameEl && descEl && diffEl) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = safeTrim(nameEl.value);
      const description = safeTrim(descEl.value);
      const difficulty = diffEl.value;

      if (!name || !description) return;

      const mission = createMission({ name, description, difficulty });
      state.missions.unshift(mission);

      saveState(state);
      updateStats(state);
      renderMissions(state, currentFilter);

      form.reset();
      diffEl.value = "Fácil";
      nameEl.focus();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      const ok = confirm("¿Seguro que quieres reiniciar todo? Se borrarán misiones y XP.");
      if (!ok) return;

      state.missions = [];
      localStorage.removeItem(STORAGE_KEY);

      currentFilter = "ALL";
      setChipActive("filterAll");
      updateStats(state);
      renderMissions(state, currentFilter);
    });
  }

  if (fAll) {
    fAll.addEventListener("click", () => {
      currentFilter = "ALL";
      setChipActive("filterAll");
      renderMissions(state, currentFilter);
    });
  }

  if (fPending) {
    fPending.addEventListener("click", () => {
      currentFilter = "PENDING";
      setChipActive("filterPending");
      renderMissions(state, currentFilter);
    });
  }

  if (fDone) {
    fDone.addEventListener("click", () => {
      currentFilter = "DONE";
      setChipActive("filterDone");
      renderMissions(state, currentFilter);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  wireUI();
  setChipActive("filterAll");
  updateStats(state);
  renderMissions(state, currentFilter);
});