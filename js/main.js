import { handleSubmit } from './handlers/handlers.js';
import { getSavedAdvice } from './storage/storage.js';
import { renderAdvice } from './ui/ui.js';

const form = document.getElementById('prophecy-form');
const output = document.getElementById('response-output');

const saved = getSavedAdvice();

if (saved) {
    renderAdvice(saved, output);
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    await handleSubmit(output);
    const videoBtn = document.getElementById('videoBtn');
const videoOverlay = document.getElementById('videoOverlay');
const closeVideo = document.getElementById('closeVideo');
const secretVideo = document.getElementById('secretVideo');

if (videoBtn && videoOverlay && closeVideo && secretVideo) {
    videoBtn.addEventListener('click', () => {
        videoOverlay.style.display = 'flex';
    });

    closeVideo.addEventListener('click', () => {
        videoOverlay.style.display = 'none';
        secretVideo.pause();
        secretVideo.currentTime = 0;
    });
}
});
