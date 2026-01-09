---
layout: single
author_profile: true
title: "Leonardo Antuña"
permalink: /
classes: 
  - wide
---

Bienvenido a mi portafolio profesional. Soy **Ingeniero de Sonido** especializado en la intersección entre la acústica física, la electrónica de audio y el desarrollo de software (DSP).

En este sitio documento mis proyectos de investigación, desarrollos en C++/Python, diseños de hardware y soluciones acústicas, enfocándome en soluciones técnicas precisas para problemas acústicos complejos.

---

## <i class="fas fa-road"></i> Roadmap 2026: Formación y Desarrollo

Actualmente me encuentro expandiendo mis capacidades hacia la programación de bajo nivel y los sistemas embebidos, con el objetivo de integrar el procesamiento de audio digital (DSP) en hardware dedicado.

### <i class="fas fa-book-reader"></i> Cursos en Progreso
* **Lenguaje C++ Moderno:** Formación integral a través del temario de [LearnCpp.com](https://www.learncpp.com/).
* **Sistemas Embebidos ARM - STM32:**
    * *Programación Práctica de ARM - STM32* (ADOM Ingeniería - Udemy).
    * *Programación Práctica Avanzada de ARM - STM32* (ADOM Ingeniería - Udemy).

### <i class="fas fa-laptop-code"></i> Próximos Proyectos
* **Portabilidad de Analizador Acústico (C++):** Desarrollo de una versión nativa (`.exe`) optimizada y de alto rendimiento del [software prototipado en Python](/analizador-python/).
* **Pedal de Guitarra Digital (STM32):** Implementación de algoritmos de DSP en tiempo real sobre microcontroladores ARM. Este proyecto busca evolucionar el diseño del [pedal de distorsión analógico](/pedal-analogico/).

---

<h3 class="archive__subtitle">Últimos Proyectos</h3>

{% for post in site.posts limit:4 %}
  {% include archive-single.html %}
{% endfor %}

<div style="text-align: center; font-size: 0.75em; color: #888888; margin-top: 150px; margin-bottom: 20px;">
  <p>Navicon diseñado por <strong>André Luiz Gollo</strong></p>
</div>

<style>
  /* --- ESTILOS DE INICIO (ONYX DEEP) --- */

  /* 1. Fondo degradado oscuro */
  html, body {
    background-color: #0f0c29 !important;
    background-image: linear-gradient(180deg, #1a1a2e 0%, #000000 100%) !important;
    background-attachment: fixed !important;
  }

  /* 2. Contenedores transparentes */
  .page, .page__inner-wrap, .page__content, .archive, .layout--single {
    background-color: transparent !important;
    background: transparent !important;
  }
  
  /* 3. Navbar transparente */
  html body .masthead,
  html body .masthead__inner-wrap,
  html body .greedy-nav {
    background-color: transparent !important;
    background: transparent !important;
    border-bottom: none !important;
    box-shadow: none !important;
  }

  /* 4. Textos en blanco/gris para contraste */
  html body .masthead__menu-item a,
  html body .site-title,
  html body .greedy-nav button,
  html body .archive__item-title a {
    color: #ffffff !important; 
    text-shadow: 0 1px 3px rgba(0,0,0,0.9);
  }
  .archive__item-excerpt {
    color: #cccccc !important;
  }

  /* 5. Forzado de ancho completo (Wide) */
  .page__inner-wrap {
    max-width: 95% !important; 
    margin-right: 0 !important;
    width: 100% !important;
  }
  
  @media (min-width: 1800px) {
    .page__inner-wrap {
      max-width: 1600px !important;
      margin: 0 auto !important;
    }
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
