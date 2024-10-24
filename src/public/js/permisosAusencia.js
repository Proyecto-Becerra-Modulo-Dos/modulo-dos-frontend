const mostrarMensaje = (tipo, mensaje) => {
  // Intentar usar SweetAlert2 si está disponible
  if (typeof Swal !== 'undefined') {
    Swal.fire({
      icon: tipo === 'success' ? 'success' : 'error',
      title: tipo === 'success' ? '¡Éxito!' : 'Error',
      text: mensaje,
      confirmButtonText: 'Aceptar'
    });
  } else {
    // Fallback a alertas personalizadas si SweetAlert2 no está disponible
    const alertDiv = document.getElementById('mensaje-alert');
    alertDiv.className = `alert alert-${tipo}`;
    alertDiv.textContent = mensaje;
    alertDiv.style.display = 'block';

    // Ocultar el mensaje después de 5 segundos
    setTimeout(() => {
      alertDiv.style.display = 'none';
    }, 5000);
  }
};
const permiso_ausencia = async (event) => {
  event.preventDefault(); // Prevenir el envío tradicional del formulario

  // Mostrar indicador de carga
  const submitButton = event.target.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  submitButton.innerHTML = 'Enviando...';

  try {
    // Obtener los valores del formulario
    const fecha = document.getElementById("fecha").value;
    const tipo = document.getElementById("tipo-permiso").value;
    const motivo = document.getElementById("motivo").value;
    const id_empleado = sessionStorage.getItem("ID");
    const url = document.getElementById("url").value;

    // Validar que todos los campos estén completos
    if (!fecha || !tipo || !motivo || !id_empleado) {
      throw new Error('Todos los campos son requeridos');
    }

    // Validar formato de fecha
    if (new Date(fecha) < new Date()) {
      throw new Error('La fecha no puede ser anterior a hoy');
    }

    // Construir la URL
    const urlBuho = `${url}/empleados/permisoAusencia`;

    // Construir el objeto de datos
    const datos = {
      fecha_ausencia: fecha,
      tipo_permiso: tipo,
      motivo: motivo,
      id_empleado: id_empleado
    };

    // Configurar la petición
    const options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        // Agregar aquí otros headers si son necesarios (ej: autorización)
      },
      body: JSON.stringify(datos)
    };

    // Realizar la petición
    const response = await fetch(urlBuho, options);
    const data = await response.json();

    // Verificar si la respuesta fue exitosa
    if (!response.ok) {
      throw new Error(data.message || 'Error al enviar la solicitud');
    }

    // Mostrar mensaje de éxito
    Swal.fire({
      icon: 'success',
      title: '¡Éxito!',
      text: 'Permiso de ausencia enviado correctamente',
      confirmButtonText: 'Aceptar'
    }).then(() => {
      // Redireccionar o limpiar el formulario
      document.getElementById("permisoForm").reset();
      // Opcional: redireccionar
      // window.location.href = '/dashboard';
    });

  } catch (error) {
    // Mostrar mensaje de error
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: error.message || 'Ocurrió un error al procesar la solicitud',
      confirmButtonText: 'Aceptar'
    });
    console.error("Error:", error);
  } finally {
    // Restaurar el botón
    submitButton.disabled = false;
    submitButton.innerHTML = 'Enviar solicitud';
  }
};

// Función para formatear la fecha en el formato requerido
const formatearFecha = (fecha) => {
  const d = new Date(fecha);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// Establecer la fecha mínima como hoy
window.onload = () => {
  const fechaInput = document.getElementById('fecha');
  const hoy = new Date();
  fechaInput.min = formatearFecha(hoy);
};
