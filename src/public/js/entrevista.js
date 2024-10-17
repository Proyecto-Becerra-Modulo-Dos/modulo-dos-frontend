// url para el consumo del front del backend

const apex = "http://localhost:3000/entrevista/programarentrevista";

// fetch




const agregarEntrevista = () =>{
    const nombre = document.getElementById("nombre").value;
    const tipo = document.getElementById("tipo").value;
    const fecha = document.getElementById("fecha").value;
    const descripcion = document.getElementById("descripcion").value;
   
    
    if(!nombre || !tipo|| !fecha || !descripcion){
        Swal.fire("Campos vacíos!");
        return; 
    }


    const options={
        method : "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            idReclutamiento: nombre,
            tipo_entrevista:tipo,
            fecha_entrevista:fecha,
            descripcion:descripcion,
        })
    }
    fetch(apex,options)
    .then(response => response.json())
    .then(data => {
        if(data.error == true){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Error al agregar nota!",
            })
        }else{
            
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Entrevista agregada Correctamente",
                showConfirmButton: false,
                timer: 3000
            });
            setTimeout(function () {
                // location.href= "/pricipal";
                location.reload();
            }, 1000);
            
        }
    })
    .catch(error => console.error(error));
    
}   
