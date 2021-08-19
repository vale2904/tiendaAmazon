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
        nombres:Array("Phone 12","Nintendo Switch","XBOX Serie X","PlayStation5" ),
        precios:Array(699,409,700,750),
        pesos:Array(162,4.75,13.1,14.2),
        fotos:Array("img/phone.jpeg","img/nintendo.jpg","img/xbox.jpg","img/ps5.jpg"),
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

    }
    else{
        nombreConsola=null;
        precioConsola=null;
        pesoConsola=null;
        fotoConsola=null;

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