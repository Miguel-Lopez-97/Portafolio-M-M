// Sitios web en los que ha trabajado Miguel.
// Para agregar un sitio: añade un objeto a SITIOS y sus capturas en media/images/Sitios/<id>-desktop.webp y <id>-movil.webp.
//   tipo:  "landing" | "completo" | "rediseno"
//   rol:   "montaje" | "rediseno" | "propio"
//   tec:   "wordpress" | "aem" | "codigo"   (para el filtro)

const SITIOS = [
  // 2026
  { id: "migracion", nombre: "Entendiendo la Migraña", sector: "Salud", anio: 2026, tipo: "completo", rol: "montaje", tec: "aem",
    stack: ["Adobe Experience Manager"], tamano: "Sitio completo",
    url: "https://www.xn--entendiendolamigraa-d4b.com/", dominio: "entendiendolamigraña.com" },
  { id: "ganaderia", nombre: "Ganadería Colombia", sector: "Agro", anio: 2026, tipo: "completo", rol: "propio", tec: "codigo",
    stack: ["Astro", "Cloudflare", "GTM"], tamano: "40 páginas · blog y calendario de ferias",
    url: "https://ganaderiacolombia.com/", dominio: "ganaderiacolombia.com" },
  { id: "t4", nombre: "T4 · Inversiones", sector: "Inversión y franquicias", anio: 2026, tipo: "landing", rol: "montaje", tec: "wordpress",
    stack: ["WordPress", "Elementor", "Slider Revolution"], tamano: "Landing",
    url: "https://t4colombia.com/inversiones/", dominio: "t4colombia.com/inversiones" },
  { id: "brenzza", nombre: "Brenzza", sector: "Estudio creativo", anio: 2026, tipo: "landing", rol: "montaje", tec: "wordpress",
    stack: ["WordPress", "Elementor"], tamano: "Landing",
    url: "https://brenzza.co/", dominio: "brenzza.co" },
  { id: "corazondelasierra", nombre: "Corazón de la Sierra", sector: "Bienestar", anio: 2026, tipo: "landing", rol: "montaje", tec: "wordpress",
    stack: ["WordPress", "Elementor"], tamano: "Landing",
    url: "https://corazondelasierra.com.co/", dominio: "corazondelasierra.com.co" },

  // 2025
  { id: "uce", nombre: "Universidad Central del Este", sector: "Educación superior · República Dominicana", anio: 2025, tipo: "completo", rol: "montaje", tec: "wordpress",
    stack: ["WordPress", "Elementor"], tamano: "181 páginas · 52 entradas",
    url: "https://www.uce.edu.do/", dominio: "uce.edu.do" },
  { id: "rubica", nombre: "RUBICA", sector: "Comunicación y marketing", anio: 2025, tipo: "completo", rol: "montaje", tec: "wordpress",
    stack: ["WordPress", "Elementor", "WooCommerce"], tamano: "32 páginas · 36 entradas · 15 productos",
    url: "https://rubica.net/", dominio: "rubica.net" },
  { id: "barefoot", nombre: "Barefoot Wine LATAM", sector: "Vinos", anio: 2025, tipo: "completo", rol: "montaje", tec: "wordpress",
    stack: ["WordPress", "Elementor"], tamano: "50 páginas · 24 entradas",
    url: "https://barefootwine.lat/", dominio: "barefootwine.lat" },
  { id: "lamarca", nombre: "La Marca Prosecco LATAM", sector: "Vinos", anio: 2025, tipo: "completo", rol: "montaje", tec: "wordpress",
    stack: ["WordPress", "Elementor"], tamano: "25 páginas · 26 entradas",
    url: "https://lamarcaprosecco.lat/", dominio: "lamarcaprosecco.lat" },
  { id: "ashesfire", nombre: "Ashes Fire", sector: "Protección contra incendios", anio: 2025, tipo: "completo", rol: "montaje", tec: "wordpress",
    stack: ["WordPress", "Elementor"], tamano: "31 páginas · 21 entradas",
    url: "https://ashesfire.co/", dominio: "ashesfire.co" },
  { id: "artemas", nombre: "Fundación Arte+", sector: "Fundación", anio: 2025, tipo: "completo", rol: "montaje", tec: "wordpress",
    stack: ["WordPress", "Elementor"], tamano: "7 páginas",
    url: "https://fundacionartemas.com/", dominio: "fundacionartemas.com" },
  { id: "seguroscandia", nombre: "Seguroscandia", sector: "Seguros", anio: 2025, tipo: "landing", rol: "montaje", tec: "wordpress",
    stack: ["WordPress", "Elementor"], tamano: "Landing",
    url: "https://seguroscandia.com/", dominio: "seguroscandia.com" },
  { id: "garito", nombre: "Garito · Triple Net (NNN)", sector: "Bienes raíces", anio: 2025, tipo: "landing", rol: "montaje", tec: "wordpress",
    stack: ["WordPress", "Elementor"], tamano: "Landing",
    url: "https://www.garitoco.com/services/nnn/", dominio: "garitoco.com/services/nnn" },

  // 2024
  { id: "masraras", nombre: "Más raras, más visibles", sector: "Salud", anio: 2024, tipo: "completo", rol: "montaje", tec: "wordpress",
    stack: ["WordPress", "Elementor", "Moodle"], tamano: "23 páginas · 6 entradas · 4 cursos",
    url: "https://masrarasmasvisibles.com/", dominio: "masrarasmasvisibles.com" },
  { id: "teia", nombre: "Teia", sector: "Salud visual", anio: 2024, tipo: "completo", rol: "montaje", tec: "wordpress",
    stack: ["WordPress", "Elementor"], tamano: "23 páginas · 8 entradas",
    url: "https://teia.la/", dominio: "teia.la" },
  { id: "asiel", nombre: "Asiel Suministros", sector: "Suministros empresariales", anio: 2024, tipo: "completo", rol: "montaje", tec: "wordpress",
    stack: ["WordPress", "Elementor"], tamano: "9 páginas",
    url: "https://asielsuministros.com/", dominio: "asielsuministros.com" },

  // 2023
  { id: "paipa", nombre: "Descubre Paipa", sector: "Turismo", anio: 2023, tipo: "completo", rol: "montaje", tec: "wordpress",
    stack: ["WordPress", "Elementor", "Flipbooks 3D"], tamano: "37 páginas · 352 entradas · 59 revistas",
    url: "https://descubrepaipa.com/", dominio: "descubrepaipa.com" },
  { id: "dreams", nombre: "Dreams Kindergarten", sector: "Educación inicial", anio: 2023, tipo: "rediseno", rol: "rediseno", tec: "wordpress",
    stack: ["WordPress", "Elementor", "WooCommerce"], tamano: "35 páginas · 59 entradas · 61 productos",
    url: "https://dreamskindergarten.com/", dominio: "dreamskindergarten.com" },
];

