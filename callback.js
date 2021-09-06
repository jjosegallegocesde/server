console.log("iniciando...");

function ejecutarprograma(calcular){

    setTimeout(function(){
        console.log("procesando...");
        calcular();
    },5000); 

}

ejecutarprograma(function(){
    console.log("termiando...");
});