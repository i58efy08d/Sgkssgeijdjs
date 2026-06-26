export function renderAdvice(advice, container) {
    container.innerHTML = `
        <div class="prophecy-card">
            <div class="prophecy-id">№${advice.id}</div>
            <p>${advice.advice}</p>
        </div>
    `;
}
