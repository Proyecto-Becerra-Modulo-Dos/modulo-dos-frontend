document.getElementById("submitBtn").addEventListener("click", function () {
    // Obtener todas las calificaciones
    const calificaciones = [
        document.getElementById("contador1").value,
        document.getElementById("contador2").value,
        document.getElementById("contador3").value,
        document.getElementById("contador4").value,
        document.getElementById("contador5").value,
        document.getElementById("contador6").value
    ];

    const preguntas = [
        "¿(nom empleado) ha mostrado iniciativa al proponer mejoras en su trabajo?",
        "¿(nom empleado) ha mantenido una comunicación efectiva con sus compañeros de equipo?",
        "¿(nom empleado) ha demostrado adaptabilidad ante cambios en su carga laboral?",
        "¿(nom empleado) ha respetado los plazos establecidos para la entrega de proyectos?",
        "¿(nom empleado) ha colaborado de manera constructiva en proyectos grupales?",
        "¿(nom empleado) ha recibido feedback de manera positiva y lo ha implementado?"
    ];

    // Verificar si todas las calificaciones están llenas
    const todasLlenas = calificaciones.every(calificacion => calificacion !== "");

    if (todasLlenas) {
        alert("Se ha calificado correctamente.");

        // Generar el PDF con las preguntas y calificaciones usando jsPDF
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        doc.setFontSize(12);
        doc.text("Evaluación de Desempeño", 20, 20);
        doc.text("Resultados de las calificaciones:", 20, 30);

        preguntas.forEach((pregunta, index) => {
            doc.text(`${index + 1}. ${pregunta}`, 20, 40 + index * 20);
            doc.text(`Calificación: ${calificaciones[index]}`, 20, 50 + index * 20);
        });

        // Guardar el PDF
        doc.save("evaluacion_desempeno.pdf");

    } else {
        alert("No se han llenado todas las calificaciones.");
    }
});
