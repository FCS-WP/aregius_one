<?php
add_action('wp_enqueue_scripts', 'shin_scripts');

function shin_scripts()
{
  $version = time();

  wp_enqueue_style('main-style-css', THEME_URL . '-child' . '/assets/dist/css/main.min.css', array(), $version, 'all');

  wp_enqueue_script('main-scripts-js', THEME_URL . '-child' . '/assets/dist/js/main.min.js', array('jquery'), $version, true);

  wp_enqueue_style('slick-css', '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css', array(), $version, 'all');

  wp_enqueue_script('slick-js', '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', array('jquery'), $version, true);
}


// Remove product in Add-on Category from Related Product
function exclude_addon_from_related_products($related_posts, $product_id, $args)
{
    $excluded_categories = array('add-on', 'hands-on-fun', 'healthy-bites');

    // category term_id
    $excluded_term_ids = array();
    foreach ($excluded_categories as $slug) {
        $term = get_term_by('slug', $slug, 'product_cat');
        if ($term) {
            $excluded_term_ids[] = $term->term_id;
        }
    }

    // filter products
    if (!empty($excluded_term_ids) && !empty($related_posts)) {
        $filtered_related = array();

        foreach ($related_posts as $related_id) {
            if (!has_term($excluded_term_ids, 'product_cat', $related_id)) {
                $filtered_related[] = $related_id;
            }
        }

        return $filtered_related;
    }

    return $related_posts;
}
add_filter('woocommerce_related_products', 'exclude_addon_from_related_products', 10, 3);







function get_elementor_product_variations()
{

  $product_id = get_the_ID();

  $product = wc_get_product($product_id);

  if (!$product) {
    return '<p>No products found</p>';
  }


  if ($product->is_type('variable')) {
    $output = '';
    $variations = $product->get_available_variations();
    $prices = [];

    foreach ($variations as $variation) {

      $attributes = $variation['attributes'];
      $variation_name = [];
      foreach ($attributes as $key => $value) {
        $attribute_label = wc_attribute_label(str_replace('attribute_', '', $key));
        $variation_name[] = $attribute_label . ': ' . $value;
      }
      $variation_name = implode(', ', $variation_name);


      $variation_image = $variation['image']['url'] ?? '';

      // get price
      $variation_price = $variation['display_price'];
      if (empty($variation_price)) {
        $variation_price = $variation['display_regular_price'];
      }

      $prices[] = floatval($variation_price);

      $variations_array[] = [
        'name' => $variation_name,
        'image' => $variation_image,
        'price' => $variation_price
      ];
    }

    $min_price = min($prices);
    $max_price = max($prices);
    if ($min_price === $max_price) {
      $price_range = wc_price($min_price);
    } else {
      $price_range = wc_price($min_price) . ' - ' . wc_price($max_price);
    }
    echo $price_range;
    $output = '<script type="text/javascript">';
    $output .= 'var product_variations = ' . json_encode($variations_array) . ';';
    $output .= '</script>';
    return $output;
  }
}


add_shortcode('product_variations', 'get_elementor_product_variations');



function add_this_script_footer()
{ ?>
  <script>
    jQuery("#main_slider ").slick({
      fade: true,
      autoplay: true,
      arrows: false,
      dots: false,
    });
    jQuery("body")
	  .on("click", ".product_slider li.product .product_item--inner a", function(e){
		e.preventDefault();
	})
	  .on("click", ".product_slider.hand_on_fun li.product .product_item--inner a", function(e){
		e.preventDefault();
		elementorProFrontend.modules.popup.showPopup({ id: 175 });
	})
      .on("change", "#single-product .variations select", function (e) {
        let _value = jQuery(this).val();
        jQuery(product_variations).each(function (index, variation) {
          let variation_name = variation.name;
          if (variation_name.indexOf(_value) > -1) {
            let feature_image = variation.image;
            jQuery("#single-product .elementor-widget-image img").attr({
              src: feature_image,
              srcset: feature_image
            })
          }
        })
        jQuery(".tp-product-price").css("display", "block")
      })
      .on("change", "#single-product .woobt-choose input", function (e) {
        setTimeout(() => {
          let total_price_html = jQuery(".woobt-summary .woobt-total .woocommerce-Price-amount.amount").html();
          jQuery(".tp-product-price .price").html(total_price_html);
        }, 200);
        jQuery(".tp-product-price").css("display", "block");
      })
	  let maxHeight = 0;
	  jQuery('#section-review .lakit-testimonials__item .lakit-testimonials__content .lakit-testimonials__comment').each(function() {
		  jQuery(this).css('height', 'auto');
		  let height = jQuery(this).outerHeight(); 
		  maxHeight = Math.max(maxHeight, height);
	  });


	  jQuery('#section-review .lakit-testimonials__item .lakit-testimonials__content .lakit-testimonials__comment').css('height', maxHeight + 'px');


	  // change product image on variation selection

	  jQuery("body")
		  .on("change", "#single-product .variations select", function(e){
		  let _value = jQuery(this).val();
		  jQuery(product_variations).each(function(index, variation) {
			  let variation_name = variation.name;
			  if (variation_name.indexOf(_value) > -1) {
				  let feature_image = variation.image;
				  jQuery("#single-product .elementor-widget-image img").attr({
					  src: feature_image,
					  srcset: feature_image
				  })
			  }
		  })
		  jQuery(".tp-product-price").css("display", "block")
	  })
		  .on("change", "#single-product .woobt-choose input", function(e){
		  setTimeout(() => {
			  let total_price_html = jQuery(".woobt-summary .woobt-total .woocommerce-Price-amount.amount").html();
			  jQuery(".tp-product-price .price").html(total_price_html);
		  }, 200);
		  jQuery(".tp-product-price").css("display", "block");
	  })
	

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
    jQuery('.popup_form select').each(function (index) {
        let current_select = jQuery(this);
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

jQuery('body').on('change', '.popup_form select', function () {
    let idx = jQuery('.popup_form select').index(this),
        new_value = jQuery(this).val() != "none" ? jQuery(this).val() : "";

    // update selected options
    temp_selected_values[idx] = new_value || '';
    
    jQuery('.popup_form select').prop("disabled", false);

    // None or empty => reset all select
    if (!new_value || new_value === '') {
        for (let i = idx + 1; i < 4; i++) {
            temp_selected_values[i] = '';
            jQuery(jQuery('.popup_form select')[i]).val('none').prop("disabled", true);
        }
    }

    updateOptions();
});

  </script>
<?php }
add_action('wp_footer', 'add_this_script_footer', 20, 2);


function get_tutorial_video_link($atts)
{
    $post_id = get_the_ID();
    $video = get_field('video_link', $post_id);
    $pattern = '/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:shorts\/|watch\?v=)?|youtu\.be\/)([a-zA-Z0-9_-]{11})/';

    if (isset($video["url"]) && !empty($video["url"])) {
        $video_url = $video["url"];
        if (preg_match($pattern, $video_url, $matches)) {
            echo '<iframe width="315" height="560" src="https://www.youtube.com/embed/' . esc_attr($matches[1]) . '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
        } else {
            echo "Video not found";
        }
    } else {
        echo "Video not found";
    }
}
add_shortcode('tutorial_video', 'get_tutorial_video_link');