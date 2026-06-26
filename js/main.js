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
});
