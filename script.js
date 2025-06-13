document.addEventListener('DOMContentLoaded', () => {
    const surpriseButton = document.getElementById('surpriseButton');
    const surpriseMessage = document.getElementById('surpriseMessage');
    const heartContainer = document.getElementById('heartContainer');
    const timelineContent = document.getElementById('timelineContent');

    surpriseButton.addEventListener('click', () => {
        surpriseMessage.classList.remove('hidden');
        surpriseButton.style.display = 'none';
        createHearts();

        // Agora, apenas removemos a classe 'hidden' da linha do tempo
        timelineContent.classList.remove('hidden');
    });

    function createHearts() {
        const numberOfHearts = 15;
        for (let i = 0; i < numberOfHearts; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 2 + 's';
            heartContainer.appendChild(heart);
        }
    }

    // Código removido:
    // - O array timelineEvents
    // - A função displayTimelineEvents()
    // - A função setupVideoInteractivity() e sua chamada

});