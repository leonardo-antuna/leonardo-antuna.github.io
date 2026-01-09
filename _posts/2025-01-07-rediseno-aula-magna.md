---
title: "Rediseño Acústico: Aula Magna Universidad de Caracas"
permalink: /aula-magna/
excerpt: "Propuesta de conversión de auditorio a Sala Sinfónica para 1334 personas, con cálculo de parámetros Sabine e ITDG."
categories:
  - Acústica
tags:
  - Arquitectura
  - Sala Sinfónica
  - Sabine
classes:
  - wide
  - fondo-gris
header:
  teaser: /assets/images/aula_magna_teaser.jpg
toc: true
toc_label: "Detalles del Proyecto"
toc_icon: "university"

# Configuración de la galería
gallery:
  - url: /assets/images/aulamagna1.png
    image_path: /assets/images/aulamagna1.png
    alt: "Plano propuesto"
  - url: /assets/images/aulamagna2.png
    image_path: /assets/images/aulamagna2.png
    alt: "Análisis de rayos y reflexiones"
  - url: /assets/images/aulamagna3.png
    image_path: /assets/images/aulamagna3.png
    alt: "Cálculo de reverberación (Sabine)"
  - url: /assets/images/aulamagna4.jpeg
    image_path: /assets/images/aulamagna4.jpeg
    alt: "Render o esquema de la nueva sala"
---

## <i class="fas fa-university"></i> Contexto del Rediseño
Este proyecto aborda el rediseño del auditorio "Aula Magna" de la Universidad de Caracas (Venezuela). Se consideraron condiciones iniciales críticas como el área original, la ubicación y las fuentes de ruido externas existentes.

## <i class="fas fa-ruler-vertical"></i> Nueva Propuesta: Sala Sinfónica
El nuevo diseño transforma el espacio en una sala sinfónica, cumpliendo con el código de edificación de la ciudad de Caracas.

* **Capacidad:** 1334 asientos para la audiencia.
* **Escenario:** Capacidad para 84 músicos.
* **Distribución:** Planta principal y dos balcones.

## <i class="fas fa-calculator"></i> Análisis Acústico
Se calcularon y optimizaron parámetros fundamentales para adaptar el recinto a su nuevo propósito sinfónico:
* **Tiempo de Reverberación:** Cálculo mediante fórmula de Sabine.
* **ITDG:** (Initial Time Delay Gap) para asegurar la intimidad acústica.
* **Materialidad:** Selección específica de materiales para alcanzar los objetivos de absorción y difusión requeridos.

---

### <i class="fas fa-images"></i> Planos y Análisis

{% include gallery caption="Propuesta arquitectónica y cálculos acústicos" %}

<style>
  /* --- ESTILOS ESPECÍFICOS: AULA MAGNA (GRIS GRAFITO) --- */

  /* 1. Fondo Gris Oscuro */
  body.fondo-gris {
    background-color: #050505 !important;
    background-image: linear-gradient(180deg, #1c1c1e 0%, #050505 100%) !important;
    background-attachment: fixed !important;
  }

  /* 2. Contenedores transparentes */
  .page, .page__inner-wrap, .page__content, .archive {
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
  
  /* 4. Texto blanco */
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
