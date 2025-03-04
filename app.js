// Función para cargar animaciones
$(function () {
    $('.chart1').animate({ width: '80%' }, 2000); 
    $('.chart2').animate({ width: '60%' }, 2000); 
    $('.chart3').animate({ width: '90%' }, 2000); 
    $('.chart4').animate({ width: '70%' }, 2000); 
    $('.chart5').animate({ width: '50%' }, 2000); 
    $('.chart6').animate({ width: '75%' }, 2000); 
});

// Código para mostrar mensaje en SweetAlert para contacto
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

// Código para descargar CV
document.addEventListener('DOMContentLoaded', function () {
    const descargarCVBtn = document.getElementById('descargarCV');

    descargarCVBtn.addEventListener('click', function () {
        const rutaPDF = 'docs/cv.pdf';
        window.location.href = rutaPDF;
    });
});


// Código para expandir tarjeta de servicios
document.addEventListener('DOMContentLoaded', function () {
    function toggleReadMore() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            const cardText = card.querySelector('.card-text');
            const toggleText = card.querySelector('.toggle-text');

            // Mostrar o ocultar el enlace "Leer más" dependiendo de si el texto está cortado
            if (cardText.scrollHeight > cardText.clientHeight) {
                toggleText.style.display = 'block';
            } else {
                toggleText.style.display = 'none';
            }
        });
    }

    // Llamamos a la función para asegurarnos de que las tarjetas estén bien inicializadas
    toggleReadMore();

    // Evento de clic para expandir o contraer el texto
    document.querySelectorAll('.toggle-text').forEach(link => {
        link.addEventListener('click', function (e) {
            const cardText = e.target.closest('.card').querySelector('.card-text');
            const toggleText = e.target;

            // Cambiar la clase y el texto de "Leer más" / "Leer menos"
            if (cardText.classList.contains('expanded')) {
                cardText.classList.remove('expanded');
                toggleText.textContent = 'Leer más...';
            } else {
                cardText.classList.add('expanded');
                toggleText.textContent = 'Leer menos...';
            }
        })
    });

    // Aseguramos que el texto se oculte o muestre correctamente al cambiar el tamaño de la ventana
    window.addEventListener('resize', toggleReadMore);
});


// Función para el menú responsive
function responsiveMenu() {
    let x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";

        // Creamos el elemento que cierra el menú
        let span = document.createElement("span");
        span.innerHTML = "X";
        document.getElementById("nav").appendChild(span);

        // Quitamos el botón eliminar cuando se hace clic sobre este
        span.onclick = function() {
            x.className = "";
            span.remove();
        }
    } else {
        x.className = "";
    }
}

// Este código es para agregar una función a cada link del menú responsive
// Cuando se presione en cualquier de los links del menú debe desaparecer el menú
const links = document.querySelectorAll("#nav a");
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function() {
        let x = document.getElementById("nav");
        x.className = "";

        // Removemos el botón eliminar
        let btnEliminar = document.querySelector("#nav span");
        if (btnEliminar) {
            btnEliminar.remove();
        }
    }
}

cargarAnimaciones();






// function cargarAnimaciones(){
//     $(function(){
//         $('.chart1').easyPieChart({
//             size:160,
//             barColor:"#0788b8",
//             scaleLength:0,
//             lineWidth:15,
//             tackColor:"#525151",
//             lineCap:"circle",
//             animate:2000,
//         });

//         $('.chart2').easyPieChart({
//             size:160,
//             barColor:"#0788b8",
//             scaleLength:0,
//             lineWidth:15,
//             tackColor:"#525151",
//             lineCap:"circle",
//             animate:2000,
//         });

//         $('.chart3').easyPieChart({
//             size:160,
//             barColor:"#0788b8",
//             scaleLength:0,
//             lineWidth:15,
//             tackColor:"#525151",
//             lineCap:"circle",
//             animate:2000,
//         });

//         $('.chart4').easyPieChart({
//             size:160,
//             barColor:"#0788b8",
//             scaleLength:0,
//             lineWidth:15,
//             tackColor:"#525151",
//             lineCap:"circle",
//             animate:2000,
//         });

//         $('.chart5').easyPieChart({
//             size:160,
//             barColor:"#0788b8",
//             scaleLength:0,
//             lineWidth:15,
//             tackColor:"#525151",
//             lineCap:"circle",
//             animate:2000,
//         });

//         $('.chart6').easyPieChart({
//             size:160,
//             barColor:"#0788b8",
//             scaleLength:0,
//             lineWidth:15,
//             tackColor:"#525151",
//             lineCap:"circle",
//             animate:2000,
//         });
//     })
// }
