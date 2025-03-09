document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const targetTop = target.getBoundingClientRect().top + window.scrollY;

            window.scrollTo({
                top: targetTop,
                behavior: 'smooth'
            });
        }
    });
});
