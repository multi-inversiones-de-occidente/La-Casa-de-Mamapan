/* =========================
   CONFIG (edítalo tú)
========================= */
const WHATSAPP_NUMBER_E164 = "50324134747"; // <-- CAMBIA: Ejemplo El Salvador +503 + número (sin +, sin guiones)
const HOTEL_NAME = "Mamapán Signature Journey";

/* =========================
   TRANSLATIONS
========================= */
const translations = {
  es: {
    nav_about: "Sobre Nosotros",
    nav_experiences: "Experiencias",
    nav_rooms: "Habitaciones",
    nav_location: "Ubicación",
    nav_reviews: "Opiniones",
    nav_contact: "Contacto",

    cta_whatsapp: "Reservar por WhatsApp",

    hero_eyebrow: "Bienvenidos a",
    hero_title: "Mamapán Signature Journey",
    hero_subtitle: "From city to forest. An immersive experience in Ahuachapán, Ruta de Las Flores, El Salvador",
    hero_rooms: "Ver Habitaciones",

    charm_title: "Descubre Nuestro Encanto",
    charm_subtitle: "Hospédese con nosotros y viva una experiencia única.",

    highlight_rooms_title: "Habitaciones",
    highlight_rooms_text: "Diseño acogedor, limpieza impecable y confort.",
    highlight_rooms_link: "Ver habitaciones",

    highlight_breakfast_title: "Desayuno Incluido",
    highlight_breakfast_text: "Sabores locales y opciones frescas para empezar perfectamente.",
    highlight_breakfast_link: "Consultar",

    highlight_about_title: "Nosotros",
    highlight_about_text: "Conozca la historia y la esencia que hacen única la experiencia en Mamapán.",
    highlight_about_link: "Conocer más",

    rooms_title: "Nuestras Habitaciones",
    rooms_subtitle: "Descubra las opciones de hospedaje en La Casa de Mamapán y El Bosque de Mamapán.",
    house_title: "La Casa de Mamapán",
    forest_title: "El Bosque de Mamapán",
    badge_house: "La Casa",
    badge_forest: "El Bosque",
    room_single: "Individual",
    room_double: "Doble",
    room_double_deluxe: "Doble Deluxe",
    meta_one_bed: "1 cama",
    meta_two_beds: "2 camas",
    meta_private_bath: "Baño privado",
    meta_more_comfort: "Mayor confort",
    details_btn: "Ver Detalles",
    reserve_btn: "Reservar",
    see_all_rooms: "Ver todas las habitaciones",

    exp_title: "Experiencias",
    exp_subtitle: "Descubra las experiencias que puede vivir tanto en La Casa de Mamapán como en El Bosque de Mamapán.",
    exp_tours: "Tours y Actividades",
    exp_gastronomy: "Gastronomía",
    exp_trails: "Senderos",
    exp_rituals: "Rituales",
    exp_events: "Eventos",
    exp_whatsapp: "Consultar experiencias por WhatsApp",

    reviews_title: "Opiniones de Nuestros Huéspedes",
    reviews_subtitle: "Lo que más nos importa es que su estadía se sienta perfecta.",
    review_1: "Atención increíble, todo limpio y súper acogedor. Volvería sin pensarlo.",
    review_2: "Excelente ubicación, ambiente tranquilo y el desayuno buenísimo.",
    review_3: "Perfecto para descansar, las habitaciones son hermosas y cómodas.",
    more_reviews: "Ver más reseñas",

    locations_title: "Ubicaciones",
    locations_subtitle: "Conozca la ubicación de La Casa de Mamapán y El Bosque de Mamapán.",
    location_house_text: "Ubicación exacta de La Casa de Mamapán para llegar fácilmente desde Google Maps.",
    location_forest_text: "Ubicación exacta de El Bosque de Mamapán para una llegada directa y precisa.",
    open_exact_location: "Abrir ubicación exacta",

    form_title: "Contáctenos",
    form_subtitle: "Déjenos sus datos y su mensaje. Esta sección fue integrada para mantener una estética moderna, elegante y funcional dentro de la experiencia del sitio.",
    form_name: "Nombre",
    form_lastname: "Apellido",
    form_email: "Email",
    form_phone: "Teléfono",
    form_message: "Mensaje",
    form_submit: "Enviar al correo",
    form_name_ph: "Ingrese su nombre",
    form_lastname_ph: "Ingrese su apellido",
    form_email_ph: "Ingrese su email",
    form_phone_ph: "Ingrese su teléfono",
    form_message_ph: "Escriba su mensaje",

    footer_tagline: "Hotel Boutique — más cerca de ti.",
    footer_phone: "Teléfono",
    footer_email: "Correo",
    footer_booking: "Reservaciones",
    footer_hours: "Horario",
    footer_explore: "Explorar",
    footer_bookings: "Reservas",
    footer_book_text: "Reserve rápido y directo con la dueña.",
    footer_rights: "Todos los derechos reservados."
  },

  en: {
    nav_about: "About Us",
    nav_experiences: "Experiences",
    nav_rooms: "Rooms",
    nav_location: "Location",
    nav_reviews: "Reviews",
    nav_contact: "Contact",

    cta_whatsapp: "Book via WhatsApp",

    hero_eyebrow: "Welcome to",
    hero_title: "Mamapán Signature Journey",
    hero_subtitle: "From city to forest. An immersive experience in Ahuachapán, Ruta de Las Flores, El Salvador",
    hero_rooms: "View Rooms",

    charm_title: "Discover Our Charm",
    charm_subtitle: "Stay with us and enjoy a unique experience.",

    highlight_rooms_title: "Elegant Rooms",
    highlight_rooms_text: "Cozy design, impeccable cleanliness, and boutique comfort.",
    highlight_rooms_link: "View rooms",

    highlight_breakfast_title: "Breakfast Included",
    highlight_breakfast_text: "Local flavors and fresh options to start perfectly.",
    highlight_breakfast_link: "Inquire",

    highlight_about_title: "About Us",
    highlight_about_text: "Learn about the history and essence that make La Casa de Mamapán unique.",
    highlight_about_link: "Learn more",

    rooms_title: "Our Rooms",
    rooms_subtitle: "Discover lodging options at La Casa de Mamapán and El Bosque de Mamapán.",
    house_title: "La Casa de Mamapán",
    forest_title: "El Bosque de Mamapán",
    badge_house: "House",
    badge_forest: "Forest",
    room_single: "Single",
    room_double: "Double",
    room_double_deluxe: "Double Deluxe",
    meta_one_bed: "1 bed",
    meta_two_beds: "2 beds",
    meta_private_bath: "Private bathroom",
    meta_more_comfort: "More comfort",
    details_btn: "View Details",
    reserve_btn: "Book",
    see_all_rooms: "See all rooms",

    exp_title: "Experiences",
    exp_subtitle: "Discover the experiences you can enjoy at both La Casa de Mamapán and El Bosque de Mamapán.",
    exp_tours: "Tours & Activities",
    exp_gastronomy: "Gastronomy",
    exp_trails: "Trails",
    exp_rituals: "Rituals",
    exp_events: "Events",
    exp_whatsapp: "Ask about experiences on WhatsApp",

    reviews_title: "Guest Reviews",
    reviews_subtitle: "What matters most to us is that your stay feels perfect.",
    review_1: "Amazing service, everything clean and super cozy. I would definitely come back.",
    review_2: "Excellent location, peaceful atmosphere, and a delicious breakfast.",
    review_3: "Perfect for relaxing, the rooms are beautiful and comfortable.",
    more_reviews: "See more reviews",

    locations_title: "Locations",
    locations_subtitle: "Discover the location of La Casa de Mamapán and El Bosque de Mamapán.",
    location_house_text: "Exact location of La Casa de Mamapán for easy arrival using Google Maps.",
    location_forest_text: "Exact location of El Bosque de Mamapán for a direct and precise arrival.",
    open_exact_location: "Open exact location",

    form_title: "Contact Us",
    form_subtitle: "Leave us your details and message. This section was integrated to maintain a modern, elegant, and functional look within the site experience.",
    form_name: "First Name",
    form_lastname: "Last Name",
    form_email: "Email",
    form_phone: "Phone",
    form_message: "Message",
    form_submit: "Send by email",
    form_name_ph: "Enter your first name",
    form_lastname_ph: "Enter your last name",
    form_email_ph: "Enter your email",
    form_phone_ph: "Enter your phone number",
    form_message_ph: "Write your message",

    footer_tagline: "Boutique Hotel — closer to you.",
    footer_phone: "Phone",
    footer_email: "Email",
    footer_booking: "Bookings",
    footer_hours: "Hours",
    footer_explore: "Explore",
    footer_bookings: "Reservations",
    footer_book_text: "Book quickly and directly with the owner.",
    footer_rights: "All rights reserved."
  }
};

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

  if (header) {
    header.classList.add("header--solid");
  }

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
   Language selector
