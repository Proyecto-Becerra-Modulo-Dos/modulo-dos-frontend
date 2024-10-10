// url para el consumo del front del backend

const apex = "http://localhost:3000/oferta/agregaroferta";

// fetch




const agregarOferta = () =>{
    const beneficio = document.getElementById("beneficio").value;
    const fecha = document.getElementById("fecha").value;
    const puesto = document.getElementById("puesto").value;
    const descripcion = document.getElementById("descripcion").value;
    const experiencia = document.getElementById("experiencia").value;
    const salario = document.getElementById("salario").value;
    
    if(!beneficio || !fecha|| !puesto || !descripcion || !experiencia || !salario){
        Swal.fire("Campos vacíos!");
        return; 
    }


    const options={
        method : "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            idBeneficio: beneficio,
            fecha_fin_oferta:fecha,
            titulo_puesto:puesto,
            descripcion_puesto:descripcion,
            ano_experiencia:experiencia,
            salario_oferta:salario
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
                title: "Nota agregada Correctamente",
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

    console.log(beneficio);
    console.log(fecha);
    console.log(puesto);
    console.log(descripcion);
    console.log(experiencia);
    console.log(salario);
    
    
}   
