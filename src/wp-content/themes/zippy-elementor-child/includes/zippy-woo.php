<?php

function enqueue_wc_cart_fragments()
{
    wp_enqueue_script('wc-cart-fragments');
}
add_action('wp_enqueue_scripts', 'enqueue_wc_cart_fragments');



function get_order_infos($order){
    $html = "";

    $fields = [
        "customer_name" => "Customer name",
        "customer_phone" => "Customer phone",
        "customer_comments" => "Customer comments",
        "number_of_pax" => "No. of Pax",
        "booking_start_date" => "Start date",
        "booking_end_date" => "End date",
        "booking_start_time" => "Start time",
        "booking_end_time" => "End time",
        "order_type" => "Order Type",
    ];

    foreach ($fields as $key => $value) {
        if(!empty($order->get_meta($key))){
            $html .= "<p><strong>$value: </strong> {$order->get_meta($key)}</p>";
        }
    }

    if(!empty($html)){
        $html = "<h3>".__('Booking Information', 'woocommerce')."</h3> $html";
    }

    return $html;
}