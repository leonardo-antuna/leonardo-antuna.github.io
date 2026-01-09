---
title: "Diseño de Pedal de Distorsión Multi-Banda Analógico"
permalink: /pedal-analogico/
excerpt: "Implementación de un sistema de efectos para guitarra con procesamiento paralelo: distorsión por diodos, saturación JFET y corte BJT según la banda de frecuencia."
categories:
  - Electrónica
tags:
  - Audio
  - Diseño Analógico
  - Guitarra
  - JFET
classes:
  - wide
  - fondo-gris
header:
  teaser: /assets/images/elect_teaser.jpg
toc: true
toc_label: "Arquitectura del Circuito"
toc_icon: "microchip"

gallery:
  - url: /assets/images/elect1.jpg
    image_path: /assets/images/elect1.jpg
    alt: "Diagrama en Bloques del sistema"
  - url: /assets/images/elect2.jpg
    image_path: /assets/images/elect2.jpg
    alt: "Diagrama Circuital completo"
  - url: /assets/images/elect3.jpg
    image_path: /assets/images/elect3.jpg
    alt: "Oscilograma: Comparación de distorsiones a la salida"
---

## <i class="fas fa-project-diagram"></i> Concepto de Diseño
El objetivo de este proyecto fue desarrollar un pedal de efectos para guitarra eléctrica que escape a la topología tradicional de recorte único. Se planteó un diseño de **procesamiento paralelo** donde la señal se divide en tres ramas independientes, aplicando una "coloración" o distorsión específica y optimizada para cada banda del espectro (graves, medios y agudos).

## <i class="fas fa-plug"></i> Etapa de Entrada y Acondicionamiento
Considerando a la guitarra eléctrica como un generador de tensión no ideal, se modeló la entrada bajo las siguientes especificaciones:
* **Magnitud de señal:** Variable entre 50 y 500 mVp.
* **Impedancia de fuente:** Variable entre 3 kΩ y 30 kΩ.

Para evitar la pérdida de tono por desadaptación de impedancias , se implementó un **Buffer JFET** como etapa de entrada. Esta configuración asegura una alta impedancia de entrada, adaptando la señal del instrumento para atacar las subsiguientes etapas de ganancia sin degradación de la señal original.

## <i class="fas fa-sliders-h"></i> Topología de Tres Ramas
A la salida del buffer, la señal se distribuye en tres caminos diferentes. Cada rama consta de una etapa de ganancia variable (basada en transistores PNP) y un filtro dedicado para aislar la banda de interés.

Lo distintivo del diseño radica en la técnica de distorsión aplicada a cada rango:

1.  **Frecuencias Altas (Agudos):** Se utiliza una **distorsión por diodos** (Clipping). Esta topología genera un recorte duro, ideal para añadir "brillo" y armónicos agresivos en la parte alta del espectro.
2.  **Frecuencias Medias:** Se implementa una **distorsión por saturación de transistor JFET**. Esto busca emular la calidez de la saturación valvular, aportando cuerpo al sonido sin resultar estridente.
3.  **Frecuencias Graves:** Se optó por una **distorsión por corte de transistor BJT**. Esta configuración trabaja sobre la región de corte del bipolar, generando una respuesta particular que mantiene la definición en las notas bajas.

---

### <i class="fas fa-images"></i> Planos y Mediciones

{% include gallery caption="Diagramas de diseño y verificación en osciloscopio" %}

<style>
  /* --- ESTILOS ESPECÍFICOS: PEDAL (GRIS GRAFITO) --- */

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
