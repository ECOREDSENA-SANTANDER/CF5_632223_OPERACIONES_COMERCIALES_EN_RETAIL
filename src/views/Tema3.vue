<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Técnicas de servicio al cliente

    p Ahora veamos diferentes técnicas y conceptos, que debemos conocer y aplicar para una asertiva atención al cliente:

    separador
    #t_3_1.titulo-segundo.mb-5
      h2 3.1 Comunicación asertiva

    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-md-12.col-lg-8
        p Históricamente el hombre ha sido un ser social y necesita comunicarse, porque es importante relacionarse con los demás. La comunicación es un acto que el individuo establece con otro, este contacto le permite dar a conocer su pensamiento y sentimiento. 
        .cajon.color-primario.p-4.mb-4
          p Es importante decir que uno de los aspectos fundamentales, es la comunicación asertiva cuyo objetivo es poder expresarse de manera respetuosa, sincera, sencilla y exponiendo lo que se quiere. Para que esto se cumpla es necesario tener la habilidad de hacerlo sin hacer daño a nadie. 
      .col-8.col-md-8.col-lg-4
        img.p-2(src='@/assets/curso/temas/tema3/imagen1.png', alt='')

    .mb-4.d-flex.ps-lg-0
      .d-flex.flex-wrap.align-items-center.pe-3.bg-img-blue
        h3.col.px-4.mb-0.mx-5.text-white(data-aos="zoom-in-left") Características de la comunicación asertiva
        img.icon(src='@/assets/curso/temas/icon.svg') 

    .row.justify-content-center.mb-5.mt-5(data-aos="zoom-in-left")
      .col-sm-12.col-md-6.col-lg-3.mb-cus
        .tarjeta-avatar
          img.p-3(src='@/assets/curso/temas/tema3/tarava1-1.png')
          .tarjeta.bgrosado.w-100
            .p-4.text-center
              p.mb-0.text-center Trata de mostrar los deseos o necesidades que una persona anhela, pero siempre de manera educada y honesta.
      .col-sm-12.col-md-6.col-lg-3.mb-cus
        .tarjeta-avatar
          img.p-3(src='@/assets/curso/temas/tema3/tarava1-2.png')
          .tarjeta.bgrosado.w-100
            .p-4.text-center
              p.mb-0.text-center Se deben evitar los reproches personales, los ataques constantes o recurrir a informaciones hirientes que desacrediten a un individuo.
      .col-sm-12.col-md-6.col-lg-3.mb-cus
        .tarjeta-avatar
          img.p-3(src='@/assets/curso/temas/tema3/tarava1-3.png')
          .tarjeta.bgrosado.w-100
            .p-4.text-center
              p.mb-0.text-center No es una comunicación pasiva o que impida exponer lo que verdaderamente se desea. La diferencia en este tipo de comunicación es que se expresa con honestidad, respeto y escogiendo las palabras más adecuadas para no generar conflicto.
      .col-sm-12.col-md-6.col-lg-3.mb-cus
        .tarjeta-avatar
          img.p-3(src='@/assets/curso/temas/tema3/tarava1-4.png')
          .tarjeta.bgrosado.w-100
            .p-4.text-center
              p.mb-0.text-center Busca el equilibrio para manifestar la opinión que uno tiene sin menospreciar a los demás. 

    .mb-4.mt-4.d-flex.ps-lg-0
      .d-flex.flex-wrap.align-items-center.pe-3.bg-img-blue
        h3.col.px-4.mb-0.mx-5.text-white(data-aos="zoom-in-left") Técnicas de la comunicación asertiva
        img.icon(src='@/assets/curso/temas/icon.svg') 
    
    p.mb-5.mt-5 Teniendo en cuenta la importancia de la comunicación asertiva, se enumeran algunas técnicas para mejorarla, pueden ser especialmente útiles en el trabajo :

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col.md-8.col-lg-4
        img.p-2(src='@/assets/curso/temas/tema3/imagen2.png', alt='')
      .col-sm-12.col-md-12.col-lg-8
        .row.justify-content-center.align-items-center.mb-2.bgazulclaro.borde-redondo
          ul.lista-ul.mb-0.p-3
            li.d-flex.mb-0
              i.fas.fa-check-circle.texto-azul
              p.mb-0 La escucha activa es muy importante para atender la información y el mensaje que nos transmite la persona con la que se está conversando.
        .row.justify-content-center.align-items-center.mb-2.bgazulclaro.borde-redondo
          ul.lista-ul.mb-0.p-3
            li.d-flex.mb-0
              i.fas.fa-check-circle.texto-azul
              p.mb-0 Es muy importante hablar en primera persona para exponer lo que uno siente, esto evita echar la culpa de manera constante a alguien, sin asumir también las responsabilidades propias.
        .row.justify-content-center.align-items-center.mb-2.bgazulclaro.borde-redondo
          ul.lista-ul.mb-0.p-3
            li.d-flex.mb-0
              i.fas.fa-check-circle.texto-azul
              p.mb-0 Nos debemos comunicar sin exponer juicios de valor. No se recomienda en ninguna circunstancia juzgar ni señalar a alguien, ya que eso impide que se pueda poner en práctica una comunicación asertiva.
        .row.justify-content-center.align-items-center.bgazulclaro.borde-redondo
          ul.lista-ul.mb-0.p-3
            li.d-flex.mb-0
              i.fas.fa-check-circle.texto-azul
              p.mb-0 Debe argumentar en lugar de exigir o reclamar en primera instancia. Es muy importante exponer las razones, motivos y argumentos que den valor a la comunicación. 

    separador
    #t_3_2.titulo-segundo.mb-5
      h2 3.2 Comunicación verbal y no verbal
    
    p.mb-5.mt-5 Para hablar de comunicación verbal y no verbal se hace necesario repasar el proceso de comunicación, recordando sus elementos:

    .row.justify-content-center.align-items-center
      .col-lg-8
          ImagenInfografica.color-acento-botones.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema3/info1.png', alt='', style='')

            .tarjeta.color-acento-botones.p-4(x="66%" y="8%" numero="+" style='border-radius: 8px; background-color: #F7CAC3')
              h5.mb-3.text-center Mensaje
              p.mb-0.text-center El contenido se refiere a lo que se desea comunicar.

            .tarjeta.color-acento-botones.p-4(x="35%" y="35%" numero="+" style='border-radius: 10px; background-color: #F7CAC3')
              h5.mb-3.text-center Código
              p.mb-0.text-center El lenguaje se refiere a los códigos; palabras, signos escritos, gestos. Las respuestas  se tornan confusas y  provocan  disfunciones.

            .tarjeta.color-acento-botones.p-4(x="96%" y="30%" numero="+" style='border-radius: 10px; background-color: #F7CAC3')
              h5.mb-3.text-center #[em FEED-BACK] (retroalimentación)
              p.mb-0.text-center Es la respuesta al mensaje para confirmar que la comunicación va bien.

            .tarjeta.color-acento-botones.p-4(x="60%" y="35%" numero="+" style='border-radius: 10px; background-color: #F7CAC3')
              h5.mb-3.text-center Receptor
              p.mb-0.text-center Es la persona que recibe la información de otros.

            .tarjeta.color-acento-botones.p-4(x="35%" y="70%" numero="+" style='border-radius: 10px; background-color: #F7CAC3')
              h5.mb-3.text-center Barreras
              p.mb-0.text-center Se refiere a las actitudes personales, prejuicios, ruidos, no ser el momento adecuado que dificultan la comunicación.

            .tarjeta.color-acento-botones.p-4(x="5%" y="38%" numero="+" style='border-radius: 10px; background-color: #F7CAC3')
              h5.mb-3.text-center Emisor
              p.mb-0.text-center Es la persona que emite la información a otros.

            .tarjeta.color-acento-botones.p-4(x="56%" y="77%" numero="+" style='border-radius: 10px; background-color: #F7CAC3')
              h5.mb-3.text-center Canal
              p.mb-0.text-center El vehículo que transporta el mensaje entre el emisor y el receptor que puede ser oral, escrito o gestual.

    p.mb-5 Luego de ver el proceso de comunicación y sus elementos compositivos, analicemos las categorías de la comunicación humana, las cuales se dividen en dos: 









</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
