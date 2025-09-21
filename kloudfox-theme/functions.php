<?php
/**
 * KloudFox functions and definitions
 *
 * @package KloudFox
 * @since 1.0.0
 */

// Prevent direct file access
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Define theme constants
 */
define( 'KLOUDFOX_VERSION', '1.0.0' );
define( 'KLOUDFOX_THEME_DIR', get_template_directory() );
define( 'KLOUDFOX_THEME_URI', get_template_directory_uri() );

/**
 * Theme setup function
 */
function kloudfox_setup() {
	// Add default posts and comments RSS feed links to head
	add_theme_support( 'automatic-feed-links' );

	// Let WordPress manage the document title
	add_theme_support( 'title-tag' );

	// Enable support for Post Thumbnails on posts and pages
	add_theme_support( 'post-thumbnails' );

	// Define image sizes
	add_image_size( 'kloudfox-featured', 800, 450, true );
	add_image_size( 'kloudfox-hero', 1200, 600, true );
	add_image_size( 'kloudfox-grid', 400, 300, true );

	// Register navigation menus
	register_nav_menus(
		array(
			'primary' => esc_html__( 'Primary Menu', 'kloudfox' ),
			'footer'  => esc_html__( 'Footer Menu', 'kloudfox' ),
		)
	);

	// Switch default core markup to output valid HTML5
	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'style',
			'script',
		)
	);

	// Set up the WordPress core custom background feature
	add_theme_support(
		'custom-background',
		apply_filters(
			'kloudfox_custom_background_args',
			array(
				'default-color' => 'ffffff',
				'default-image' => '',
			)
		)
	);

	// Add theme support for selective refresh for widgets
	add_theme_support( 'customize-selective-refresh-widgets' );

	// Add support for custom logo
	add_theme_support(
		'custom-logo',
		array(
			'height'      => 60,
			'width'       => 200,
			'flex-width'  => true,
			'flex-height' => true,
		)
	);

	// Add support for editor styles
	add_theme_support( 'editor-styles' );
	add_editor_style( 'assets/css/editor-style.css' );

	// Add support for full and wide align images
	add_theme_support( 'align-wide' );

	// Add support for responsive embedded content
	add_theme_support( 'responsive-embeds' );

	// Add support for editor color palette
	add_theme_support( 'editor-color-palette', array(
		array(
			'name'  => esc_html__( 'Primary Blue', 'kloudfox' ),
			'slug'  => 'primary-blue',
			'color' => '#3b82f6',
		),
		array(
			'name'  => esc_html__( 'Secondary Green', 'kloudfox' ),
			'slug'  => 'secondary-green',
			'color' => '#10b981',
		),
		array(
			'name'  => esc_html__( 'Accent Yellow', 'kloudfox' ),
			'slug'  => 'accent-yellow',
			'color' => '#f59e0b',
		),
		array(
			'name'  => esc_html__( 'Dark Gray', 'kloudfox' ),
			'slug'  => 'dark-gray',
			'color' => '#1f2937',
		),
		array(
			'name'  => esc_html__( 'Light Gray', 'kloudfox' ),
			'slug'  => 'light-gray',
			'color' => '#f9fafb',
		),
	) );

	// Add support for block styles
	add_theme_support( 'wp-block-styles' );
}
add_action( 'after_setup_theme', 'kloudfox_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet
 */
function kloudfox_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'kloudfox_content_width', 1200 );
}
add_action( 'after_setup_theme', 'kloudfox_content_width', 0 );

/**
 * Register widget areas
 */