const SITIOS_PRIVADOS = { total: 5, plataforma: "Adobe Experience Manager", sector: "sector salud", anios: "2024 – 2026" };

const ROLES = {
  montaje: "Desarrollo y montaje",
  rediseno: "Rediseño visual",
  propio: "Proyecto propio · diseño + contenido + desarrollo",
};

const FILTROS = {
  tipo: { todos: "Todos", landing: "Landings", completo: "Sitios completos", rediseno: "Rediseños" },
  tec: { todas: "Toda tecnología", wordpress: "WordPress", aem: "AEM", codigo: "Código" },
};

const estadoFiltro = { tipo: "todos", tec: "todas" };

function crear(tag, clase, texto) {
  const el = document.createElement(tag);
  if (clase) el.className = clase;
  if (texto !== undefined) el.textContent = texto;
  return el;
}

function tarjetaSitio(s) {
  const card = crear("div", "sitio_card"); // div (no article) para no heredar los estilos globales de article
  card.dataset.tipo = s.tipo;
  card.dataset.tec = s.tec;

  // Vista previa: navegador + celular
  const preview = crear("a", "sitio_preview" + (s.sinDesktop ? " solo-movil" : ""));
  preview.href = s.url;
  preview.target = "_blank";
  preview.rel = "noopener";
  preview.setAttribute("aria-label", `Abrir ${s.nombre} en una pestaña nueva`);

  if (!s.sinDesktop) {
    const nav = crear("div", "sitio_browser");
    const barra = crear("div", "sitio_browser_bar");
    barra.append(crear("span"), crear("span"), crear("span"), crear("p", "sitio_browser_url", s.dominio));
    const img = crear("img");
    img.src = `media/images/Sitios/${s.id}-desktop.webp`;
    img.alt = `Captura de ${s.nombre} en escritorio`;
    img.loading = "lazy";
    img.width = 800;
    img.height = 500;
    nav.append(barra, img);
    preview.append(nav);
  }
  const movil = crear("div", "sitio_phone");
  const imgM = crear("img");
  imgM.src = `media/images/Sitios/${s.id}-movil.webp`;
  imgM.alt = `Captura de ${s.nombre} en celular`;
  imgM.loading = "lazy";
  imgM.width = 300;
  imgM.height = 649;
  movil.append(imgM);
  preview.append(movil);

  // Información
  const info = crear("div", "sitio_info");
  const cabeza = crear("div", "sitio_head");
  cabeza.append(crear("h3", "sitio_name", s.nombre), crear("p", "sitio_year", String(s.anio)));
  const sector = crear("p", "sitio_sector", s.sector);
  const rol = crear("p", `sitio_rol rol-${s.rol}`, ROLES[s.rol]);
  const stack = crear("ul", "sitio_stack");
  s.stack.forEach((t) => stack.append(crear("li", "", t)));
  const tamano = crear("p", "sitio_size", s.tamano);
  const link = crear("a", "sitio_link", `Ver sitio ↗`);
  link.href = s.url;
  link.target = "_blank";
  link.rel = "noopener";
  info.append(cabeza, sector, rol, stack, tamano, link);

  card.append(preview, info);
  return card;
}

