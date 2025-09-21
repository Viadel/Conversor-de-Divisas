/* este conversor muy util y conpleto es de jab 
canbian dollares por pesos colombianos video jab #12
caso practico con javascript*/
 
 
 

    function convertir(a,b) {
      let resultado = a*b ;
      return resultado
      
     }
     var dinero = 10;
     var cambio = 4500 ;
    

     window.onload = inicio;

     function iniciar_conversion(){
      cambio =document.getElementById("cambio").value ;
      dinero = document.getElementById("dinero").value ;
                 // condicion   2daexprexion   sino
       dinero =( dinero>0)? dinero         :1 ;
    // como decirlo con if
      
     recibo= convertir (dinero,cambio);
     document.getElementById("conversiones").innerHTML += `${dinero} son ${recibo} $colombianos
     <br> <br>`
     //colocar el foco en el input y borrar input :
     document.getElementById("dinero").value = "";
     document.getElementById("dinero").focus ;
     }
     function inicio() {
      document.getElementById("dinero").onkeydown = teclado;
      document.getElementById("cambio").value = cambio;
      document.getElementById("boton").onclick=iniciar_conversion;
     }
     function teclado(e) {
      // para ver cual es el numero de la tecla
      //que presione uso el codigo del reglon 50-51 
      let codigo_tecla =e.keyCode;
       //alert(codigo_tecla);
       //la (e) es para preguntar # de la tecla presionada 
       // creo esta condicional para que cuando press 
       // la tecla enter regrese y ejecute la funcion
       //iniciar_conversion();

       if (codigo_tecla==13){
       iniciar_conversion();
     }
    }
