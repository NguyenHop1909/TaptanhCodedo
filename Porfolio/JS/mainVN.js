/*============================ SHOW MENU ==================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*============================ REMOVE MENU ==================*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header');
    if (window.scrollY >= 50) {
        header.classList.add('blur-header');
    } else {
        header.classList.remove('blur-header');
    }
}

window.addEventListener('scroll', blurHeader);

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    // serviceID - templateID - #form - publickey
    emailjs.sendForm('service_v93u7or','template_u3izkov','#contact-form','GPNj-BRe0l-zVi18t')
        .then(() => {
            // Show sent message
            contactMessage.textContent = 'Tin nhắn đã được gửi thành công ✅'

            //Remove message after five second
            setTimeout(() =>{
                contactMessage.textContent = ''

            }, 5000)

            // Clear input field
            contactForm.reset()
        }, () =>{
            // Show error message
            contactMessage.textContent = 'Tin nhắn không được gửi (lỗi dịch vụ) ❌'
        })
}

contactForm.addEventListener('submit', sendEmail)


/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    if (this.scrollY >= 350) {
        scrollUp.classList.add('show-scroll')
    } else {
        scrollUp.classList.remove('show-scroll')
    }
}

window.addEventListener('scroll', scrollUp)



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[ID]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop -58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId +']')

        if(scrollDown> sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})
sr.reveal('.home__data, .experience, .skills, .contact__container')
sr.reveal('.home__img', {deplay: 600})
sr.reveal('.home__scroll', {deplay: 800})
sr.reveal('.work__card, .services__card', {interval: 100})
sr.reveal('.about__content', {origin: 'right'})
sr.reveal('.about__img', {origin: 'left'})
sr.reveal('.tools', {origin: 'left'})


// JavaScript để chuyển đổi ngôn ngữ
function changeLanguage(language) {
    if (language === 'english') {
        window.location.href = '/Porfolio/HTML/indexEN.html';
    } else if (language === 'vietnamese') {
        window.location.href = '/Porfolio/HTML/indexVN.html';
    }
}