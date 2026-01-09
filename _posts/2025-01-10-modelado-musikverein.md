---
title: "Modelado Acústico: Musikverein de Viena"
permalink: /musikverein/
excerpt: "Simulación computacional (EASE) y validación de parámetros acústicos (RT, STI, AlCons) de la Sala Dorada."
categories:
  - Acústica
tags:
  - EASE
  - Simulación
  - JND
classes:
  - wide
  - fondo-gris
header:
  teaser: /assets/images/musikverein_teaser.jpg
toc: true
toc_label: "Análisis"
toc_icon: "chart-line"

# Configuración de la galería de imágenes
gallery:
  - url: /assets/images/musikverein1.jpg
    image_path: /assets/images/musikverein1.jpg
    alt: "Vista del modelo acústico 1"
  - url: /assets/images/musikverein2.jpg
    image_path: /assets/images/musikverein2.jpg
    alt: "Vista del modelo acústico 2"
  - url: /assets/images/musikverein3.jpg
    image_path: /assets/images/musikverein3.jpg
    alt: "Resultados de simulación 3"
  - url: /assets/images/musikverein4.jpg
    image_path: /assets/images/musikverein4.jpg
    alt: "Resultados de simulación 4"
---

## <i class="fas fa-project-diagram"></i> Introducción
Este reporte analiza los resultados obtenidos del modelado acústico asistido por computadora de la Sala Dorada del **Musikverein** (Viena, Austria). El objetivo principal fue validar un modelo virtual comparando los parámetros simulados contra mediciones reales in-situ.

## <i class="fas fa-laptop-code"></i> Metodología
Se utilizó el software **EASE** para calcular parámetros acústicos críticos, incluyendo:
* Tiempo de Reverberación (RT) y EDT.
* Índice de Transmisión de la Voz (STI).
* Pérdida de articulación de consonantes (ALcons).
* Fracción Lateral y Relación Directo/Reverberado (D/R).

El modelo fue ajustado iterativamente ("tuning") hasta lograr magnitudes comparables con la realidad física de la sala.

## <i class="fas fa-chart-bar"></i> Resultados y Validación
Los resultados demostraron una alta precisión en la simulación tras el ajuste:

* **Parámetros Temporales (EDT, T20, T30):** Se obtuvo una diferencia menor a **1 JND** (Just Noticeable Difference) respecto a las mediciones reales.
* **Inteligibilidad (STI):** La diferencia se mantuvo por debajo de **2 JND**.
* **AlCons:** Se observó una desviación del 20.41%.
* **Relación D/R:** Diferencia menor a 1 JND.

Estos resultados validan la efectividad del modelado geométrico para predecir el comportamiento de salas de conciertos complejas de estilo "caja de zapatos".

---

### <i class="fas fa-images"></i> Galería del Proyecto

{% include gallery caption="Modelado 3D, proyecto en EASE, RIR sintetizada artificialmente y resultados de iteraciones" %}

<style>
  /* --- ESTILOS ESPECÍFICOS: MUSIKVEREIN (GRIS GRAFITO) --- */

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
