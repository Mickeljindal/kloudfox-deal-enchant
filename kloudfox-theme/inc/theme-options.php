<?php
/**
 * Theme Options Panel
 *
 * @package KloudFox
 * @since 1.0.0
 */

// Add theme options page
function kloudfox_add_theme_options_page() {
	add_theme_page(
		__( 'KloudFox Options', 'kloudfox' ),
		__( 'Theme Options', 'kloudfox' ),
		'manage_options',
		'kloudfox-options',
		'kloudfox_theme_options_page'
	);
}
add_action( 'admin_menu', 'kloudfox_add_theme_options_page' );

function kloudfox_theme_options_page() {
	?>
	<div class="wrap">
		<h1><?php esc_html_e( 'KloudFox Theme Options', 'kloudfox' ); ?></h1>
		<p><?php esc_html_e( 'Customize your KloudFox theme settings using the WordPress Customizer.', 'kloudfox' ); ?></p>
		<p>
			<a href="<?php echo esc_url( admin_url( 'customize.php' ) ); ?>" class="button button-primary">
				<?php esc_html_e( 'Open Customizer', 'kloudfox' ); ?>
			</a>
		</p>
	</div>
	<?php
}
?>