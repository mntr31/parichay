document.addEventListener('DOMContentLoaded', () => {
    const numbers = document.querySelectorAll('.number');
    let currentIndex = 0;

    function animateNumbers() {
        numbers.forEach((number, index) => {
            if (index === currentIndex) {
                number.style.color = 'black';
            } else {
                number.style.color = '#e0e0e0';
            }
        });

        currentIndex = (currentIndex + 1) % numbers.length;
    }

    setInterval(animateNumbers, 500);
});