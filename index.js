
    function observeSections() {
        const sections = document.querySelectorAll('#meg, #work, #contact');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const elements = entry.target.querySelectorAll('h1, h2, p, .project-frame');
                    elements.forEach((element, index) => {
                        setTimeout(() => {
                            element.classList.add('animate__animated');

                            if (element.tagName === 'H1') {
                                element.classList.add('animate__fadeInTopLeft');
                            } else if (element.tagName === 'H2') {
                                element.classList.add('animate__fadeInBottomLeft');
                            } else if (element.tagName === 'P') {
                                element.classList.add('animate__fadeInTopRight');
                            } else if (element.classList.contains('project-frame')) {
                                element.classList.add('animate__fadeIn');
                            }
                        }, index * 300); 
                    });

                    observer.unobserve(entry.target); 
                }
            });
        }, { threshold: 0.5 }); 

        sections.forEach(section => {
            observer.observe(section);
        });
    }
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active'); 
});

    document.addEventListener('DOMContentLoaded', observeSections);
