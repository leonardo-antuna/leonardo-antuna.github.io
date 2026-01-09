---
title: "Desarrollo de Analizador Acústico Open Source en Python"
permalink: /analizador-python/
excerpt: "Software con interfaz gráfica (GUI) para el procesamiento de respuestas al impulso, filtrado normado y cálculo de parámetros ISO 3382."
categories:
  - Programación
  - Acústica
tags:
  - Python
  - DSP
  - GUI
  - ISO 3382
classes:
  - wide
  - fondo-gris
header:
  teaser: /assets/images/python_analyzer_teaser.jpg
toc: true
toc_label: "Arquitectura del Software"
toc_icon: "code"

gallery:
  - url: /assets/images/python_gui1.jpg
    image_path: /assets/images/python_gui1.jpg
    alt: "Interfaz Gráfica de Usuario (GUI)"
  - url: /assets/images/python_gui2.jpg
    image_path: /assets/images/python_gui2.jpg
    alt: "Diagrama en bloques del algoritmo de procesamiento"
  - url: /assets/images/python_gui3.jpg
    image_path: /assets/images/python_gui3.jpg
    alt: "Comparativa de cálculo EDT: Python vs Aurora/EASERA"
---

## <i class="fas fa-laptop-code"></i> Descripción del Proyecto
Este artículo presenta el desarrollo de un software de código abierto con interfaz gráfica de usuario (GUI), diseñado para el procesamiento integral de mediciones acústicas. El sistema parte de registros de audio obtenidos mediante barridos senoidales (Sine Sweeps) para obtener y procesar las Respuestas al Impulso (IR) de un recinto.

## <i class="fas fa-cogs"></i> Algoritmos y Procesamiento
El núcleo del software implementa técnicas avanzadas de procesamiento digital de señales (DSP) para garantizar el cumplimiento de normativas internacionales:

* **Filtrado:** Implementación de filtros de octava y tercio de octava según estándares **IEC**.
* **Suavizado de Curvas (Smoothing):** Se desarrollaron dos métodos seleccionables por el usuario:
    1.  **Integración inversa de Schroeder:** Método estándar y eficiente.
    2.  **Moving Mean Filter (MMF):** Filtro de media móvil con ventana ajustable (50ms por defecto).
* **Linealización:** Post-procesamiento para la linealización del decaimiento energético.

### Cálculo de Parámetros (ISO 3382)
El software calcula automáticamente los siguientes descriptores acústicos:
* **Temporales:** T20, T30, EDT (Early Decay Time), TT, EDTT.
* **Energéticos/Inteligibilidad:** C50 (Claridad), C80, IACCE (Correlación Cruzada Interaural).

## <i class="fas fa-check-circle"></i> Validación y Performance
Para validar la precisión del código, se compararon los resultados obtenidos contra software de referencia en la industria: **Aurora** y **EASERA**.

* **Precisión:** Utilizando el suavizado de Schroeder, se obtuvieron diferencias **menores al 9.7%** en los parámetros temporales (EDT, T20, T30) respecto a los patrones de referencia en las bandas analizadas.
* **Eficiencia:** El análisis de rendimiento mostró que el algoritmo de Schroeder mantiene un tiempo de procesamiento bajo y constante, mientras que el método MMF incrementa el tiempo de cómputo exponencialmente en función de la duración de la ventana.
* **Desviaciones:** Se observaron mayores discrepancias en parámetros energéticos (C50, C80) y espaciales (IACCE), predominantemente en la región de bajas frecuencias.

---

### <i class="fas fa-images"></i> Visualización y Resultados

{% include gallery caption="Interfaz, diagrama de flujo y validación de resultados" %}

<style>
  /* --- ESTILOS ESPECÍFICOS: PYTHON (GRIS GRAFITO) --- */

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
