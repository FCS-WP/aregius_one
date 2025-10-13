// import { DisplayLabel } from './components/DisplayLabel';

let Main = {
  init: async function () {

    // initialize demo javascript component - async/await invokes some 
    //  level of babel transformation 
    const displayLabel = new DisplayLabel();
    await displayLabel.init();

  }
};
// Main.init();


$("body")
  .on("click", ".product_slider li.product .product_item--inner a", function (e) {
    e.preventDefault();
  })
  .on("click", ".product_slider.hand_on_fun li.product .product_item--inner a", function (e) {
    e.preventDefault();
    elementorProFrontend.modules.popup.showPopup({ id: 175 });
  })
  .on("change", "#single-product .variations select", function (e) {
    let _value = $(this).val();
    $(product_variations).each(function (index, variation) {
      let variation_name = variation.name;
      if (variation_name.indexOf(_value) > -1) {
        let feature_image = variation.image;
        $("#single-product .elementor-widget-image img").attr({
          src: feature_image,
          srcset: feature_image
        })
      }
    })
    $(".tp-product-price").css("display", "block")
  })
  // .on("change", "#single-product .woobt-choose input", function (e) {
  //   setTimeout(() => {
  //     let total_price_html = $(".woobt-summary .woobt-total .woocommerce-Price-amount.amount").html();
  //     $(".tp-product-price .price").html(total_price_html);
  //   }, 200);
  //   $(".tp-product-price").css("display", "block");
  // })


let all_options = {
  'none': 'None',
  'candle_making': 'Candle Making',
  'soap_making': 'Soap Making',
  'title_coaster': 'Title Coaster',
  'tie_dye': 'Tie Dye',
  'lino_art_tote_bag': 'Lino Art Tote Bag',
  'quilling': 'Quilling',
  'painting': 'Painting',
  'leather_crafts': 'Leather Crafts',
  'wooden_nameboard': 'Wooden Nameboard'
},
  temp_selected_values = ['', '', '', ''];

// Update Option for each select
function updateOptions() {
  $('.popup_form select').each(function (index) {
    let current_select = $(this);
    current_value = current_select.val();

    // remove all option but not None
    current_select.find('option:not([value=""])').remove();

    // append the rest opotion
    Object.keys(all_options).forEach(function (option_value) {
      if (!temp_selected_values.includes(option_value) || option_value == current_value) {
        current_select.append(new Option(all_options[option_value], option_value));
      }
    });

    // apply value to current select
    current_select.val(current_value);
  });
}

$('body').on('change', '.popup_form select', function () {
  let idx = $('.popup_form select').index(this),
    new_value = $(this).val() != "none" ? $(this).val() : "";

  // update selected options
  temp_selected_values[idx] = new_value || '';

  $('.popup_form select').prop("disabled", false);

  // None or empty => reset all select
  if (!new_value || new_value === '') {
    for (let i = idx + 1; i < 4; i++) {
      temp_selected_values[i] = '';
      $($('.popup_form select')[i]).val('none').prop("disabled", true);
    }
  }

  updateOptions();
});