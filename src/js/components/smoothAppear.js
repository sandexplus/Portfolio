export default function smoothAppear() {
    //show element when it is in viewport
    const elements = document.querySelectorAll('.skills__skill');
    const options = {
        rootMargin: '0px 0px -200px 0px'
    };
    const observer = new IntersectionObserver((entries, self) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                self.unobserve(entry.target);
            }
        });
    }, options);
    elements.forEach(element => {
        observer.observe(element);
    });

}



