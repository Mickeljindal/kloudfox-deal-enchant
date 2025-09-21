<?php
/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package KloudFox
 * @since 1.0.0
 */

/**
 * Adds custom classes to the array of body classes.
 */
function kloudfox_body_classes( $classes ) {
	if ( ! is_singular() ) {
		$classes[] = 'hfeed';
	}

	if ( ! has_nav_menu( 'primary' ) ) {
		$classes[] = 'no-navigation';
	}

	return $classes;
}
add_filter( 'body_class', 'kloudfox_body_classes' );

/**
 * Add a pingback url auto-discovery header for single posts, pages, or attachments.
 */
function kloudfox_pingback_header() {
	if ( is_singular() && pings_open() ) {
		printf( '<link rel="pingback" href="%s">', esc_url( get_bloginfo( 'pingback_url' ) ) );
	}
}
add_action( 'wp_head', 'kloudfox_pingback_header' );
?>