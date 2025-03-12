<?php
add_action('wp_enqueue_scripts', 'shin_scripts');

function shin_scripts()
{
    $version = time();

    wp_enqueue_style('main-style-css', THEME_URL . '-child' . '/assets/dist/css/main.min.css', array(), $version, 'all');

    wp_enqueue_script('main-scripts-js', THEME_URL . '-child' . '/assets/dist/js/main.min.js', array('jquery'), $version, true);
}


// Remove product in Add-on Category from Related Product
function exclude_addon_from_related_products( $related_posts, $product_id, $args ) {
    
    $addon_category = get_term_by( 'slug', 'add-on', 'product_cat' );
    
    if ( $addon_category && !empty( $related_posts ) ) {
        
        $filtered_related = array();
        
        foreach ( $related_posts as $related_id ) {
            
            if ( !has_term( $addon_category->term_id, 'product_cat', $related_id ) ) {
                $filtered_related[] = $related_id;
            }
        }
        
        return $filtered_related;
    }
    
    return $related_posts;
}
add_filter( 'woocommerce_related_products', 'exclude_addon_from_related_products', 10, 3 );






function get_elementor_product_variations() {

    $product_id = get_the_ID();

    $product = wc_get_product($product_id);
    
    if (!$product) {
        return '<p>Không tìm thấy sản phẩm.</p>';
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