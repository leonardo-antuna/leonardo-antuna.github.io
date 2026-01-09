---
title: "Diseño y Construcción: Resonador de Helmholtz"
permalink: /resonador-helmholtz/
excerpt: "Cálculo, fabricación y medición del coeficiente de absorción de un resonador basado en la teoría de Cox & D'Antonio."
categories:
  - Acústica
tags:
  - Absorción
  - Mediciones
  - DIY
classes:
  - wide
  - fondo-gris
header:
  teaser: /assets/images/helmholtz_teaser.png
toc: true
toc_label: "Contenido"
toc_icon: "list-ul"

# Configuración de la galería
gallery:
  - url: /assets/images/helmholtz1.jpg
    image_path: /assets/images/helmholtz1.jpg
    alt: "Resonador construido con madera MDF y lana de vidrio de alta densidad"
  - url: /assets/images/helmholtz2.jpg
    image_path: /assets/images/helmholtz2.jpg
    alt: "Cálculo teórico del coeficiente de absorción"
  - url: /assets/images/helmholtz3.jpg
    image_path: /assets/images/helmholtz3.jpg
    alt: "Mediciones acústicas in-situ"
---

## <i class="fas fa-pencil-ruler"></i> Descripción del Proyecto
Este trabajo describe el ciclo completo de ingeniería (cálculo, diseño y construcción) de un resonador acústico de Helmholtz, basándose en los modelos teóricos de **Trevor Cox y Peter D'Antonio**. El objetivo fue crear un dispositivo sintonizable para tratar frecuencias problemáticas específicas en recintos pequeños.

## <i class="fas fa-tools"></i> Implementación y Mediciones
Posterior a la fabricación, se midió el coeficiente de absorción estadística en bandas de tercio de octava. Aunque las condiciones de medición no replicaron estrictamente la norma **ISO 354** (debido al tamaño de la cámara), los resultados experimentales mostraron una alta correlación con el modelo teórico predicho.

### Hallazgos Principales
* **Punto de Máxima Eficiencia:** Se logró la máxima absorción en la banda de **630 Hz**, coincidiendo con el diseño.
* **Control Modal:** Las mediciones con diferentes configuraciones de paneles demostraron una disminución efectiva en los tiempos de reverberación.
* **Bajas Frecuencias:** Se evidenció un mayor control modal, reflejado en la disminución de la desviación estándar para la banda crítica de **160 Hz**.

---

### <i class="fas fa-images"></i> Galería de Construcción y Medición

{% include gallery caption="Detalles del diseño y pruebas acústicas" %}

<style>
  /* --- ESTILOS ESPECÍFICOS: HELMHOLTZ (GRIS GRAFITO) --- */

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
