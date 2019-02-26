$(document).ready(function(){
  //Iniciaçização scrollMagic
  let controller = new ScrollMagic.Controller();

  let pinIntroScene = new ScrollMagic.Scene({
    triggerElement: '#intro',
    triggerHook: 0
  })
  .setPin('#intro')
  .addTo(controller);

  //Loop each .project element
  $('.project').each(function() {
    console.log(this);
    
    //Construindo uma cena
    let ourScene = new ScrollMagic.Scene({
      triggerElement: this.children[0],
      triggerHook: 0.9,
    })
    .setClassToggle(this, 'fade-in')
    .addIndicators({
      name: 'fade em cena',
      colorTrigger: 'black',
      indent: 100,
      colorStart: '#75C695',
      colorEnd: 'purple'
    })
    .addTo(controller);
  })
});


















