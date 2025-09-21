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

?>