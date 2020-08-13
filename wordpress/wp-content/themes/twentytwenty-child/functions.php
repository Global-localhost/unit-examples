<?php


add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );
function my_theme_enqueue_styles() {
	wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
}


function ngxspace_js() {
	wp_enqueue_script( 'custom-js', get_stylesheet_directory_uri() . '/functions.js', array( 'jquery' ),'',true );
}
add_action( 'wp_enqueue_scripts', 'ngxspace_js' );