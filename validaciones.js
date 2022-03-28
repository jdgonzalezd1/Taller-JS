function validaciones(){            
    let y = document.forms[formularioTaller][numDoc].value;
    if(y == ""){
        alert("Seleccione una opción valida");
        return false;
    }
    
}
function requerido(){
    document.getElementById(this).required = true;
}
function checked(){
    let x = document.getElementById("exp1");
    window.alert(x);            
}
function limpiar(){
    
}
