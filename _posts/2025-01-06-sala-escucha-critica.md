---
title: "Sala de Escucha Crítica: Método DUD"
permalink: /sala-dud/
excerpt: "Diseño de sala privada utilizando el esquema de Distribución Uniforme de Difusores en un recinto de 250m³."
categories:
  - Acústica
tags:
  - Difusión
  - Home Cinema
  - Diseño
classes:
  - wide
  - fondo-gris
header:
  teaser: /assets/images/dud_teaser.jpg
toc: true
toc_label: "Contenido"
toc_icon: "layer-group"
---

## <i class="fas fa-bullseye"></i> Objetivo de Diseño
Se propone el diseño de una sala de escucha crítica de alta fidelidad (Home Cinema / Sala de Audio) en un recinto volumétrico de **7m x 6.5m x 5.5m** de altura.

## <i class="fas fa-th"></i> Esquema DUD (Distribución Uniforme de Difusores)
A diferencia de los diseños tradicionales de absorción ("Dead End"), esta propuesta utiliza la técnica de diseño **DUD**.
* **Estrategia:** Utilización de difusores como revestimiento mayoritario de las superficies.
* **Distribución:** Los elementos difusores no se confinan a una zona o pared específica (como en un LEDE), sino que se distribuyen uniformemente para generar un campo sonoro difuso y envolvente, minimizando la coloración modal sin "secar" excesivamente la sala.

<style>
  /* --- ESTILOS ESPECÍFICOS: SALA DUD (GRIS GRAFITO) --- */

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
