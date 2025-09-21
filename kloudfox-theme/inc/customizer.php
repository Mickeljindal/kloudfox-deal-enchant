<?php
/**
 * KloudFox Theme Customizer
 *
 * @package KloudFox
 * @since 1.0.0
 */

function kloudfox_customize_register( $wp_customize ) {
	// Add basic customizer settings
	$wp_customize->add_setting( 'kloudfox_hero_title', array(
		'default' => 'Monitor Your Website 24/7',
		'sanitize_callback' => 'sanitize_text_field',
	) );
	
	$wp_customize->add_control( 'kloudfox_hero_title', array(
		'label' => 'Hero Title',
		'section' => 'title_tagline',
		'type' => 'text',
	) );
}
add_action( 'customize_register', 'kloudfox_customize_register' );
?>