let nombreConsola;
let precioConsola;
let pesoConsola;
let fotoConsola;

let linea=document.getElementById("linea");
let linea2=document.getElementById("linea2");
let convertidor=document.getElementById("cop");
let boton=document.getElementById("boton");
let botonLimpiar=document.getElementById("botonLimpiar");

convertidor.addEventListener("click",convertidorcop)
boton.addEventListener("click",capturarDatos);
botonLimpiar.addEventListener("click",limpiarCarrito);

linea.classList.add("invisible")
linea2.classList.add("invisible")
convertidor.classList.add("invisible")

function capturarDatos(){


    let consolaElegida=document.getElementById("productos").value;
    seleccionarConsola(consolaElegida);

    let cantidad=document.getElementById("cantidad").value;
    
    let pildora=document.getElementById("pildora");
    pildora.textContent=cantidad;
    pildora.classList.remove("invisible");
    pildora.classList.add("visible");
    
    let direccion=document.getElementById("comentarios").value;
    
    let fotoCarrito=document.getElementById("fotoCarrito");
    fotoCarrito.src=fotoConsola;

    let tituloCarrito=document.getElementById("tituloCarrito");
    tituloCarrito.textContent=nombreConsola;

    let precioIndividual=document.getElementById("precioUnitarioCarrito");
    precioIndividual.textContent=`Costo unitario: $${precioConsola} USD`;

    let pesoIndividual=document.getElementById("pesoUnitarioCarrito");
    pesoIndividual.textContent=`Peso unitario: ${pesoConsola} Lb`;

    let pesoTotal=document.getElementById("pesoTotalCarrito");
    pesoTotal.textContent=`Peso Total del envio: ${pesoConsola*cantidad}Lb`;
    
    let costoCasillero=document.getElementById("costoCasillero");
    costoCasillero.textContent=`Costo Casillero: $${calcularCostoCasillero(pesoConsola,cantidad)} USD`;
    
    let costoImpuestos=document.getElementById("costoImpuestos");
    costoImpuestos.textContent=`Costo venta(impuestos):$${calcularCostoImpuestos(precioConsola,cantidad)}`;

    let costoTotal=document.getElementById("costoTotal");
    costoTotal.textContent=`Costo Total: $${(calcularCostoCasillero(pesoConsola,cantidad))+(calcularCostoImpuestos(precioConsola,cantidad))} USD`;
    
    linea.classList.remove("invisible")
    linea2.classList.remove("invisible")
    convertidor.classList.remove("invisible")
}

function seleccionarConsola(opcion){

    let consolas={
        nombres:Array("Phone 12","Nintendo Switch","XBOX Serie X","PlayStation5","airpods","audifonos xbox","Redmi watch","Macbook","ipad","tarjeta netflix","tarjeta xbox","camara sony","alexa","parlantes","dron" ),
        precios:Array(699,409,700,750,35,159,200,1120,780,470,699,409,700,750,35,159),
        pesos:Array(162,4.75,13.1,14.2,38,4,16.8,175,4.48,4.30,162,4.75,13.1,14.2,38,4.48 ),
        fotos:Array("img/iphone.webp","https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/nintendo.jpg?raw=true","https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/xbox.jpg?raw=true","https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/ps5.jpg?raw=true","img/airpods.jpg","img/airx.jpg","img/smartwatch.jpg","img/macbook.webp","img/ipad.jpg","img/cardn.webp","img/cardxbox.jpg","img/sony.jpg","img/alexa.webp","img/parlante.jpg","img/dron.jpg"),
    }

    if(opcion==1){

        nombreConsola=consolas.nombres[0];
        precioConsola=consolas.precios[0];
        pesoConsola=consolas.pesos[0];
        fotoConsola=consolas.fotos[0];

    }else if(opcion==2){

        nombreConsola=consolas.nombres[1];
        precioConsola=consolas.precios[1];
        pesoConsola=consolas.pesos[1];
        fotoConsola=consolas.fotos[1];

    }else if(opcion==3){

        nombreConsola=consolas.nombres[2];
        precioConsola=consolas.precios[2];
        pesoConsola=consolas.pesos[2];
        fotoConsola=consolas.fotos[2];

    }else if(opcion==4){

        nombreConsola=consolas.nombres[3];
        precioConsola=consolas.precios[3];
        pesoConsola=consolas.pesos[3];
        fotoConsola=consolas.fotos[3];

    }else if(opcion==5){

        nombreConsola=consolas.nombres[4];
        precioConsola=consolas.precios[4];
        pesoConsola=consolas.pesos[4];
        fotoConsola=consolas.fotos[4];

    }else if(opcion==6){

        nombreConsola=consolas.nombres[5];
        precioConsola=consolas.precios[5];
        pesoConsola=consolas.pesos[5];
        fotoConsola=consolas.fotos[5];

    }else if(opcion==7){

        nombreConsola=consolas.nombres[6];
        precioConsola=consolas.precios[6];
        pesoConsola=consolas.pesos[6];
        fotoConsola=consolas.fotos[6];

    }else if(opcion==8){

        nombreConsola=consolas.nombres[7];
        precioConsola=consolas.precios[7];
        pesoConsola=consolas.pesos[7];
        fotoConsola=consolas.fotos[7];
    }else if(opcion==9){

        nombreConsola=consolas.nombres[8];
        precioConsola=consolas.precios[8];
        pesoConsola=consolas.pesos[8];
        fotoConsola=consolas.fotos[8];

    }else if(opcion==10){

        nombreConsola=consolas.nombres[9];
        precioConsola=consolas.precios[9];
        pesoConsola=consolas.pesos[9];
        fotoConsola=consolas.fotos[9];

    }else if(opcion==11){

        nombreConsola=consolas.nombres[10];
        precioConsola=consolas.precios[10];
        pesoConsola=consolas.pesos[10];
        fotoConsola=consolas.fotos[10];
    }else if(opcion==12){

        nombreConsola=consolas.nombres[11];
        precioConsola=consolas.precios[11];
        pesoConsola=consolas.pesos[11];
        fotoConsola=consolas.fotos[11];

    }else if(opcion==13){

        nombreConsola=consolas.nombres[12];
        precioConsola=consolas.precios[12];
        pesoConsola=consolas.pesos[12]
        fotoConsola=consolas.fotos[12];
    }else if(opcion==14){

        nombreConsola=consolas.nombres[13];
        precioConsola=consolas.precios[13];
        pesoConsola=consolas.pesos[13];
        fotoConsola=consolas.fotos[13];

    }else if(opcion==15){

        nombreConsola=consolas.nombres[14];
        precioConsola=consolas.precios[14];
        pesoConsola=consolas.pesos[14];
        fotoConsola=consolas.fotos[14];



   

    
    }else{
        nombreproducto=null;
        precioproducto=null;
        pesoproducto=null;
        fotoproducto=null;

    }


}

