document.addEventListener('DOMContentLoaded', () => {
    const footer = document.getElementById('footer');
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.innerHTML = `<p>Desafio de Docker Compose - © ${currentYear}</p>`;
    }
    console.log('Página carregada e script executado!');
});