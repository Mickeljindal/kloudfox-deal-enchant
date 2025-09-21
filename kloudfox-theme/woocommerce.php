<?php
/**
 * WooCommerce compatibility file
 *
 * @package KloudFox
 * @since 1.0.0
 */

get_header('shop'); ?>

<div class="kf-container">
	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
			<?php woocommerce_content(); ?>
		</main>
	</div>
	
	<?php get_sidebar('shop'); ?>
</div>

<?php get_footer('shop'); ?>