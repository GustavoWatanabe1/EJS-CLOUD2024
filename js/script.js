class MobileNavBar{
constructor(mobileMenu, navList, navLinks){
  this.mobileMenu = document.querySelector(mobileMenu);
  this.navList = document.querySelector(navList);
  this.navLinks = document.querySelectorAll(navLinks);  
  this.activeClass ="active";

  this.handleClick = this.handleClick.bind(this);
}
handleClick(){
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
}
animateLinks(){
    this.navLinks.forEach((link, index) => {
        console.log(index)
link.style.animation 
?(link.style.animation ="")
:(link.style.animation =`navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`);
    });
}

addClickEvent(){
    this.mobileMenu.addEventListener("click", this.handleClick);
}
  addCloseOnLinkClick() {
    this.navLinks.forEach(link => {
      link.addEventListener("click", () => {
        this.navList.classList.remove(this.activeClass);
        this.mobileMenu.classList.remove(this.activeClass);
        this.navLinks.forEach(link => (link.style.animation = "")); // limpa animações
      });
    });
  }


init (){
    if(this.mobileMenu){
        this.addClickEvent();
        this.addCloseOnLinkClick();
    }
    return this;
}
}
const mobileNavBar = new MobileNavBar (".mobile-menu", ".nav-list", ".nav-list li");
mobileNavBar.init();

document.getElementById('insta', 'youtube').addEventListener('click', function() {
    window.open(this.href, '_blank').focus();
  });

