window.addEventListener('DOMContentLoaded', (event) => {
    const watchTrailerBtn = document.getElementById('watchTrailerBtn');
    const videoPopup = document.getElementById('videoPopup');
    const closeBtn = document.getElementById('closeBtn');

    watchTrailerBtn.addEventListener('click', () => {
        videoPopup.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        videoPopup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === videoPopup) {
            videoPopup.style.display = 'none';
        }
    });
});
