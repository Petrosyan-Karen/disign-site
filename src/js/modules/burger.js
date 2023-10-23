const burgerTrigger = document.querySelector('.icon-menu'),
// burgerClose = document.querySelector('.header__burger--close'),
burgerItem = document.querySelector('.menu__body'),
body = document.querySelector('body'),
headerLink = document.querySelectorAll('.menu__link'); 

// headerLink.forEach((link) =>{
//    link.addEventListener('click', (e) =>{
//         headerLink.forEach((link) => {
//         link.classList.remove('active');
//      });
//      link.classList.add('active');
//         e.preventDefault()
//    });
// });

burgerTrigger.addEventListener('click', (e) => {
   toggleBurger();
});

// burgerClose.addEventListener('click', (e) => {
//    toggleBurger();
// });

headerLink.forEach(item => {
   item.addEventListener('click', (e) => {
      toggleBurger();   
        
   })
})

function toggleBurger() {
   burgerItem.classList.toggle('active');
   body.classList.toggle('active');
   burgerTrigger.classList.toggle('active');
        
   // burgerClose.classList.toggle('active');
}


