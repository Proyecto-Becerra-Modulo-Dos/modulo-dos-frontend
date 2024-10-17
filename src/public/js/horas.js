const BTN_GUARDAR = document.querySelector(".btn-guardar");
async function postHours(id_politicas_horas, hora_inicio, hora_fin, id_empleado) {
    const request = await fetch("http://localhost:3000/empleados/registrarHoras", {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify({
            id_politicas_horas: id_politicas_horas,
            hora_inicio: hora_inicio,
            hora_fin: hora_fin,
            id_empleado: id_empleado
        })
    })
    const response = await request.json();
    return response;
}

BTN_GUARDAR.addEventListener("click", async () => {
    const HORA_INICIO = document.querySelector(".horaInicio").value;
    const HORA_FIN = document.querySelector(".horaFin").value;
    const response = await postHours(1, HORA_INICIO, HORA_FIN, 6)
    alert(response.message)
});