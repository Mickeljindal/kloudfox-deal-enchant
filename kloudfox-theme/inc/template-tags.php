<?php
/**
 * Custom template tags for this theme
 *
 * @package KloudFox
 * @since 1.0.0
 */

if ( ! function_exists( 'kloudfox_posted_on' ) ) {
	function kloudfox_posted_on() {
		echo '<span class="posted-on">' . get_the_date() . '</span>';
	}
}

if ( ! function_exists( 'kloudfox_posted_by' ) ) {
	function kloudfox_posted_by() {
		echo '<span class="byline">by ' . get_the_author() . '</span>';
	}
}
?>