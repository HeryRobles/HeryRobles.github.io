//Funncion para cargar animaciones
function cargarAnimaciones(){
    $(function(){
        $('.chart1').easyPieChart({
            size:160,
            barColor:"#0788b8",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });

        $('.chart2').easyPieChart({
            size:160,
            barColor:"#0788b8",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });

        $('.chart3').easyPieChart({
            size:160,
            barColor:"#0788b8",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });

        $('.chart4').easyPieChart({
            size:160,
            barColor:"#0788b8",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });

        $('.chart5').easyPieChart({
            size:160,
            barColor:"#0788b8",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });

        $('.chart6').easyPieChart({
            size:160,
            barColor:"#0788b8",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });
    })
}

//Codigo para mostrar msje en sweetAlert para contacto

document.addEventListener('DOMContentLoaded', function () {
    
    const enviarBtn = document.querySelector('.contacto .btn');

    enviarBtn.addEventListener('click', function (event) {
        event.preventDefault(); 

        const nombreInput = document.querySelector('input[placeholder="Nombre..."]');
        const correoInput = document.querySelector('input[placeholder="Correo..."]');
        const mensajeTextarea = document.querySelector('textarea[placeholder="Mensaje..."]');

        if (nombreInput.value.trim() !== '' && correoInput.value.trim() !== '' && mensajeTextarea.value.trim() !== '') {
            nombreInput.value = '';
            correoInput.value = '';
            mensajeTextarea.value = '';

            Swal.fire({
                title: 'Mensaje enviado',
                text: '¡Gracias por tu mensaje, me pondré en contacto con usted muy pronto!',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            });
        } else {
            Swal.fire({
                title: 'Error',
                text: 'Por favor, llena todos los campos',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        }
    });
});

//Codigo para descargar CV

document.addEventListener('DOMContentLoaded', function () {
    const descargarCVBtn = document.getElementById('descargarCV');

    descargarCVBtn.addEventListener('click', function () {
        const rutaPDF = 'docs/cv.pdf';

        window.location.href = rutaPDF;
    });
});


cargarAnimaciones();