function kloudfox_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Primary Sidebar', 'kloudfox' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'kloudfox' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h3 class="widget-title">',
			'after_title'   => '</h3>',
		)
	);

	register_sidebar(
		array(
			'name'          => esc_html__( 'Footer 1', 'kloudfox' ),
			'id'            => 'footer-1',
			'description'   => esc_html__( 'Add widgets here to appear in your footer.', 'kloudfox' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h3 class="widget-title">',
			'after_title'   => '</h3>',
		)
	);

	register_sidebar(
		array(
			'name'          => esc_html__( 'Footer 2', 'kloudfox' ),
			'id'            => 'footer-2',
			'description'   => esc_html__( 'Add widgets here to appear in your footer.', 'kloudfox' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h3 class="widget-title">',
			'after_title'   => '</h3>',
		)
	);

	register_sidebar(
		array(
			'name'          => esc_html__( 'Footer 3', 'kloudfox' ),
			'id'            => 'footer-3',
			'description'   => esc_html__( 'Add widgets here to appear in your footer.', 'kloudfox' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h3 class="widget-title">',
			'after_title'   => '</h3>',
		)
	);

	register_sidebar(
		array(
			'name'          => esc_html__( 'Footer 4', 'kloudfox' ),
			'id'            => 'footer-4',
			'description'   => esc_html__( 'Add widgets here to appear in your footer.', 'kloudfox' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h3 class="widget-title">',
			'after_title'   => '</h3>',
		)
	);
}
add_action( 'widgets_init', 'kloudfox_widgets_init' );

/**
 * Enqueue scripts and styles
 */
function kloudfox_scripts() {
	// Enqueue theme stylesheet
	wp_enqueue_style( 'kloudfox-style', get_stylesheet_uri(), array(), KLOUDFOX_VERSION );

	// Enqueue Google Fonts
	wp_enqueue_style( 'kloudfox-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap', array(), null );

	// Enqueue custom CSS
	wp_enqueue_style( 'kloudfox-custom', KLOUDFOX_THEME_URI . '/assets/css/custom.css', array( 'kloudfox-style' ), KLOUDFOX_VERSION );

	// Enqueue navigation script
	wp_enqueue_script( 'kloudfox-navigation', KLOUDFOX_THEME_URI . '/assets/js/navigation.js', array(), KLOUDFOX_VERSION, true );

	// Enqueue main theme script
	wp_enqueue_script( 'kloudfox-script', KLOUDFOX_THEME_URI . '/assets/js/main.js', array( 'jquery' ), KLOUDFOX_VERSION, true );

	// Localize script for AJAX
	wp_localize_script( 'kloudfox-script', 'kloudfox_ajax', array(
		'ajax_url' => admin_url( 'admin-ajax.php' ),
		'nonce'    => wp_create_nonce( 'kloudfox_nonce' ),
	) );

	// Enqueue comment reply script
	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'kloudfox_scripts' );

/**
 * Custom excerpt length
 */
function kloudfox_excerpt_length( $length ) {
	return 30;
}
add_filter( 'excerpt_length', 'kloudfox_excerpt_length', 999 );

/**
 * Custom excerpt more string
 */
function kloudfox_excerpt_more( $more ) {
	return '...';
}
add_filter( 'excerpt_more', 'kloudfox_excerpt_more' );

/**
 * Add a pingback url auto-discovery header for single posts, pages, or attachments
 */
function kloudfox_pingback_header() {
	if ( is_singular() && pings_open() ) {
		printf( '<link rel="pingback" href="%s">', esc_url( get_bloginfo( 'pingback_url' ) ) );
	}
}
add_action( 'wp_head', 'kloudfox_pingback_header' );

/**
 * Security enhancements
 */
// Remove WordPress version number
remove_action( 'wp_head', 'wp_generator' );

// Remove RSD link
remove_action( 'wp_head', 'rsd_link' );

// Remove Windows Live Writer link
remove_action( 'wp_head', 'wlwmanifest_link' );

// Remove shortlink
remove_action( 'wp_head', 'wp_shortlink_wp_head' );

// Disable XML-RPC
add_filter( 'xmlrpc_enabled', '__return_false' );

// Remove REST API links
remove_action( 'wp_head', 'rest_output_link_wp_head' );
remove_action( 'wp_head', 'wp_oembed_add_discovery_links' );

/**
 * Custom walker for navigation menu
 */
class KloudFox_Walker_Nav_Menu extends Walker_Nav_Menu {
	
	function start_lvl( &$output, $depth = 0, $args = null ) {
		$indent = str_repeat( "\t", $depth );
		$output .= "\n$indent<ul class=\"sub-menu\">\n";
	}

	function end_lvl( &$output, $depth = 0, $args = null ) {
		$indent = str_repeat( "\t", $depth );
		$output .= "$indent</ul>\n";
	}

	function start_el( &$output, $item, $depth = 0, $args = null, $id = 0 ) {
		$indent = ( $depth ) ? str_repeat( "\t", $depth ) : '';

		$classes = empty( $item->classes ) ? array() : (array) $item->classes;
		$classes[] = 'menu-item-' . $item->ID;

		$class_names = join( ' ', apply_filters( 'nav_menu_css_class', array_filter( $classes ), $item, $args ) );
		$class_names = $class_names ? ' class="' . esc_attr( $class_names ) . '"' : '';

		$id = apply_filters( 'nav_menu_item_id', 'menu-item-'. $item->ID, $item, $args );
		$id = $id ? ' id="' . esc_attr( $id ) . '"' : '';

		$output .= $indent . '<li' . $id . $class_names .'>';

		$attributes  = ! empty( $item->attr_title ) ? ' title="'  . esc_attr( $item->attr_title ) .'"' : '';
		$attributes .= ! empty( $item->target )     ? ' target="' . esc_attr( $item->target     ) .'"' : '';
		$attributes .= ! empty( $item->xfn )        ? ' rel="'    . esc_attr( $item->xfn        ) .'"' : '';
		$attributes .= ! empty( $item->url )        ? ' href="'   . esc_attr( $item->url        ) .'"' : '';

		$item_output = $args->before ?? '';
		$item_output .= '<a' . $attributes .'>';
		$item_output .= ( $args->link_before ?? '' ) . apply_filters( 'the_title', $item->title, $item->ID ) . ( $args->link_after ?? '' );
		$item_output .= '</a>';
		$item_output .= $args->after ?? '';

		$output .= apply_filters( 'walker_nav_menu_start_el', $item_output, $item, $depth, $args );
	}

	function end_el( &$output, $item, $depth = 0, $args = null ) {
		$output .= "</li>\n";
	}
}

/**
 * Include theme customizer
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Include theme options
 */
require get_template_directory() . '/inc/theme-options.php';

/**
 * Include template functions
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Include template tags
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Load Jetpack compatibility file
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

/**
 * WooCommerce compatibility
 */
if ( class_exists( 'WooCommerce' ) ) {
	require get_template_directory() . '/inc/woocommerce.php';
}

/**
 * Schema markup for SEO
 */
function kloudfox_schema_markup() {
	$schema = array(
		'@context' => 'https://schema.org',
		'@type' => 'Organization',
		'name' => get_bloginfo( 'name' ),
		'url' => home_url(),
		'logo' => array(
			'@type' => 'ImageObject',
			'url' => wp_get_attachment_image_url( get_theme_mod( 'custom_logo' ), 'full' ),
		),
		'sameAs' => array(
			// Add social media URLs here
		),
	);

	if ( is_front_page() ) {
		$schema['@type'] = 'WebSite';
		$schema['potentialAction'] = array(
			'@type' => 'SearchAction',
			'target' => home_url( '/?s={search_term_string}' ),
			'query-input' => 'required name=search_term_string',
		);
	}

	echo '<script type="application/ld+json">' . wp_json_encode( $schema, JSON_UNESCAPED_SLASHES ) . '</script>';
}
add_action( 'wp_head', 'kloudfox_schema_markup' );

/**
 * Custom post types (example for testimonials)
 */
function kloudfox_register_post_types() {
	// Testimonials
	register_post_type( 'testimonial', array(
		'labels' => array(
			'name' => __( 'Testimonials', 'kloudfox' ),
			'singular_name' => __( 'Testimonial', 'kloudfox' ),
		),
		'public' => true,
		'has_archive' => true,
		'supports' => array( 'title', 'editor', 'thumbnail' ),
		'menu_icon' => 'dashicons-format-quote',
	) );

	// Team Members
	register_post_type( 'team_member', array(
		'labels' => array(
			'name' => __( 'Team Members', 'kloudfox' ),
			'singular_name' => __( 'Team Member', 'kloudfox' ),
		),
		'public' => true,
		'supports' => array( 'title', 'editor', 'thumbnail' ),
		'menu_icon' => 'dashicons-groups',
	) );
}
add_action( 'init', 'kloudfox_register_post_types' );

/**
 * Performance optimizations
 */
// Remove emoji scripts
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles', 'print_emoji_styles' );

// Disable embeds
function kloudfox_disable_embeds() {
	remove_action( 'rest_api_init', 'wp_oembed_register_route' );
	add_filter( 'embed_oembed_discover', '__return_false' );
	remove_filter( 'oembed_dataparse', 'wp_filter_oembed_result', 10 );
	remove_action( 'wp_head', 'wp_oembed_add_discovery_links' );
	remove_action( 'wp_head', 'wp_oembed_add_host_js' );
}
add_action( 'init', 'kloudfox_disable_embeds', 9999 );

// Defer parsing of JavaScript
function kloudfox_defer_parsing_of_js( $url ) {
	if ( is_admin() ) return $url;
	if ( FALSE === strpos( $url, '.js' ) ) return $url;
	if ( strpos( $url, 'jquery.js' ) ) return $url;
	return str_replace( ' src', ' defer src', $url );
}
add_filter( 'script_loader_tag', 'kloudfox_defer_parsing_of_js', 10 );
?>