
const apex = "http://localhost:3000/mostrar/permiso";



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
                    <td>${data[i].permisos}</td>
                    <td class="text-center">
                        <button class="btn btn-primary">Activar</button>
                    </td>
                </tr>
        
        `
    }
    document.getElementById("contenido").innerHTML = body;
}