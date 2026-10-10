/* =========================================================
   CONFIGURACIÓN DE ANUNCIOS  -  Cuentos Cortitos  (HilltopAds)
   ---------------------------------------------------------
   Cómo activarlos:

   1) Crea tu cuenta gratis en  https://hilltopads.com/signup?who=publisher
   2) Añade tu sitio (la URL donde publiques la app) y VERIFÍCALO
      (suben un archivo a la raíz, o te dan una meta para el <head>).
   3) Ve a  Manage Site & Zones > Add zone  y crea DOS zonas:
         - PORTADA  -> formato recomendado: MultiTag Banner (300x250)
         - CUENTO   -> formato recomendado: In-Page o MultiTag In-Page
      Copia el "Zone Code" de cada una (es un <script>...</script>).
   4) Pega cada código abajo, entre las comillas, tal cual te lo dieron.

   Mientras estén vacíos, la app funciona SIN anuncios.

   IMPORTANTE (contenido infantil):
   - Usa SOLO formatos Banner e In-Page. NO uses Popunder ni Popup:
     son intrusivos y suelen traer anuncios de citas/apuestas que NO
     se deben mostrar a niños.
   - En HilltopAds, revisa que tu sitio esté en categoría "Mainstream".
   - Revisa los anuncios que salen y bloquea los que no sean aptos.
   ========================================================= */
window.ADS_CONFIG = {
  enabled: true,   // false = desactiva los anuncios

  // Códigos de zona de HilltopAds (ya configurados)
  zones: {
    // ZONA 1 - PORTADA
    home: `<script>
(function(ykcc){
var d = document,
    s = d.createElement('script'),
    l = d.currentScript || d.scripts[d.scripts.length - 1];
s.settings = ykcc || {};
s.src = "\/\/juvenilechoice.com\/b\/XwVosGd.Grl\/0\/Y\/Wncu\/ceRmw9RujZNUilVk\/PiTCc\/1yMtDbcs1\/N\/TbMit_NVzxUtwlNJzdUE1NNPwe";
s.async = true;
s.referrerPolicy = 'no-referrer-when-downgrade';
l.parentNode.insertBefore(s, l);
})({})
</script>`,

    // ZONA 2 - CUENTO
    story: `<script>
(function(gkvd){
var d = document,
    s = d.createElement('script'),
    l = d.currentScript || d.scripts[d.scripts.length - 1];
s.settings = gkvd || {};
s.src = "\/\/juvenilechoice.com\/bTXNVcs\/d.GolJ0gYTWhcR\/beVmx9zuqZjUslqkJPHTZcy1\/MbDHcg1\/Nhj_UItkNizHUcwHNwzKUQ2\/OkQE";
s.async = true;
s.referrerPolicy = 'no-referrer-when-downgrade';
l.parentNode.insertBefore(s, l);
})({})
</script>`
  },

  // Ponlo en true para VER cajas de ejemplo mientras te aprueban el sitio
  preview: false
};
