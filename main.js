// Lista de tareas
let tareas = [];

// Función para agregar una tarea
function agregarTarea() {
  const descripcion = document.getElementById('descripcionInput').value;
  if (descripcion.trim() !== '') {
    const tarea = {
      descripcion: descripcion,
      completada: false
    };
    tareas.push(tarea);
    mostrarTareas();
  }
}

// Función para marcar una tarea como completada, numero de la lista de tareas
function completarTarea() {
  const index = parseInt(prompt('Ingrese el número de la tarea a completar:'), 10) - 1;
  if (!isNaN(index) && index >= 0 && index < tareas.length) {
    tareas[index].completada = true;
    mostrarTareas();
  } else {
    alert('Ingrese un número de tarea válido.');
  }
}

// Función para mostrar las tareas
function mostrarTareas() {
  console.clear(); // Limpiar la consola para una mejor visualización
  console.log('Lista de Tareas:');
  tareas.forEach((tarea, index) => {
    const estado = tarea.completada ? '[X]' : '[ ]';
    console.log(`${index + 1}. ${estado} ${tarea.descripcion}`);
  });
}