function validaNombreApellido(nombre,apellido){ 

    let regAlfa = /^[a-zA-Z]+$/;

    if(regAlfa.test(nombre) && regAlfa.test(apellido) ){
        alert('Nombre y apellido OK');
        return true;
    }
    
    else{
        alert('Por favor verifique su nombre o apellido. Solo se aceptan letras para esos campos.');
        return false;
    }
}

function validateEmail(email){

    let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(regEmail.test(email)){
        alert('email OK');
        return true;
    }
    else{
        alert('Please enter valid email.');
        return false;
    }
}

function validateForm(){
    
    var nombre = document.forms["myForm"]["fname"].value;
    var apellido = document.forms["myForm"]["lastname"].value;
    var email = document.forms["myForm"]["email"].value;

    if(validaNombreApellido(nombre,apellido) && validateEmail(email)){
        return true;
    }else{
        return false;
    }

}