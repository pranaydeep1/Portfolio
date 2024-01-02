// showmenu
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nov-toggle'),
    navClose = document.getElementById('nav-close');
// menushowwww
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}
// hideshow
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}
// active linkkkk
const navlink = document.querySelectorAll('.nav__link');

function activeLink() {
    navlink.forEach((a) => a.classList.remove('active-link'));
    this.classList.add('active-link');
}
navlink.forEach((a) => a.addEventListener('click', activeLink));

//backgrouund header
function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}


window.addEventListener('scroll', scrollHeader);
// mixitup filterrrrr
let mixerProjects = mixitup('.projects__container', {
    selectors: {
        target: '.projects__item'
    },
    animation: {
        duration: 300
    }
});

const linkWork = document.querySelectorAll('.category__btn');

function activeWork() {
    linkWork.forEach((a) => a.classList.remove('active-work'));
    this.classList.add('active-work');
}
linkWork.forEach((a) => a.addEventListener('click', activeWork));
// contact form 
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    message = document.getElementById('message'),
    contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();
    if (contactName.value === '' || contactEmail.value === '' || message.value === '') {
        contactMessage.classList.remove('color-light');
        contactMessage.classList.add('color-dark');

        contactMessage.textContent = 'Write all the input fields';
    } else {
        emailjs.sendForm('service_ahhibir', 'template_l488b1k', '#contact-form', 'wwaVhNegm7rZRKO0f').then(() => {
            contactMessage.classList.add('color-light');
            contactMessage.textContent = 'Message sent'
            setTimeout(() => {
                contactMessage.textContent = '';
            }, 3000);
        }, (error) => {
            alert('OOPs ! SOMETHING WENT WRONG...', error);
        });
        contactName.value = '';
        contactEmail.value = '';
        message.value = '';
    }
}
contactForm.addEventListener('submit', sendEmail);