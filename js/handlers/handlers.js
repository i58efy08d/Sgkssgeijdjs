import { getProphecy } from '../api/api.js';
import { renderAdvice } from '../ui/ui.js';
import { saveAdvice } from '../storage/storage.js';

export async function handleSubmit(container) {
    const advice = await getProphecy();

    renderAdvice(advice, container);

    saveAdvice(advice);
}