========================= */
const langButtons = document.querySelectorAll(".lang-btn");

function applyTranslations(lang) {
  const dict = translations[lang] || translations.es;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] !== undefined) {
      el.setAttribute("placeholder", dict[key]);
    }
  });

  document.documentElement.setAttribute("lang", lang);
}

function setActiveLanguage(lang) {
  langButtons.forEach((btn) => {
    const isActive = btn.dataset.lang === lang;
    btn.dataset.active = isActive ? "true" : "false";

    const isMobile = !!btn.closest(".mobile__panel");

    if (isMobile) {
      btn.style.background = isActive ? "rgba(31,111,74,.12)" : "rgba(30,27,22,.05)";
      btn.style.borderColor = isActive ? "rgba(31,111,74,.32)" : "rgba(30,27,22,.10)";
      btn.style.color = "#1E1B16";
    }
  });

  localStorage.setItem("site_language", lang);
  applyTranslations(lang);
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
  const waDisplay = document.getElementById("waDisplay");
  if (waDisplay) {
    waDisplay.textContent = "+" + WHATSAPP_NUMBER_E164.replace(/^(\d{3})/, "$1 ");
  }

  document.querySelectorAll('[data-wa-context]').forEach(el => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const context = el.getAttribute("data-wa-context") || "";
      const room = el.getAttribute("data-wa-room") || "";
      const msg = buildMessage({ context, room });
      window.open(waLink(msg), "_blank", "noopener");
    });
  });

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
