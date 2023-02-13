let header = document.querySelector(".header");
let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");
let nav = document.querySelector("#nav-icon");
window.addEventListener("scroll", () => {
  // header.classList.toggle("shadow", window.screenY > 0);
});
menu.onclick = () => {
  navbar.classList.toggle("active");
};

nav.onclick = () => {
  navbar.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};


// scroll reveiw

window.addEventListener('scroll' , reveal);
function reveal() {
    let reveals = document.querySelectorAll('.reveal')
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let topVeiw = reveals[i].getBoundingClientRect().top
        let pointReveiw = 120;

        if (topVeiw < windowHeight - pointReveiw) {
            reveals[i].classList.add('active')
        } else {
            reveals[i].classList.remove('active')
        }
    }

}







// dark mood
const moon = document.getElementById('toggleDark');
const body = document.querySelector('body')

moon.addEventListener('click', function(){
  this.classList.toggle('bi-moon');
  if(this.classList.toggle('bi-brightness-high-fill')){
    body.style.background = 'white';
    body.style.color = 'black';
  }else{
    body.style.background = 'black'
    body.style.color = 'white'
  }
})










