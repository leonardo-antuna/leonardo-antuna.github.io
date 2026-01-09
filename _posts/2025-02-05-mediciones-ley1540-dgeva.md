---
title: "Relevamiento y Fiscalización Acústica: Ley 1540"
permalink: /mediciones-campo/
excerpt: "Procedimientos de medición para habilitaciones comerciales (Decreto 740) y monitoreo de impacto acústico en eventos masivos según requerimientos de la DGEVA."
categories:
  - Acústica
tags:
  - Ley 1540
  - DGEVA
  - Normativa
  - Trabajo de Campo
classes:
  - wide
  - fondo-gris
header:
  teaser: /assets/images/medicion_teaser.jpg
toc: true
toc_label: "Protocolos"
toc_icon: "clipboard-check"

# Configuración de la galería
gallery:
  - url: /assets/images/medicion1.jpeg
    image_path: /assets/images/medicion1.jpeg
    alt: "Medición de ruido de fondo en vía pública"
  - url: /assets/images/medicion2.jpeg
    image_path: /assets/images/medicion2.jpeg
    alt: "Medición de aislamiento en local comercial"
  - url: /assets/images/medicion3.jpeg
    image_path: /assets/images/medicion3.jpeg
    alt: "Monitoreo en evento al aire libre"
---

## <i class="fas fa-briefcase"></i> Marco Profesional
En el ejercicio de mi actividad como Técnico Acústico, he llevado adelante relevamientos y mediciones in-situ con el objetivo de asegurar la adecuación a la normativa ambiental vigente en la Ciudad Autónoma de Buenos Aires (CABA). Esta labor exige no solo rigurosidad en la metrología, sino un dominio exhaustivo del marco legal regulatorio.

## <i class="fas fa-store-alt"></i> Habilitaciones Comerciales (Ley 1540)
Para la tramitación de habilitaciones en rubros con actividad potencialmente ruidosa (locales de esparcimiento, gastronomía, industria), se aplica el **Decreto Reglamentario 740/2007** de la Ley 1540 de Control de la Contaminación Acústica.

### Metodología de Relevamiento
* **Evaluación de Inmisión:** Medición de niveles de ruido trascendente hacia unidades funcionales linderas y hacia la vía pública.
* **Cálculo del NER:** Determinación del Nivel de Evaluación de Ruido, aplicando las penalizaciones por carácter tonal e impulsivo según corresponda.
* **Verificación de Aislamiento:** Ensayo de la envolvente del recinto mediante fuentes de ruido rosa estandarizadas, garantizando que la actividad no exceda los Límites Máximos Permisibles (LMP) estipulados para la zonificación (Áreas de Sensibilidad Acústica).

## <i class="fas fa-music"></i> Eventos Masivos (DGEVA)
En el caso de espectáculos al aire libre, la fiscalización se centra en el monitoreo dinámico del impacto acústico, respondiendo a los requerimientos de la **Dirección General de Evaluación Ambiental (DGEVA)** y la Agencia de Protección Ambiental (APRA).

### Protocolo de Monitoreo
* **Receptores Sensibles:** Definición estratégica de los puntos de medición en el perímetro del predio y en los frentes residenciales indicados por DGEVA.
* **Articulación en Tiempo Real:** Comunicación directa con los operadores de PA (FOH) para la gestión del Nivel de Presión Sonora (SPL), previendo variaciones por condiciones meteorológicas (viento y gradientes de temperatura).
* **Informe Técnico:** Registro continuo de niveles equivalentes (Leq) para la confección del informe final de conformidad exigido por la autoridad de aplicación.

---

### <i class="fas fa-camera"></i> Registro Fotográfico de Campo

{% include gallery caption="Instrumentación y operativos de medición" %}

<style>
  /* --- ESTILOS ESPECÍFICOS: MEDICIONES (GRIS GRAFITO) --- */

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
