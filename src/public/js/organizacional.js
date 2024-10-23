document.addEventListener('DOMContentLoaded', async () => {

    // Ventana Emergente
    document.getElementById('openModal').addEventListener('click', function () {
        document.getElementById('modalPlan').style.display = 'flex';
    });
    document.getElementById('closeModal').addEventListener('click', function () {
        document.getElementById('modalPlan').style.display = 'none';
    });
})

const apex = "http://localhost:3000/mostrar/rol";


fetch(apex)
.then(response => response.json())
.then(data =>{
    if(data.error == true){
        console.error("Error al mostrar los datos", data);
    }else{
        mostrar(data.body[0]);
    }
 
})
.catch((error) => console.error("error al mostrar", error));


const mostrar = (data)=>{
    let body = "";
    for(let i=0; i<data.length;i++){
        body += `
                <tr>
                    <td>${data[i].nombre}</td>
                    <td><button class="btn-action" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Responsabilidad</button></td>
                </tr>
        
        `
    }
    document.getElementById("cuerpo").innerHTML = body;
}