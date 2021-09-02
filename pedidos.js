let pedidos=[

    {
        id:1,
        nombre:"iphone 12",
        precio:550,
        peso:055,
        cantidad:1,
        foto:"https://noticiast.com/wp-content/uploads/2021/07/iPhone-14-Pro.jpg"

    },

    {
        id:2,
        nombre:"Nintendo switch",
        precio:750,
        peso:9.55,
        cantidad:1,
        foto:"https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/nintendo.jpg?raw=true"

    },
    {
        id:3,
        nombre:"Xbox Serie X ",
        precio:40.75,
        peso:4.75,
        cantidad:1,
        foto:"https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/xbox.jpg?raw=true"

    },
    {
        id:4,
        nombre:"PlayStation5",
        precio:40.75,
        peso:4.75,
        cantidad:1,
        foto:"https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/ps5.jpg?raw=true"

    },
    {
        id:5,
        nombre:"airpods",
        precio:35.99,
        peso:0.489375,
        cantidad:1,
        foto:"https://www.anovo.es/wp-content/uploads/2020/01/airpods-pro-caracteristicas-1080x664.jpg"

    },
    {
        id:6,
        nombre:"audifonos xbox",
        precio:19.66 ,
        peso:19.66 ,
        cantidad:1,
        foto:"https://compass-ssl.xbox.com/assets/ef/0b/ef0bc2f8-526e-45bb-85cc-7c7428ca63a7.jpg?n=2100499_gallery_2_1056x594.jpg"

    },
    {
        id:7,
        nombre:"Redmi watch",
        precio:58.99,
        peso:452,
        cantidad:1,
        foto:"https://i.gadgets360cdn.com/large/redmi_watch_image_xiaomi_1620116535553.jpg"

    },
    {
        id:8,
        nombre:"Macbook",
        precio:12.99 ,
        peso:15.7 ,
        cantidad:1,
        foto:"https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/05/macbook-air.jpg?itok=ElZsRKzF"

    },
    {
        id:9,
        nombre:"ipad ",
        precio:20.99 ,
        peso:39.7 ,
        cantidad:1,
        foto:"https://i.blogs.es/329275/apple_new-ipad-air_new-design_09152020/1366_2000.jpg"

    },
    {
        id:10,
        nombre:"tarjeta netflix",
        precio:41.59 ,
        peso:10.2 ,
        cantidad:1,
        foto:"https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2017/08/252453-como-usar-nuevas-tarjetas-regalo-netflix.jpg?itok=VzPyXSEW"

    },
    {
        id:11,
        nombre:"tarjeta xbox",
        precio:37.95 ,
        peso:10.2 ,
        cantidad:1,
        foto:"https://m.media-amazon.com/images/I/61TB4ka4NbS._SL1500_.jpg"

    },
    {
        id:12,
        nombre:"camara sony",
        precio:15.99 ,
        peso:27.6 ,
        cantidad:1,
        foto:"https://ss627.liverpool.com.mx/xl/1090997153.jpg"

    },
    {
        id:13,
        nombre:"alexa",
        precio:8.49 ,
        peso:0.19,
        cantidad:1,
        foto:"https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/841667137742.jpg"

    },
    {
        id:14,
        nombre:"Parlantes",
        precio:4.2,
        peso:520,
        cantidad:1,
        foto:"https://www.compudemano.com/wp-content/uploads/2020/06/jbl-flip-5.jpg"

    },
    {
        id:15,
        nombre:"dron",
        precio:209.99,
        peso:0.6 ,
        cantidad:1,
        foto:"https://www.muycomputer.com/wp-content/uploads/2020/11/DJI_Mini2.jpg"

    }
];

let contenedorPadre=document.getElementById("padre");
//forEach es para dar vueltas 

pedidos.forEach(function(pedido){
    
    let columna=document.createElement("div");
    columna.classList.add("col");

    let tarjeta=document.createElement("div");
    tarjeta.classList.add("card");
    tarjeta.classList.add("h-100");

    let imagen=document.createElement("img");
    imagen.classList.add("card-img-top");
    imagen.classList.add("img-fluid");
    imagen.src=pedido.foto;

    let cuerpo=document.createElement("div");
    cuerpo.classList.add("card-boby");

    let titulo=document.createElement("h5");
   titulo.classList.add("card-title");
   titulo.textContent=`producto:${pedido.nombre}`;

   let texto=document.createElement("p");
   texto.classList.add("card-title");
   texto.textContent=`precio:${pedido.precio}`;

   let texto2=document.createElement("p");
   texto2.classList.add("card-title");
   texto2.textContent=`peso:${pedido.peso}`;

   let texto3=document.createElement("p");
   texto3.classList.add("card-title");
   texto3.textContent=`cantidad:${pedido.cantidad}`;


   let boton=document.createElement("button");
   boton.classList.add("btn");
   boton.classList.add("btn-outline-success");
   boton.classList.add("btn-dark");
   boton.classList.add("w-100");

    let boton2=document.createElement("button");
    boton2.classList.add("btn");       
    boton2.classList.add("btn-dark");
    boton2.classList.add("btn-outline-danger");
    boton2.classList.add("w-100");
    boton2.classList.add("mt-3");

    let icono=document.createElement("i");
    icono.classList.add("fa-pencil-alt");
    icono.classList.add("fas"); 

    let icono2=document.createElement("i");
    icono2.classList.add("fa-trash-alt");
    icono2.classList.add("fas"); 


    boton.appendChild(icono)
    boton2.appendChild(icono2)
    cuerpo.appendChild(titulo)
    cuerpo.appendChild(texto)
    cuerpo.appendChild(texto2)
    cuerpo.appendChild(texto3)
    cuerpo.appendChild(boton)
    cuerpo.appendChild(boton2)
    tarjeta.appendChild(imagen)
    tarjeta.appendChild(cuerpo)
    columna.appendChild(tarjeta)
    contenedorPadre.appendChild(columna)



});