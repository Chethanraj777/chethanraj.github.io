function showTime() {
    const el = document.getElementById('currentTime');
    if (el) el.innerHTML = new Date().toUTCString();
}
showTime();
setInterval(showTime, 1000);

document.addEventListener('DOMContentLoaded', () => {
    const typewriter = document.querySelector('.typewriter');
    if (typewriter) {
        const text = typewriter.getAttribute('data-text') || '';
        let i = 0;

        const type = () => {
            if (i <= text.length) {
                typewriter.textContent = text.slice(0, i);
                i++;
                setTimeout(type, 40);
            }
        };

        type();
    }
});
