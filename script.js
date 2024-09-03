function startFocusTimer() {
    let time = 25 * 60;
    const display = document.getElementById('timeDisplay');
    const interval = setInterval(() => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        display.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        time--;

        if (time < 0) {
            clearInterval(interval);
            alert('Time for a 5-minute break!');
        }
    }, 1000);
}