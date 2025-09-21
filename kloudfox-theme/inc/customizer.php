<?php
/**
 * KloudFox Theme Customizer
 *
 * @package KloudFox
 * @since 1.0.0
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 */
function kloudfox_customize_register( $wp_customize ) {
	$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
	$wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';

	// Hero Section
	$wp_customize->add_section( 'kloudfox_hero', array(
		'title'    => __( 'Hero Section', 'kloudfox' ),
		'priority' => 30,
	) );

	$wp_customize->add_setting( 'kloudfox_show_hero', array(
		'default'           => true,
		'sanitize_callback' => 'wp_validate_boolean',
	) );

	$wp_customize->add_control( 'kloudfox_show_hero', array(
		'label'   => __( 'Show Hero Section', 'kloudfox' ),
		'section' => 'kloudfox_hero',
		'type'    => 'checkbox',
	) );

	$wp_customize->add_setting( 'kloudfox_hero_title', array(
		'default'           => __( 'Monitor Your Website 24/7', 'kloudfox' ),
		'sanitize_callback' => 'sanitize_text_field',
	) );

	$wp_customize->add_control( 'kloudfox_hero_title', array(
		'label'   => __( 'Hero Title', 'kloudfox' ),
		'section' => 'kloudfox_hero',
		'type'    => 'text',
	) );

	// Colors
	$wp_customize->add_setting( 'kloudfox_primary_color', array(
		'default'           => '#3b82f6',
		'sanitize_callback' => 'sanitize_hex_color',
	) );

	$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'kloudfox_primary_color', array(
		'label'   => __( 'Primary Color', 'kloudfox' ),
		'section' => 'colors',
	) ) );
}
add_action( 'customize_register', 'kloudfox_customize_register' );

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function kloudfox_customize_preview_js() {
	wp_enqueue_script( 'kloudfox-customizer', KLOUDFOX_THEME_URI . '/assets/js/customizer.js', array( 'customize-preview' ), KLOUDFOX_VERSION, true );
}
add_action( 'customize_preview_init', 'kloudfox_customize_preview_js' );
?>