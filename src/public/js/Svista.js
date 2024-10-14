// Pie chart (Gráfico de pastel)
// Creamos el contexto del canvas donde se va a renderizar el gráfico de pastel
const pieCtx = document.getElementById('pieChart').getContext('2d');

// Inicializamos el gráfico de pastel utilizando Chart.js
const pieChart = new Chart(pieCtx, {
  type: 'pie', // Tipo de gráfico, en este caso es un gráfico de pastel
  data: {
    labels: ['Horas Trabajadas', 'Horas Extra'], // Etiquetas para los diferentes segmentos del gráfico
    datasets: [{
      data: [64.47, 35.53], // Datos que se van a representar, en este caso porcentajes
      backgroundColor: ['#f39c12', '#9b59b6'], // Colores para cada segmento
    }]
  },
  options: {
    responsive: true, // Hace que el gráfico sea adaptativo a diferentes tamaños de pantalla
    plugins: {
      legend: {
        position: 'bottom', // Coloca la leyenda en la parte inferior del gráfico
      }
    }
  }
});

// Line chart (Gráfico de líneas)
// Creamos el contexto del canvas donde se va a renderizar el gráfico de líneas
const lineCtx = document.getElementById('lineChart').getContext('2d');

// Inicializamos el gráfico de líneas utilizando Chart.js
const lineChart = new Chart(lineCtx, {
  type: 'line', // Tipo de gráfico, en este caso es un gráfico de líneas
  data: {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre'], // Etiquetas del eje x
    datasets: [
      {
        label: 'Ganancias', // Nombre del conjunto de datos
        data: [200000, 240000, 270000, 250000, 260000, 290000, 300000, 280000, 270000, 260000], // Datos para las ganancias
        borderColor: '#2ecc71', // Color de la línea
        fill: false, // No rellena el área debajo de la línea
      },
      {
        label: 'Pérdidas',
        data: [100000, 120000, 140000, 150000, 130000, 160000, 170000, 160000, 150000, 140000], // Datos para las pérdidas
        borderColor: '#e74c3c',
        fill: false, // No rellena el área debajo de la línea
      },
      {
        label: 'Gastos',
        data: [50000, 60000, 70000, 75000, 72000, 73000, 74000, 72000, 71000, 70000], // Datos para los gastos
        borderColor: '#f1c40f',
        fill: true, // Rellena el área debajo de la línea
      }
    ]
  },
  options: {
    responsive: true, // Hace que el gráfico sea adaptativo
    plugins: {
      legend: {
        position: 'top', // Coloca la leyenda en la parte superior del gráfico
      }
    },
    scales: {
      y: {
        beginAtZero: true // Asegura que el eje Y comience en 0
      }
    }
  }
});
