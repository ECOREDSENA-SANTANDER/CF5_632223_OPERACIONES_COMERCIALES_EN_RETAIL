(function(e){function n(n){for(var o,i,c=n[0],s=n[1],l=n[2],u=0,d=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&d.push(t[i][0]),t[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);m&&m(n);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,n=0;n<r.length;n++){for(var a=r[n],o=!0,i=1;i<a.length;i++){var c=a[i];0!==t[c]&&(o=!1)}o&&(r.splice(n--,1),e=s(s.s=a[0]))}return e}var o={},i={app:0},t={app:0},r=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"840c10c9","chunk-0206bfa0":"07f4fcb8","chunk-110f1f0b":"c729ecf3","chunk-13a6037e":"725eca6a","chunk-179248a2":"0882ec97","chunk-18f95272":"bb47be6d","chunk-2a9fce91":"79146cce","chunk-2c06842c":"f5617033","chunk-2d0c5615":"01eba69d","chunk-2d0e96ec":"ec734bee","chunk-2d208d90":"ab67193c","chunk-2d21d0e2":"f77c22e4","chunk-2d22c123":"c9115eca","chunk-2e80bb9a":"b3e4ecbc","chunk-319206de":"06f535cf","chunk-36769079":"0093655a","chunk-4cdd78c0":"b1eae698","chunk-515a8379":"471b9110","chunk-53ccb27e":"03f89fab","chunk-55d286b8":"69a8245e","chunk-59974754":"d7b5c639","chunk-5d1ce150":"33dbeb12","chunk-60cbc06b":"e7f70342","chunk-623f2040":"f9fac6f0","chunk-659152b8":"3f7b8817","chunk-6a43ec24":"3e891bb4","chunk-6e1e538a":"034b6f92","chunk-6e613899":"2a976d39","chunk-766a929b":"1ae4942d","chunk-7794bb60":"f954ae38","chunk-c796899c":"ed37a8e2","chunk-e8a7823a":"c0dd9220","chunk-fde47172":"7ec6a62b",comple:"5484bb57",creditos:"a69d078c",glosario:"0a5fbaaf",intro:"771b2f6e",referencias:"1091717e",sintesis:"726ac3a9",tema1:"35fc410e",tema2:"4fdc9fc3",tema3:"331de53a"}[e]+".js"}function s(n){if(o[n])return o[n].exports;var a=o[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var n=[],a={"chunk-110f1f0b":1,"chunk-179248a2":1,"chunk-2a9fce91":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-5d1ce150":1,"chunk-60cbc06b":1,"chunk-623f2040":1,"chunk-6a43ec24":1,"chunk-6e1e538a":1,"chunk-6e613899":1,"chunk-766a929b":1,"chunk-7794bb60":1,comple:1,creditos:1,glosario:1,referencias:1};i[e]?n.push(i[e]):0!==i[e]&&a[e]&&n.push(i[e]=new Promise((function(n,a){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-110f1f0b":"52141945","chunk-13a6037e":"31d6cfe0","chunk-179248a2":"52141945","chunk-18f95272":"31d6cfe0","chunk-2a9fce91":"52141945","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-36769079":"31d6cfe0","chunk-4cdd78c0":"31d6cfe0","chunk-515a8379":"ed060abb","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"416b9f9a","chunk-5d1ce150":"52141945","chunk-60cbc06b":"09438581","chunk-623f2040":"52141945","chunk-659152b8":"31d6cfe0","chunk-6a43ec24":"52141945","chunk-6e1e538a":"3ba0a060","chunk-6e613899":"52141945","chunk-766a929b":"8da28923","chunk-7794bb60":"52141945","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-fde47172":"31d6cfe0",comple:"eaf07512",creditos:"002e6ca8",glosario:"97e8e09b",intro:"31d6cfe0",referencias:"121fc9c5",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",t=s.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var l=r[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===t))return n()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===o||u===t)return n()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=n,m.onerror=function(n){var o=n&&n.target&&n.target.src||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete i[e],m.parentNode.removeChild(m),a(r)},m.href=t;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){i[e]=0})));var o=t[e];if(0!==o)if(o)n.push(o[2]);else{var r=new Promise((function(n,a){o=t[e]=[n,a]}));n.push(o[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var d=new Error;l=function(n){u.onerror=u.onload=null,clearTimeout(m);var a=t[e];if(0!==a){if(a){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",d.name="ChunkLoadError",d.type=o,d.request=i,a[1](d)}t[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(n)},s.m=e,s.c=o,s.d=function(e,n,a){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)s.d(a,o,function(n){return e[n]}.bind(null,o));return a},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=n,l=l.slice();for(var d=0;d<l.length;d++)n(l[d]);var m=u;r.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("56d7")},"52e5":function(e,n,a){e.exports=a.p+"img/cc.58a75e32.svg"},"56d7":function(e,n,a){"use strict";a.r(n);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("68f3"),i=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("Header"),a("div",{staticClass:"contenedor-principal"},[a("AsideMenu"),a("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[a("router-view")],1)],1),a("BarraAvance"),a("Accesibilidad")],1)},t=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,s=a("2877"),l=Object(s["a"])(c,i,t,!1,null,null,null),u=l.exports,d=(a("d3b7"),a("3ca3"),a("ddb0"),a("b0c0"),a("2b0e")),m=a("8c4f"),f=a("ae58"),p=a("7e58");d["a"].use(m["a"]);var h=new m["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return a.e("intro").then(a.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return a.e("tema1").then(a.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return a.e("tema2").then(a.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return a.e("tema3").then(a.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return a.e("tema3").then(a.bind(null,"3eb5"))}},{path:"tema5",name:"tema5",component:function(){return a.e("tema3").then(a.bind(null,"5029"))}}]},{path:"/actividad",name:"actividad",component:function(){return a.e("actividad").then(a.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return a.e("glosario").then(a.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return a.e("comple").then(a.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return a.e("referencias").then(a.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return a.e("sintesis").then(a.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return a.e("creditos").then(a.bind(null,"2e81"))}}],scrollBehavior:function(e,n){if(e.hash){var a={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===n.name?a:new Promise((function(e){setTimeout((function(){e(a)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),b=h,g=a("1c2c"),v=(a("a3a0"),{global:{componenteFormativo:"Atención al Cliente en el <i>Retail</i>",descripcionCurso:"El propósito de este componente de formación es ayudar a los aprendices a desarrollar una excelente Atención al Cliente teniendo en cuenta que es muy importante en el mercado y de su buena atención depende la fidelización y aumento de la clientela.",imagenBannerPrincipal:a("9710"),fondoBannerPrincipal:a("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:a("71f8")},{clases:["banner-principal-decorativo-2"],imagen:a("8f04")},{clases:["banner-principal-decorativo-3"],imagen:a("7d72")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",numero:"1",titulo:"Definiciones en el <i>Retail</i>",desarrolloContenidos:!0},{nombreRuta:"tema2",numero:"2",titulo:"Atender al cliente en el <i>Retail</i>",desarrolloContenidos:!0,subMenu:[{numero:"2.1",titulo:"Conocer al cliente",hash:"t_2_1"},{numero:"2.2",titulo:"Clasificación de los clientes",hash:"t_2_2"},{numero:"2.3",titulo:"Necesidades, deseos y demanda de los clientes",hash:"t_2_3"},{numero:"2.4",titulo:"Momentos de verdad con el cliente",hash:"t_2_4"},{numero:"2.5",titulo:"Contingencias",hash:"t_2_5"}]},{nombreRuta:"tema3",numero:"3",titulo:"Técnicas de servicio al cliente",desarrolloContenidos:!0,subMenu:[{numero:"3.1",titulo:"Comunicación asertiva",hash:"t_3_1"},{numero:"3.2",titulo:"Comunicación verbal y no verbal",hash:"t_3_2"},{numero:"3.3",titulo:"Pautas de actuación",hash:"t_3_3"},{numero:"3.4",titulo:"Ciclo de servicio",hash:"t_3_4"},{numero:"3.5",titulo:"Triángulo de servicio",hash:"t_3_5"}]},{nombreRuta:"tema4",numero:"4",titulo:"Protocolos de la organización",desarrolloContenidos:!0,subMenu:[{numero:"4.1",titulo:"Protocolo de atención",hash:"t_4_1"},{numero:"4.2",titulo:"Etiqueta y normas de cortesía",hash:"t_4_2"}]},{nombreRuta:"tema5",numero:"5",titulo:"Satisfacción del cliente",desarrolloContenidos:!0,subMenu:[{numero:"5.1",titulo:"Trazabilidad del servicio",hash:"t_5_1"},{numero:"5.2",titulo:"Tipos de herramientas de evaluación de satisfacción del cliente",hash:"t_5_2"},{numero:"5.3",titulo:"Trámite de PQRS",hash:"t_5_3"},{numero:"5.4",titulo:"Registro de la información",hash:"t_5_4"}]}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-file-pdf",titulo:"Descargar PDF",download:"downloads/CF5_632223_DU.pdf"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Técnicas de servicio al cliente",referencia:"Gambarota, D. M., & Lorda, M. A. (2017). El turismo como estrategia de desarrollo local. Revista geográfica venezolana, 58(2), 346-359. ",tipo:"Libro",link:"https://books.google.es/books?hl=es&lr=&id=2q5JDwAAQBAJ&oi=fnd&pg=PT24&dq=manejos+de+inventarios&ots=ljO-aSPDk3&sig=heE07m3Xxc8GrgDv0poRsUKwVx8#v=onepage&q=manejos%20de%20inventarios&f=false "},{tema:"Técnicas de servicio al cliente",referencia:"Vélez Maya, Tulio. LogíStica Empresarial: Gestión Eficiente Del Flujo de Suministros. ",tipo:"Libro",link:"https://sena-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=sena_ebooks0003578&context=L&vid=SENA&lang=es_ES&search_scope=sena_completo&adaptor=Local%20Search%20Engine&tab=sena_completo&query=any%2Ccontains%2Cmanejo%20%20de%20inventarios&offset=0 "}],glosario:[{termino:"Atención al cliente",significado:"Es el servicio que se presta a las personas que adquieren un bien o servicio. La atención al cliente comprende desde el recibimiento y la información antes de realizar una compra hasta el seguimiento postventa."},{termino:"<em>Branding</em>",significado:"Es ayudar a los consumidores a entender lo que ofreces y en qué te diferencias, de manera simple y fácil. Pero no es solo la Propuesta Única de Venta."},{termino:"Cliente",significado:"Es la persona que utiliza o adquiere, de manera frecuente u ocasional los servicios o productos que pone a su disposición un profesional, un comercio o una empresa."},{termino:"Comunicación",significado:"Es el proceso que consiste en la transmisión e intercambio de mensajes entre un emisor y un receptor."},{termino:"Información",significado:"Conjunto de datos ya procesados y ordenados par su comprensión, que aportan nuevos conocimientos a un individuo o sistema sobre un asunto, materia, fenómeno o ente determinado."},{termino:"Momentos de verdad",significado:"Es un episodio en el cual el cliente entra en contacto con cualquier aspecto de la empresa y se crea una impresión sobre la calidad del servicio."},{termino:"Protocolo",significado:"Conjunto de reglas ya sea por normas o por costumbre, se establecen para actos oficiales o solemnes, ceremonias y otros eventos."},{termino:"Satisfacción",significado:"Estado mental de goce por sentir que ya nada se necesita para lograr la plenitud ya sea física o mental."},{termino:"Servicio",significado:"Dar o prestar apoyo o asistencia a alguien valiéndonos de un conjunto de medios materiales o inmateriales."},{termino:"Trámite",significado:"Proceso o procedimiento legal o administrativo para resolver un litigio o discutible. Cada uno de los estados y diligencias precisas para la conclusión de un negocio."},{termino:"Trazabilidad",significado:"Posibilidad de identificar el origen y las diferentes etapas de un proceso de producción y distribución de bienes de consumo."}],referencias:[{referencia:"Escudero Serrano, M. J. (2012). Comunicación y atención al cliente. Ediciones Paraninfo, SA.",link:""},{referencia:"Grönroos, C. (1994). Marketing y gestión de servicios: la gestión de los momentos de la verdad y la competencia en los servicios. Ediciones Díaz de Santos.",link:""},{referencia:"FERNÁNDEZ VERDE, L. O. L. A., & Fernández Rico, E. (2017). Comunicación empresarial y atención al cliente 2. Ediciones Paraninfo, SA.",link:""},{referencia:"Marielos Ramos (2020). Universidad de San Carlos de Guatemala. Etiqueta y normas de cortesía.",link:""},{referencia:"Asociación Española para la Calidad. (s.f.). Cómo medir la satisfacción del cliente.",link:"https://www.aec.es/c/document_library/get_file?folderId=53412&name=DLFE-1830.pdf"},{referencia:"Quiñones, M. E. V. (2007). Calidad y servicio. Concepto y herramientas. Universidad de la Sabana.",link:""},{referencia:"Protocolo. Claves para su gestión. (s. f.).",link:"https://www.unisabana.edu.co/feria-del-libro-2018/protocolo-claves-para-su-gestion/"}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Responsable del ecosistema",centro:"Dirección General"},{nombre:"Claudia Johana Gómez",cargo:"Responsable de línea de producción",centro:"Centro Agroturístico - Regional Santander"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Laura Paola Gelvez Manosalva",cargo:"Diseñadora instruccional",centro:"Centro Agroturístico - Regional Santander"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Yazmin Rocio Figueroa Pacheco",cargo:"Diseñadora de contenidos digitales",centro:"Centro Agroturístico - Regional Santander"},{nombre:"Lucenith Pinilla Moreno",cargo:"Desarrolladora <i>full-stack</i> Junior",centro:"Centro Agroturístico - Regional Santander"},{nombre:"María Alejandra Vera Briceño",cargo:"Animadora y producción audiovisual",centro:"Centro Agroturístico - Regional Santander"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Yineth Ibette González Quintero",cargo:"Validadora de recursos educativos digitales",centro:"Regional Santander - Centro Agroturístico"},{nombre:"Andrea Ardila Chaparro",cargo:"Evaluadora para contenidos inclusivos y accesibles",centro:"Regional Santander - Centro Agroturístico"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});o["a"].prototype.$config=v;var k=a("9224");o["a"].prototype.$package=k,new o["a"]({router:b,store:g["a"],render:function(e){return e(u)}}).$mount("#app")},"71f8":function(e,n,a){e.exports=a.p+"img/banner-principal-decorativo-1.d35936de.svg"},"7d72":function(e,n,a){e.exports=a.p+"img/banner-principal-decorativo-3.c57ab1c9.svg"},"8f04":function(e,n,a){e.exports=a.p+"img/banner-principal-decorativo-2.1f41c3af.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.2","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.2","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},9710:function(e,n,a){e.exports=a.p+"img/imagen.fa3de1ad.png"},a00a:function(e,n,a){e.exports=a.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,n,a){},ce7c:function(e,n,a){e.exports=a.p+"img/fondo-banner-principal.24144f7a.png"}});
//# sourceMappingURL=app.1194fd88.js.map