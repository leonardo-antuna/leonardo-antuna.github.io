---
layout: single
title: "Curriculum Vitae"
permalink: /cv/
author_profile: true
classes: 
  - wide
  - fondo-violeta
---

## <i class="fas fa-user-tie"></i> Perfil Profesional
Ingeniero de Sonido con experiencia como Técnico Acústico. Especializado en acústica arquitectónica y control de ruido, con dominio de software de simulación (EASE, CadnaA) y análisis de datos (Python, Matlab). Interesado en proyectos de consultoría acústica, diseño y sonido en vivo.

---

## <i class="fas fa-briefcase"></i> Experiencia Laboral

**Técnico Acústico** | *Jun 2024 - Marzo 2025*
* Realización de mediciones acústicas según Decreto 740/2007 de Ley 1540, estándar IRAM 4062 y requisitos de DGEVA para eventos al aire libre.
* Elaboración de informes técnicos de impacto acústico según requisitos de agencias gubernamentales de CABA.
* Participación en equipos multidisciplinarios para el asesoramiento sobre acondicionamiento acústico y control de ruido.

<div style="margin-top: 10px; margin-bottom: 20px;">
  <a href="/mediciones-campo/" class="btn btn--success btn--sm">
    <i class="fas fa-camera"></i> Ver Registro Técnico y Fotográfico
  </a>
</div>

---

## <i class="fas fa-graduation-cap"></i> Educación

**Ingeniero de Sonido** | *Universidad Nacional de Tres de Febrero (UNTREF)* | *2015 - 2025*

**Proyecto de Tesis:** *"Evaluación de ruido de cabina y sus efectos en la tripulación de vuelo"*
* Mediciones acústicas de nivel sonoro según estándar internacional ISO 5129.
* Entrevistas subjetivas sobre percepción de molestia sonora.
* Procesamiento de datos y análisis estadístico a través de MATLAB y Python.

---

## <i class="fas fa-tools"></i> Habilidades Técnicas

| Área | Software y Herramientas |
| :--- | :--- |
| **Modelado Acústico** | EASE, Soundflow, CadnaA |
| **Análisis de Datos** | Python (NumPy, SciPy), MATLAB |
| **Electroacústica** | Basta!, ARTA |
| **Diseño / CAD** | AutoCAD, SketchUp |
| **Electrónica** | Multisim, Proteus, Altium |
| **Idiomas** | Español (Nativo), Inglés (Competencia Profesional Completa) |

---

## <i class="fas fa-certificate"></i> Certificaciones
* **Curso de sonido en vivo** - SP.Sonido (2025)
* **Data Analysis with Python** - FreeCodeCamp.org (2024)
* **Scientific Computing with Python** - FreeCodeCamp (2024)
* **First Certificate in English (FCE)** - Cambridge English (2015)

<style>
  /* --- ESTILOS ESPECÍFICOS: CV (VIOLETA) --- */

  /* 1. Fondo Violeta y Degradado */
  body.fondo-violeta {
    background-color: #100a16 !important;
    background-image: linear-gradient(180deg, #241436 0%, #100a16 100%) !important;
    background-attachment: fixed !important;
  }

  /* 2. Transparencia de Contenido */
  .page, .page__inner-wrap, .page__content, .archive {
    background-color: transparent !important;
    background: transparent !important;
  }

  /* 3. Navbar Transparente (Override) */
  html body .masthead,
  html body .masthead__inner-wrap,
  html body .greedy-nav {
    background-color: transparent !important;
    background: transparent !important;
    border-bottom: none !important;
    box-shadow: none !important;
  }

  /* 4. Textos de Menú (Blanco) */
  html body .masthead__menu-item a,
  html body .site-title,
  html body .greedy-nav button {
    color: #ffffff !important; 
    text-shadow: 0 1px 3px rgba(0,0,0,0.8);
  }
</style>

<script>
  /* Script de respaldo para transparencia de Navbar */
  document.addEventListener("DOMContentLoaded", function() {
    var navBar = document.querySelector('.masthead');
    var navWrap = document.querySelector('.masthead__inner-wrap');
    if(navBar) { navBar.style.setProperty('background', 'transparent', 'important'); navBar.style.border = 'none'; }
    if(navWrap) { navWrap.style.setProperty('background', 'transparent', 'important'); }
  });
</script>
