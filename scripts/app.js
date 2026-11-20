// Interacciones globales del portafolio (2026): menú, contacto y sección activa.

function menuToggle(forzar) {
  const header = document.getElementById("headerDoc");
  const boton = document.getElementById("menuToggle");
  if (!header || !boton) return;
  const abierto = typeof forzar === "boolean" ? forzar : !header.classList.contains("abierto");
  header.classList.toggle("abierto", abierto);
  boton.setAttribute("aria-expanded", String(abierto));
  boton.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
}

function contact_Open() {
  menuToggle(false);
  const dialogo = document.getElementById("contact-section");
  if (!dialogo) return;
  if (typeof dialogo.showModal === "function") dialogo.showModal();
  else dialogo.setAttribute("open", "");
}

function contact_Close() {
  const dialogo = document.getElementById("contact-section");
  if (!dialogo) return;
  if (typeof dialogo.close === "function") dialogo.close();
  else dialogo.removeAttribute("open");
}

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("headerDoc");
  const dialogo = document.getElementById("contact-section");
  const enlaces = [...document.querySelectorAll("#navDoc a")];

  document.getElementById("menuToggle")?.addEventListener("click", () => menuToggle());
  enlaces.forEach((a) => a.addEventListener("click", () => menuToggle(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") menuToggle(false);
  });

  // Cerrar el contacto al hacer clic fuera de la tarjeta.
  dialogo?.addEventListener("click", (e) => {
    if (e.target === dialogo) contact_Close();
  });

  // Sombra del encabezado al hacer scroll.
  const sombra = () => header?.classList.toggle("con_sombra", window.scrollY > 8);
  sombra();
  window.addEventListener("scroll", sombra, { passive: true });

  // Marca en el menú la sección que se está viendo.
  if ("IntersectionObserver" in window) {
    const secciones = enlaces
      .map((a) => document.querySelector(a.getAttribute("href")))
      .filter(Boolean);
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (!entrada.isIntersecting) return;
          enlaces.forEach((a) => {
            if (a.getAttribute("href") === "#" + entrada.target.id) a.setAttribute("aria-current", "true");
            else a.removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    secciones.forEach((s) => observador.observe(s));
  }
});
