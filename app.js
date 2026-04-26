// ── Descargar CV ──────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
    const descargarCVBtn = document.getElementById('descargarCV');
    if (descargarCVBtn) {
        descargarCVBtn.addEventListener('click', function () {
            window.location.href = 'docs/cv.pdf';
        });
    }
});

// ── Tarjetas: expandir / contraer texto ───────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.card').forEach(function (card) {
        const text   = card.querySelector('.card-text');
        const btn    = card.querySelector('.toggle-btn');

        if (!text || !btn) return;

        // Si el texto cabe completo, ocultamos el botón
        if (text.scrollHeight <= text.clientHeight) {
            btn.style.display = 'none';
            return;
        }

        btn.addEventListener('click', function () {
            const expanded = text.classList.toggle('expanded');
            btn.textContent    = expanded ? 'Leer menos...' : 'Leer más...';
            btn.setAttribute('aria-expanded', expanded);
        });
    });

    // Re-evaluar visibilidad del botón al redimensionar
    window.addEventListener('resize', function () {
        document.querySelectorAll('.card').forEach(function (card) {
            const text = card.querySelector('.card-text');
            const btn  = card.querySelector('.toggle-btn');
            if (!text || !btn) return;

            if (!text.classList.contains('expanded')) {
                btn.style.display = text.scrollHeight > text.clientHeight ? 'inline-block' : 'none';
            }
        });
    });
});

// ── Formulario de contacto ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
    const enviarBtn = document.querySelector('.contacto .btn');
    if (!enviarBtn) return;

    enviarBtn.addEventListener('click', function (event) {
        event.preventDefault();

        const nombre  = document.querySelector('input[placeholder="Nombre..."]');
        const correo  = document.querySelector('input[placeholder="Correo..."]');
        const mensaje = document.querySelector('textarea[placeholder="Mensaje..."]');

        if (nombre.value.trim() && correo.value.trim() && mensaje.value.trim()) {
            nombre.value  = '';
            correo.value  = '';
            mensaje.value = '';

            Swal.fire({
                title: 'Mensaje enviado',
                text: '¡Gracias por tu mensaje, me pondré en contacto contigo muy pronto!',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            });
        } else {
            Swal.fire({
                title: 'Campos vacíos',
                text: 'Por favor, llena todos los campos.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        }
    });
});

// ── Menú responsive ───────────────────────────────────────────────────────────
function responsiveMenu() {
    const nav = document.getElementById('nav');
    if (!nav) return;

    if (nav.className === '') {
        nav.className = 'responsive';

        const span     = document.createElement('span');
        span.innerHTML = 'X';
        nav.appendChild(span);

        span.onclick = function () {
            nav.className = '';
            span.remove();
        };
    } else {
        nav.className = '';
        const existingSpan = nav.querySelector('span');
        if (existingSpan) existingSpan.remove();
    }
}

// Cerrar menú al pulsar cualquier enlace
document.querySelectorAll('#nav a').forEach(function (link) {
    link.addEventListener('click', function () {
        const nav  = document.getElementById('nav');
        if (!nav) return;
        nav.className = '';
        const span = nav.querySelector('span');
        if (span) span.remove();
    });
});
