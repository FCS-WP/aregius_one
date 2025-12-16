<?php

function enqueue_wc_cart_fragments()
{
    wp_enqueue_script('wc-cart-fragments');
}
add_action('wp_enqueue_scripts', 'enqueue_wc_cart_fragments');


add_filter('woocommerce_email_subject_customer_on_hold_order', 'change_on_hold_email_subject', 10, 2);

function change_on_hold_email_subject($subject, $order){
    if ($order->get_meta("order_type") == "workshop") {
        return get_email_subject($order, "new_order");
    }
    return $subject;
}