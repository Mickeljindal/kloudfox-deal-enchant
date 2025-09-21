<?php
/**
 * KloudFox Theme Options
 *
 * @package KloudFox
 * @since 1.0.0
 */

// Basic theme options placeholder
function kloudfox_get_option( $option_name, $default = '' ) {
	return get_theme_mod( $option_name, $default );
}
?>