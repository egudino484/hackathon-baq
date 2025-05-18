document.addEventListener('DOMContentLoaded', function() {
    // Cargar navbar
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
            
            // Añadir Alpine.js dinámicamente
            const alpineScript = document.createElement('script');
            alpineScript.src = 'https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js';
            document.head.appendChild(alpineScript);
            
        });
});