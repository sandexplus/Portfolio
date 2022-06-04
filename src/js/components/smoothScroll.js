export default function smoothScroll() {
    const links = document.querySelectorAll('a[href*="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const blockID = link.getAttribute('href');
            document.querySelector('' + blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
}