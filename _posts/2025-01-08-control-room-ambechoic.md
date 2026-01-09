---
title: "Diseño de Control Room: Topología Ambechoic"
permalink: /control-room/
excerpt: "Diseño integral de un estudio de grabación para 8 personas con monitoreo 3D, cumpliendo normativas de CABA y recomendaciones AES."
categories:
  - Acústica
tags:
  - Estudio
  - Aislamiento
  - AES
classes:
  - wide
  - fondo-gris
header:
  teaser: /assets/images/control_room_teaser.jpg
toc: true
toc_label: "Especificaciones"
toc_icon: "cogs"

# Configuración de la galería
gallery:
  - url: /assets/images/controlroom1.png
    image_path: /assets/images/controlroom1.png
    alt: "Planta general y distribución"
  - url: /assets/images/controlroom2.jpg
    image_path: /assets/images/controlroom2.jpg
    alt: "Render finalizado"
  - url: /assets/images/controlroom3.png
    image_path: /assets/images/controlroom3.png
    alt: "Modelado acústico"
---

## <i class="fas fa-layer-group"></i> Alcance del Proyecto
Este trabajo detalla el diseño de un **Control Room tipo Ambechoic** (ambiente anecoico con reflexiones controladas) destinado a un estudio de grabación profesional. El diseño contempla una ocupación máxima de 8 personas, alineándose con las disposiciones de la Ciudad Autónoma de Buenos Aires (CABA).

## <i class="fas fa-cogs"></i> Especificaciones Técnicas

### Aislamiento y Climatización
* Diseño del aislamiento acústico integral (lateral, superior e inferior) para garantizar el piso de ruido NC requerido.
* Cálculo del sistema de ventilación y aire acondicionado (HVAC) para mantener el confort sin introducir ruido mecánico.

### Acústica Interna
* **Tratamiento:** Ubicación y confección de revestimientos para lograr la respuesta Ambechoic.
* **Simulación:** Se realizaron simulaciones de acústica geométrica y ondulatoria para predecir el comportamiento modal.
* **Target:** Cumplimiento de las recomendaciones de la **Audio Engineering Society (AES)** en términos de Tiempo de Reverberación (RT).

### Sistemas de Monitoreo
El diseño integra la disposición para tres formatos de escucha crítica:
1. Estéreo.
2. Binaural.
3. Audio 3D (Inmersivo).

---

### <i class="fas fa-images"></i> Planos y Visualización

{% include gallery caption="Detalles constructivos y visualización 3D" %}

<style>
  /* --- ESTILOS ESPECÍFICOS: CONTROL ROOM (GRIS GRAFITO) --- */

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
