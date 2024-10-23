
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
                    <td><a href="/admin/respo" class="btn-r">Responsabilidad</a></td>
                </tr>
        
        `
    }
    document.getElementById("cuerpo").innerHTML = body;
}