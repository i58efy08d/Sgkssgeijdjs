export async function getProphecy() {
    const response = await fetch('https://api.adviceslip.com/advice');

    if (!response.ok) {
        throw new Error('Не вдалося завантажити дані');
    }

    const data = await response.json();
    return data.slip;
}
