document.addEventListener('scroll', function() {

    const navbar = document.getElementById('navbar');

    const sections = document.querySelectorAll('section');

    const navLinks = document.querySelectorAll('#navbar a');

    if (window.scrollY > 50) {

        navbar.style.backgroundColor = '#444';

    } else {

        navbar.style.backgroundColor = '#333';

    }

    sections.forEach((section, index) => {

        const sectionTop = section.offsetTop - 60;

        const sectionHeight = section.clientHeight;

        

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {

            navLinks.forEach(link => link.classList.remove('active'));

            navLinks[index].classList.add('active');

        }

    });

});

// Smooth scrolling

const navLinks = document.querySelectorAll('#navbar a');

navLinks.forEach(link => {

    link.addEventListener('click', function(event) {

        event.preventDefault();

        const targetId = this.getAttribute('href').substring(1);

        const targetSection = document.getElementById(targetId);

        window.scrollTo({

            top: targetSection.offsetTop - 50,

            behavior: 'smooth'

        });

    });

});

