/* =========================
   CONFIG (edítalo tú)
========================= */
const WHATSAPP_NUMBER_E164 = "50324134747"; // <-- CAMBIA: Ejemplo El Salvador +503 + número (sin +, sin guiones)
const HOTEL_NAME = "La Casa de Mamapán";

/* Mensaje base (se adapta según contexto) */
function buildMessage({ context = "", room = "" } = {}) {
  const lines = [];
  lines.push(`Hola, deseo reservar en *${HOTEL_NAME}*.`);
  if (room) lines.push(`Habitación: *${room}*.`);
  lines.push("¿Me puede compartir disponibilidad y tarifas, por favor?");
  if (context) lines.push(`(Origen: ${context})`);
  return lines.join("\n");
}

function waLink(message) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER_E164}?text=${text}`;
}

/* =========================
   Header behavior
========================= */
const header = document.getElementById("siteHeader");
const topline = document.querySelector(".topline");

function onScroll() {
  const y = window.scrollY || 0;
  header.classList.toggle("header--solid", y > 12);

  // subtle progress line opacity
  if (topline) {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    const pct = max > 0 ? (y / max) : 0;
    topline.style.opacity = String(0.35 + pct * 0.65);
  }
}
window.addEventListener("scroll", onScroll);
onScroll();

/* =========================
   Mobile menu
========================= */
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

function closeMobile() {
  if (!mobileMenu) return;
  mobileMenu.classList.remove("mobile--open");
  mobileMenu.setAttribute("aria-hidden", "true");
  menuBtn?.setAttribute("aria-expanded", "false");
}
function openMobile() {
  if (!mobileMenu) return;
  mobileMenu.classList.add("mobile--open");
  mobileMenu.setAttribute("aria-hidden", "false");
  menuBtn?.setAttribute("aria-expanded", "true");
}

menuBtn?.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.contains("mobile--open");
  isOpen ? closeMobile() : openMobile();
});

document.querySelectorAll(".mobile__link").forEach(a => {
  a.addEventListener("click", () => closeMobile());
});

/* =========================
   Language selector (base visual)
========================= */
const langButtons = document.querySelectorAll(".lang-btn");

function setActiveLanguage(lang) {
  langButtons.forEach((btn) => {
    const isActive = btn.dataset.lang === lang;
    btn.dataset.active = isActive ? "true" : "false";

    const isMobile = btn.closest(".mobile__panel");

    if (isMobile) {
      btn.style.background = isActive ? "rgba(31,111,74,.12)" : "rgba(30,27,22,.05)";
      btn.style.borderColor = isActive ? "rgba(31,111,74,.32)" : "rgba(30,27,22,.10)";
      btn.style.color = "#1E1B16";
    } else {
      btn.style.background = isActive ? "rgba(255,255,255,.24)" : "rgba(255,255,255,.10)";
      btn.style.borderColor = isActive ? "rgba(255,255,255,.40)" : "rgba(255,255,255,.22)";
      btn.style.color = "#fff";
    }
  });

  localStorage.setItem("site_language", lang);
  document.documentElement.setAttribute("lang", lang);
}

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    setActiveLanguage(btn.dataset.lang || "es");
  });
});

const savedLanguage = localStorage.getItem("site_language") || "es";
setActiveLanguage(savedLanguage);

/* =========================
   WhatsApp bindings
========================= */
function bindWhatsAppLinks() {
  // Update display
  const waDisplay = document.getElementById("waDisplay");
  if (waDisplay) {
    waDisplay.textContent = "+" + WHATSAPP_NUMBER_E164.replace(/^(\d{3})/, "$1 ");
  }

  // Global buttons with data-wa-context
  document.querySelectorAll('[data-wa-context]').forEach(el => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const context = el.getAttribute("data-wa-context") || "";
      const room = el.getAttribute("data-wa-room") || "";
      const msg = buildMessage({ context, room });
      window.open(waLink(msg), "_blank", "noopener");
    });
  });

  // Float button
  const waFloat = document.getElementById("waFloat");
  if (waFloat) {
    waFloat.addEventListener("click", (e) => {
      e.preventDefault();
      const context = waFloat.getAttribute("data-wa-context") || "Botón flotante";
      const msg = buildMessage({ context });
      window.open(waLink(msg), "_blank", "noopener");
    });
  }
}
bindWhatsAppLinks();

/* =========================
   Reveal on scroll
========================= */
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal--in");
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll(".reveal").forEach(el => io.observe(el));

/* =========================
   Year
========================= */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());
