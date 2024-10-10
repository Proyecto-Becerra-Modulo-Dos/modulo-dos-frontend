 const apex = "http://localhost:3000/reclutamiento/nombre";


 fetch(apex)
 .then(response => response.json())
 .then(data => {
    if(data.error == true){
        console.error("error al mostrar los datos", data);

    }else{
        mostrar(data.body[0]);
    }
 })
 .catch((error) => console.error("error al mostrar", error));



 const mostrar = (data) =>{
    let body = "";

    for(let i = 0; i < data.length;i++){
        body += `
            <tr>
                            <td>${data[i].nombre}</td>
                            <td>
                                <button class="btn btn-primary">Programar entrevista</button>
                                <button class="btn btn-success">Vincular</button>
                                <button class="btn btn-danger">Desvincular</button>
                                <a href="" class="btn btn-primary">Mas informacion</a>
                            </td>
                        </tr>
        `
    }
    document.getElementById("tableBody").innerHTML = body;
 }