// Función para manejar el formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    alert(`Gracias por tu mensaje, ${name}. Te contactaremos en ${email}.`);
});
