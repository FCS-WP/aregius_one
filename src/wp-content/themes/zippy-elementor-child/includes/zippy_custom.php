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