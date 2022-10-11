let botonAdicionar = document.querySelector("#adicionar-cliente");

botonAdicionar.addEventListener("click",function(event){
    event.preventDefault();

    let form = document.querySelector("#form-adicionar");
    let cliente = capturandoDatosCliente(form)
    
    let errores = validarCliente(cliente);

    if(errores.length > 0 ){
        //codigo que exibe los errores
        exhibirMensajesErrores(errores);
        return;
    }

    adicionarClienteEnLaTabla(cliente)
    form.reset(); //para limpiar el formiulario

    let mensajeErrores = document.querySelector("#mensaje-errores");
    mensajeErrores.innerHTML = "";  //inner.html = elimina los items de la tabla

});

function capturandoDatosCliente(form) {
      
    let cliente = {
        nombre : form.nombre.value,
        apellido : form.apellido.value,
        telefono : form.telefono.value,
        correo : form.correo.value,
        direccion : form.direccion.value
    }
      
    return cliente
}

function construirTr(cliente) {
 
   let clienteTr = document.createElement("tr");  
   clienteTr.classList.add("cliente")
   
    clienteTr.appendChild(construirTd(cliente.nombre, "info-nombre"));
    clienteTr.appendChild(construirTd(cliente.apellido, "info-apellido"));
    clienteTr.appendChild(construirTd(cliente.telefono, "info-tel"));
    clienteTr.appendChild(construirTd(cliente.correo, "info-correo"));
    clienteTr.appendChild(construirTd(cliente.direccion, "info-direccion"));

    return clienteTr;
}

function construirTd(dato, clase) {
    let td = document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;

    return td;
}

function validarCliente(cliente){
    let errores = [];

    if (cliente.nombre.length == 0){
        errores.push("El Nombre no puede estar vacio")
    }
    if (cliente.apellido.length == 0){
        errores.push("El Apellido no puede estar vacio")
    } 
    if (cliente.telefono.length == 0){
        errores.push("La Telefono no puede estar vacio")
    } 
    if (cliente.correo.length == 0){
        errores.push("el Correo no puede estar vacia")
    }
    if (cliente.direccion.length == 0){
        errores.push("La Direccion no puede estar vacia")
    }
    return errores;
}

function exhibirMensajesErrores(errores){
    let ul = document.querySelector("#mensaje-errores")
    ul.innerHTML = "";
    errores.forEach(function(error){  //for each es para iterar los arrays
        let li = document.createElement("li");
        li.textContent = error; 
        ul.appendChild(li);
    })
}

function adicionarClienteEnLaTabla(cliente){
    let clienteTr = construirTr(cliente)
    let tabla = document.querySelector("#tabla-clientes");
    tabla.appendChild(clienteTr);
}
