function guardarNota() {
    const nota = document.getElementById('nota').value;
    const fecha = new Date(document.getElementById('fecha').value).getTime();
    localStorage.setItem('notaGuardada', nota);
    localStorage.setItem('fechaApertura', fecha);
    alert('Nota guardada en la caja fuerte.');
}

function limpiarNota() {
    document.getElementById('nota').value = '';
}

function evaluarHoraFecha() {
    const fechaGuardada = localStorage.getItem('fechaApertura');
    const fechaActual = new Date().getTime();
    if (fechaActual >= fechaGuardada) {
        mostrarNotaGuardada();
    } else {
        const fechaDesbloqueo = new Date(parseInt(fechaGuardada)).toLocaleString();
        alert('La nota se desbloqueará el ' + fechaDesbloqueo);
    }
}

function mostrarNotaGuardada() {
    const notaGuardada = localStorage.getItem('notaGuardada');
    document.getElementById('textoNota').textContent = notaGuardada;
    document.getElementById('contenidoNota').style.display = 'block';
}