function pintarSitios() {
  const cont = document.getElementById("sitios_lista");
  if (!cont) return;
  cont.textContent = "";
  const visibles = SITIOS.filter(
    (s) => (estadoFiltro.tipo === "todos" || s.tipo === estadoFiltro.tipo) &&
           (estadoFiltro.tec === "todas" || s.tec === estadoFiltro.tec)
  );
  const anios = [...new Set(visibles.map((s) => s.anio))].sort((a, b) => b - a);
  anios.forEach((anio) => {
    const grupo = crear("div", "sitios_anio");
    const delAnio = visibles.filter((s) => s.anio === anio);
    const titulo = crear("h2", "sitios_anio_title", String(anio));
    titulo.append(crear("span", "", ` · ${delAnio.length} ${delAnio.length === 1 ? "sitio" : "sitios"}`));
    const grid = crear("div", "sitios_grid");
    delAnio.forEach((s) => grid.append(tarjetaSitio(s)));
    grupo.append(titulo, grid);
    cont.append(grupo);
  });
  if (!visibles.length) cont.append(crear("p", "sitios_vacio", "No hay sitios con esa combinación de filtros."));
  const contador = document.getElementById("sitios_contador");
  if (contador) contador.textContent = `${visibles.length} de ${SITIOS.length} sitios públicos`;
}

function pintarFiltros() {
  Object.entries(FILTROS).forEach(([grupo, opciones]) => {
    const cont = document.getElementById(`sitios_filtro_${grupo}`);
    if (!cont) return;
    Object.entries(opciones).forEach(([valor, etiqueta]) => {
      const b = crear("button", "sitios_filtro", etiqueta);
      b.type = "button";
      b.setAttribute("aria-pressed", String(estadoFiltro[grupo] === valor));
      b.addEventListener("click", () => {
        estadoFiltro[grupo] = valor;
        cont.querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
        pintarSitios();
      });
      cont.append(b);
    });
  });
}

function pintarCifras() {
  const total = SITIOS.length + SITIOS_PRIVADOS.total;
  const aem = SITIOS.filter((s) => s.tec === "aem").length + SITIOS_PRIVADOS.total;
  const anios = SITIOS.map((s) => s.anio);
  const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
  set("sitios_total", total);
  set("sitios_aem", aem);
  document.querySelectorAll("[data-cifra=total]").forEach((el) => { el.textContent = total; });
  document.querySelectorAll("[data-cifra=aem]").forEach((el) => { el.textContent = aem; });
  const desde = Math.min(...anios), hasta = Math.max(...anios);
  set("sitios_anios", hasta - desde + 1);
  set("sitios_rango", `años · ${desde}–${hasta}`);
  set("sitios_privados_total", `+${SITIOS_PRIVADOS.total}`);
  set("sitios_privados_texto",
    `sitios completos en ${SITIOS_PRIVADOS.plataforma} para el ${SITIOS_PRIVADOS.sector} (${SITIOS_PRIVADOS.anios}). Son privados, por eso no se muestran capturas ni nombres.`);
}

document.addEventListener("DOMContentLoaded", () => {
  pintarCifras();
  pintarFiltros();
  pintarSitios();
});
