
const apex = `http://localhost:3000/reclutamiento/datoscompletos/${idReclutamiento}`;




fetch(apex)
.then(response => response.json())
.then(data=>{
    if(data.error == true){
        console.error("Error al mostrar los datos", data);
    }else{
        document.getElementById("oferta").value = data.body[0].idOferta_trabajo,
        document.getElementById("nombre").value = data.body[0].nombre,
        document.getElementById("descripcion").value = data.body[0].descripcion,
        document.getElementById("fecha").value = data.body[0].fecha,
        document.getElementById("estado").value = data.body[0].estado


    }
})
.catch(error=> console.error("Error al mostrar los datos", error))






const btn = document.getElementById("devolver");

btn.addEventListener("click", () =>{
    window.location.href = "/admin/reclutamiento"
})