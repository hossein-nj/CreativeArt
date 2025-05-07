let $ = document
const loader = $.getElementById('loader-parent')
const hamburgerIcon = $.getElementById('hamburger-icon')
const menuMobile = $.getElementById('menu-mobile')
const closeBtn = $.getElementById('close-btn')
const overlay = $.querySelector('.overlay')
const contactLinkNav = $.getElementById('contact-link-nav')
const exploreBtn = $.getElementById('explore-btn')
const learnBtns = $.querySelectorAll('.learn-btn')
const createBtn = $.getElementById('create-btn')
let bidBtns = $.querySelectorAll('.bid-btn')

bidBtns.forEach(bidBtn => {
    bidBtn.addEventListener('click', e => {
        e.preventDefault()
        const Toast = Swal.mixin({
            toast: true,
            position: "bottom-end",
            showConfirmButton: false,
            background: "rgb(31, 41, 55, 0.5)",
            timer: 4000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
            showClass: {
                popup: `animate__animated animate__fadeInUp`
              },
              hideClass: {
                popup: `animate__animated animate__fadeOutDown`
              }
          });
          Toast.fire({
            icon: "success",
            title: "Bid Placed successfully"
          }); 
    })   
})

contactLinkNav.addEventListener('click', e => {
    e.preventDefault()
    swal.fire({
        title: "Contact me",
        text: "hosein2033@gmail.com",
        icon: "info",
        button: "Ok",
        backdrop: "blur(30px)",
        background: "rgb(31, 41, 55, 0.5)",
        showClass: {
            popup: `animate__animated animate__rollIn`
          },
          hideClass: {
            popup: `animate__animated animate__rollOut`
          }
      });
})

function closeNav() {
    menuMobile.classList.add('-left-60')
    menuMobile.classList.remove('left-0')
    overlay.classList.remove('overlay--visible')
}

hamburgerIcon.addEventListener('click', () => {
    menuMobile.classList.remove('-left-60')
    menuMobile.classList.add('left-0')
    overlay.classList.add('overlay--visible')
})

// tippy tooltip function
function tippyHandler(element, title, position) {
  tippy(element, {
    content: title,
    placement: position,
    duration: 500,
    delay: 100,
    theme: 'light',
    allowHTML: true
  })
}

closeBtn.addEventListener('click', closeNav)
overlay.addEventListener('click', closeNav)

let jsMediaTooltip = window.matchMedia("(min-width: 1024px)")
let jsMediaTypewritter = window.matchMedia("(min-width: 640px)")

if(jsMediaTypewritter.matches) {
  // typewriter
  let typewriterTitle = document.getElementById('typewriter-title');
  let typewriter = new Typewriter(typewriterTitle, {
      loop: true,
      delay: 100
});

    typewriter.typeString('Digital Art.')
    .pauseFor(2000)
    .deleteAll()
    .typeString('Fast & Easy')
    .pauseFor(2000)
    .deleteAll()
    .typeString('Amazing')
    .pauseFor(2000)
    .start()
}

if(jsMediaTooltip.matches) { 
  tippyHandler(exploreBtn, '<b>Explore the world now!</b>', 'bottom')
  tippyHandler(createBtn, '<b>Create your NFTS now!</b>', 'bottom')

  learnBtns.forEach(learnBtn => {
    tippyHandler(learnBtn, '<b>Learn More Here!</b>', 'right')
  })

  bidBtns.forEach(bidBtn => {
    tippyHandler(bidBtn, '<b>Place a bid for your Unique Art</b>', 'bottom')
  })

}

// spinner
window.addEventListener('load', () => {
  loader.classList.add('loader-remove')
})

// wow js
new WOW().init();