document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registroForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada
        
        const url = 'https://jsonplaceholder.typicode.com/users';
        const data = {
            nombre: form.nombre.value,
            apellido: form.apellido.value,
            fechaNacimiento: form.fechaNacimiento.value 
        };
        
        // Realizar la solicitud POST usando fetch
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
           
            console.log('Respuesta del servidor:', data);
           
        })
        .catch(error => console.error('Error:', error));
    });
});
