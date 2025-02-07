document.addEventListener('DOMContentLoaded', () => {
    const numbers = document.querySelectorAll('.number');
    let currentIndex = numbers.length - 1;  // Start from the rightmost number

    function animateNumbers() {
        numbers.forEach((number, index) => {
            if (index === currentIndex) {
                number.style.color = 'black';
            } else {
                number.style.color = '#e0e0e0';
            }
        });

        currentIndex = (currentIndex - 1 + numbers.length) % numbers.length;  // Move left, wrap around to the right
    }

    setInterval(animateNumbers, 500);
});