function calcularCostoCasillero(pesoConsola,cantidad){

    let costoCasillero=0;
    let pesoTotalEnvio=pesoConsola*cantidad;

    if(pesoTotalEnvio<=20){

        costoCasillero=85;

    }else{ 

        let pesoExtra=pesoTotalEnvio-20;
        costoCasillero=85+(pesoExtra*2);

    }
    
    return costoCasillero;
}

function calcularCostoImpuestos(costoConsola,cantidad){

    const IMPUESTO_PAIS=114;
    const VALOR_SEGURO=7;

    let costoCompra=costoConsola*cantidad;
    let costoTotal=costoCompra+IMPUESTO_PAIS+VALOR_SEGURO;

    return costoTotal;

} 


function limpiarCarrito(){

    console.log("hiciste clic en limpiar");

    let fotoCarrito=document.getElementById("fotoCarrito");
    fotoCarrito.src="https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/fotoCarrito.PNG?raw=tru"

    let tituloCarrito=document.getElementById("tituloCarrito");
    tituloCarrito.textContent="Tu Carrito de Amazon está vacío";

    let costoCasillero=document.getElementById("costoCasillero");
    costoCasillero.textContent="";

    let precioIndividual=document.getElementById("precioUnitarioCarrito");
    precioIndividual.textContent="";

    let pesoTotal=document.getElementById("pesoTotalCarrito");
    pesoTotal.textContent=""

    let costoImpuestos=document.getElementById("costoImpuestos");
    costoImpuestos.textContent="";

    let costoTotal=document.getElementById("costoTotal");
    costoTotal.textContent="";

    let pesoIndividual=document.getElementById("pesoUnitarioCarrito");
    pesoIndividual.textContent="";

    linea.classList.add("invisible")
    linea2.classList.add("invisible")
    pildora.classList.add("invisible");
    pildora.classList.remove("visible");
    convertidor.classList.add("invisible")

}

function convertiraPesos(precioDolares){
    
    const TRM=3932; //3932 pesos equivalen a 1 dolar
    let precioPesos= precioDolares*TRM;

    return precioPesos;



}
function convertidorcop(){

    let cantidad=document.getElementById("cantidad").value;

    let precioIndividual=document.getElementById("precioUnitarioCarrito");
    precioIndividual.textContent=`Costo unitario: $${convertiraPesos(precioConsola)} COP`;

    let costoCasillero=document.getElementById("costoCasillero");
    costoCasillero.textContent=`Costo Casillero: $${convertiraPesos(calcularCostoCasillero(pesoConsola,cantidad))} COP`;

    let costoImpuestos=document.getElementById("costoImpuestos");
    costoImpuestos.textContent=`Costo venta(impuestos):$${convertiraPesos(calcularCostoImpuestos(precioConsola,cantidad))}COP`;

    let costoTotal=document.getElementById("costoTotal");
    costoTotal.textContent=`Costo Total: $${(convertiraPesos(calcularCostoCasillero(pesoConsola,cantidad))+(calcularCostoImpuestos(precioConsola,cantidad)))} COP`;


    
}