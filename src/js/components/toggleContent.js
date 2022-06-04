//toggle content with filters
export default function toggleContent() {
    const filters = document.querySelectorAll('[data-filter]');
    const content = document.querySelectorAll('[data-content]');
    const underline = document.querySelector('.portfolio__underline');
    //translate element under the certain element
    function translate(filter, element) {
        const parentPos = document.querySelector('.portfolio__togglers').getBoundingClientRect(),
            childPos = filter.getBoundingClientRect(),
            relativePos = childPos.left - parentPos.left;

        element.style.transform = `translate(${relativePos}px)`;
    }
    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            filters.forEach(f => {
                f.classList.remove('portfolio__toggler--active');
            });
            filter.classList.add('portfolio__toggler--active');
            translate(filter, underline);
            content.forEach(c => {
                c.classList.remove('portfolio__item_active');
            });
            content.forEach(c => {
                const filterName = filter.dataset.filter;
                if (c.dataset.content === filterName || filterName === '*') {
                    c.classList.add('portfolio__item_active');
                }
            });
        });
    });
}