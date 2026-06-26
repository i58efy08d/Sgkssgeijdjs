export function saveAdvice(advice) {
    localStorage.setItem('lastAdvice', JSON.stringify(advice));
}

export function getSavedAdvice() {
    return JSON.parse(localStorage.getItem('lastAdvice'));
}
