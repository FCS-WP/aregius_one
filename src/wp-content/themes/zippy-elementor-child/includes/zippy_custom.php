<?php
add_action('wp_enqueue_scripts', 'shin_scripts');

function shin_scripts()
{
  $version = time();

  wp_enqueue_style('main-style-css', THEME_URL . '-child' . '/assets/dist/css/main.min.css', array(), $version, 'all');

  wp_enqueue_style('slick-css', THEME_URL . '-child' . '/assets/lib/slick/slick.css', array(), $version, 'all');

  wp_enqueue_style('slick-theme-css', THEME_URL . '-child' . '/assets/lib/slick/slick-theme.css', array(), $version, 'all');

  wp_enqueue_script('slick-js', THEME_URL . '-child' . '/assets/lib/slick/slick.min.js', array('jquery'), $version, true);

  wp_enqueue_script('main-scripts-js', THEME_URL . '-child' . '/assets/dist/js/main.min.js', array('jquery'), $version, true);


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



function get_tutorial_video_link()
{
  $post_id = get_the_ID();
  $video = get_field('video_link', $post_id);
  $pattern = '/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:shorts\/|watch\?v=)?|youtu\.be\/)([a-zA-Z0-9_-]{11})/';

  if (!isset($video["url"]) && empty($video["url"])) {
    echo "Video not found";
    exit;
  }

  $video_url = $video["url"];

  preg_match($pattern, $video_url, $matches);

  if (!$matches) {
    echo "Not a valid YouTube URL";
    exit;
  }

  $video_id = esc_attr($matches[1]);
  
  echo "<iframe width=\"315\" height=\"560\" src=\"https://www.youtube.com/embed/$video_id\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>";
}
add_shortcode('tutorial_video', 'get_tutorial_video_link');