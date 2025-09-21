<?php
/**
 * WooCommerce Compatibility File
 *
 * @package KloudFox
 * @since 1.0.0
 */

/**
 * WooCommerce setup function
 */
function kloudfox_woocommerce_setup() {
	add_theme_support(
		'woocommerce',
		array(
			'thumbnail_image_width' => 150,
			'single_image_width'    => 300,
			'product_grid'          => array(
				'default_rows'    => 3,
				'min_rows'        => 1,
				'default_columns' => 4,
				'min_columns'     => 1,
				'max_columns'     => 6,
			),
		)
	);
	add_theme_support('wc-product-gallery-zoom');
	add_theme_support('wc-product-gallery-lightbox');
	add_theme_support('wc-product-gallery-slider');
}
add_action('after_setup_theme', 'kloudfox_woocommerce_setup');

/**
 * WooCommerce specific scripts & stylesheets
 */
function kloudfox_woocommerce_scripts() {
	wp_enqueue_style('kloudfox-woocommerce-style', KLOUDFOX_THEME_URI . '/woocommerce.css', array(), KLOUDFOX_VERSION);

	$font_path   = WC()->plugin_url() . '/assets/fonts/';
	$inline_font = '@font-face {
			font-family: "star";
			src: url("' . $font_path . 'star.eot");
			src: url("' . $font_path . 'star.eot?#iefix") format("embedded-opentype"),
				url("' . $font_path . 'star.woff") format("woff"),
				url("' . $font_path . 'star.ttf") format("truetype"),
				url("' . $font_path . 'star.svg#star") format("svg");
			font-weight: normal;
			font-style: normal;
		}';

	wp_add_inline_style('kloudfox-woocommerce-style', $inline_font);
}
add_action('wp_enqueue_scripts', 'kloudfox_woocommerce_scripts');

/**
 * Remove default WooCommerce wrapper
 */
remove_action('woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10);
remove_action('woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end', 10);

if (!function_exists('kloudfox_woocommerce_wrapper_before')) {
	function kloudfox_woocommerce_wrapper_before() {
		?>
		<main id="primary" class="site-main">
			<div class="kf-container">
		<?php
	}
}
add_action('woocommerce_before_main_content', 'kloudfox_woocommerce_wrapper_before');

if (!function_exists('kloudfox_woocommerce_wrapper_after')) {
	function kloudfox_woocommerce_wrapper_after() {
		?>
			</div>
		</main>
		<?php
	}
}
add_action('woocommerce_after_main_content', 'kloudfox_woocommerce_wrapper_after');

/**
 * Sample implementation of the WooCommerce Mini Cart
 */
if (!function_exists('kloudfox_woocommerce_cart_link_fragment')) {
	function kloudfox_woocommerce_cart_link_fragment($fragments) {
		ob_start();
		kloudfox_woocommerce_cart_link();
		$fragments['a.cart-contents'] = ob_get_clean();

		return $fragments;
	}
}
add_filter('woocommerce_add_to_cart_fragments', 'kloudfox_woocommerce_cart_link_fragment');

if (!function_exists('kloudfox_woocommerce_cart_link')) {
	function kloudfox_woocommerce_cart_link() {
		?>
		<a class="cart-contents" href="<?php echo esc_url(wc_get_cart_url()); ?>" title="<?php esc_attr_e('View your shopping cart', 'kloudfox'); ?>">
			<?php
			$item_count_text = sprintf(
				_n('%d item', '%d items', WC()->cart->get_cart_contents_count(), 'kloudfox'),
				WC()->cart->get_cart_contents_count()
			);
			?>
			<span class="amount"><?php echo wp_kses_data(WC()->cart->get_cart_subtotal()); ?></span> <span class="count"><?php echo esc_html($item_count_text); ?></span>
		</a>
		<?php
	}
}

/**
 * WooCommerce header cart
 */
if (!function_exists('kloudfox_woocommerce_header_cart')) {
	function kloudfox_woocommerce_header_cart() {
		if (is_cart()) {
			$class = 'current-menu-item';
		} else {
			$class = '';
		}
		?>
		<ul id="site-header-cart" class="site-header-cart">
			<li class="<?php echo esc_attr($class); ?>">
				<?php kloudfox_woocommerce_cart_link(); ?>
			</li>
			<li>
				<?php
				$instance = array(
					'title' => '',
				);

				the_widget('WC_Widget_Cart', $instance);
				?>
			</li>
		</ul>
		<?php
	}
}
?>