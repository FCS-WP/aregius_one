// import { DisplayLabel } from './components/DisplayLabel';

let Main = {
  init: async function () {

    // initialize demo javascript component - async/await invokes some 
    //  level of babel transformation 
    const displayLabel = new DisplayLabel();
    await displayLabel.init();

  }
};


// console.log($('.more-link'));
// Main.init();


let maxHeight = 0;
$('#section-review .lakit-testimonials__item .lakit-testimonials__content .lakit-testimonials__comment').each(function() {
    $(this).css('height', 'auto');
    let height = $(this).outerHeight(); 
    maxHeight = Math.max(maxHeight, height);
});


$('#section-review .lakit-testimonials__item .lakit-testimonials__content .lakit-testimonials__comment').css('height', maxHeight + 'px');


// change product image on variation selection

$("body").on("change", "#single-product .variations select", function(e){
  let _value = $(this).val();
  $(product_variations).each(function(index, variation) {
    let variation_name = variation.name;
    if (variation_name.indexOf(_value) > -1) {
      let feature_image = variation.image;
      $("#single-product .elementor-widget-image img").attr({
        src: feature_image,
        srcset: feature_image
      })
    }
  })
})