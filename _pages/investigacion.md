---
layout: single
title: "Investigación y Desarrollo"
permalink: /investigacion/
author_profile: true
classes: 
  - wide
  - fondo-azul
toc: true
toc_label: "Contenido"
toc_icon: "book"

# Configuración de galería
gallery:
  - url: /assets/images/tesis_grafico1.jpg
    image_path: /assets/images/tesis_grafico1.jpg
    alt: "Diagrama del experimento"
  - url: /assets/images/tesis_grafico2.jpg
    image_path: /assets/images/tesis_grafico2.jpg
    alt: "Posiciones de medición y aeronaves involucradas"
  - url: /assets/images/tesis_grafico3.jpg
    image_path: /assets/images/tesis_grafico3.jpg
    alt: "Niveles registrados durante el vuelo crucero"
---

## <i class="fas fa-graduation-cap"></i> Tesis de Grado (UNTREF)

### Título
**"Evaluación de ruido de cabina y sus efectos en la tripulación de vuelo: Un enfoque psicoacústico"**

### Resumen Ejecutivo
Esta investigación evalúa la correlación estadística entre los parámetros de caracterización física del ruido en cabinas de aeronaves comerciales y la molestia subjetiva percibida por pilotos y tripulantes. El estudio combina mediciones in-situ en aeronaves de última generación con encuestas psicométricas a profesionales del sector.

---

## <i class="fas fa-microscope"></i> Metodología

El estudio se dividió en dos etapas complementarias para caracterizar el entorno acústico de manera integral:

### 1. Mediciones Objetivas (In-Situ)
Se realizaron registros de audio y medición de niveles durante las fases críticas de vuelo (despegue, crucero y aterrizaje).
* **Aeronaves evaluadas:** Airbus A320 Neo, A321 y A350-900.
* **Parámetros físicos:** Nivel sonoro continuo equivalente ponderado A (L<sub>Aeq</sub>) y ponderado C (L<sub>Ceq</sub>).
* **Parámetros Psicoacústicos:** A través de software especializado, se analizaron las señales para extraer métricas de **Sonoridad** (Loudness), **Agudeza** (Sharpness), **Rugosidad** (Roughness) y **Fuerza de Fluctuación** (Fluctuation Strength).

### 2. Evaluación Subjetiva
Se diseñó y administró una encuesta a una muestra de **20 profesionales** de la aviación.
* **Herramienta:** Escala tipo Likert de cinco puntos para valorar la molestia percibida.
* **Cuestionario extendido:** Indagación sobre el uso de protección auditiva (EPP), identificación de fuentes de ruido específicas y percepción espacial dentro de la cabina.

---

## <i class="fas fa-chart-line"></i> Resultados y Análisis Estadístico

El procesamiento de datos reveló hallazgos significativos sobre la relación entre el estímulo físico y la respuesta humana:

* **Correlaciones Fuertes:** Se encontró una **relación monotónica positiva** estadísticamente significativa entre la molestia percibida y dos parámetros clave: la **Sonoridad** y la **Agudeza**.
* **Regresión Lineal:** El análisis de regresión confirmó que el aumento en la agudeza (contenido de alta frecuencia) y la sensación de volumen son los predictores más fiables de la molestia en la tripulación.
* **Fuentes Críticas:** Se identificó estadísticamente que ciertas fuentes, como los sistemas de vaciado de baños y el ruido de turbinas, generan mayor rechazo que el ruido de fondo aerodinámico.
* **Distribución Espacial:** La mayoría de los encuestados coincidió en que la **parte trasera de la cabina** representa la zona de mayor exposición y molestia acústica.

---

{% include gallery %}

<style>
  /* --- ESTILOS ESPECÍFICOS: INVESTIGACIÓN (AZUL TÉCNICO) --- */

  /* 1. Fondo Azul y Degradado */
  body.fondo-azul {
    background-color: #0a0e14 !important;
    background-image: linear-gradient(180deg, #152036 0%, #0a0e14 100%) !important;
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

  /* 4. Texto Blanco */
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
