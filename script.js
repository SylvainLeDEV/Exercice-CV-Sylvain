// NAVBAR
let lastScrolltop=0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll',function (){
    const scrollTop = window.pageXOffset ||
    this.document.documentElement.scrollTop;

    if (scrollTop > lastScrolltop){
        navbar.style.top = "-50px"
    }else{
        navbar.style.top = "0"
    }
   lastScrolltop = scrollTop;
});




// TYPED
var typed = new Typed('.typed', {
    strings: ["Bonjour à tous et à toute !!","Bonjour à tous et à toute, je me présente je m'appelle Sylvain. Après une carrière de Technicien de Maintenance Industrielles. J’ai décider de me lancer dans l’univers du code ! Ayant un penchant pour le Web et nombreux outils informatique, j’ai décidé de m’orienter en premiers temps sur les Front en autodidacte ! Je m’exerce tous les jours sur HTML, CSS, JavaScript et le FramWork React afin de devenir développeur rapidement ! Aujourd’hui j’y vois plus qu’un avenir professionnel, je me suis découvert une passion !          "],
    typeSpeed: 17,
    backSpeed: 0,
    smartBackspace: true, // this is a default
    loop: false
});

//COMPTEUR LIVE
let compteur = 0;

$(window).scroll(function(){

   const top = $('.counter').offset().top-
       window.innerHeight;

   if(compteur === 0 && $(window).scrollTop() > top ){
       $('.counter-value').each(function(){
           let $this = $(this),
               countTo = $this.attr('data-count');
           $({
               countNum: $this.text()
           }).animate({
               countNum : countTo
           },
               {
               duration : 10000,
               easing: 'swing',
               step: function(){
                $this.text(Math.floor(this.countNum));
           },
           complete: function(){
               $this.text(this.countNum);
           }
         });
       });
       compteur=1;
   }
});

//AOS Animation en scroll (SYMPA de ouf)
AOS.init();
