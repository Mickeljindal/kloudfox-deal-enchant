<?php
/**
 * Template part for displaying hero section
 *
 * @package KloudFox
 * @since 1.0.0
 */

if (!get_theme_mod('kloudfox_show_hero', true)) {
	return;
}
?>

<section class="hero-section">
	<div class="kf-container">
		<div class="hero-content">
			<h1 class="hero-title">
				<?php echo esc_html(get_theme_mod('kloudfox_hero_title', __('Monitor Your Website 24/7', 'kloudfox'))); ?>
			</h1>
			<p class="hero-subtitle">
				<?php echo esc_html(get_theme_mod('kloudfox_hero_subtitle', __('Get instant alerts when your website goes down. Monitor uptime, performance, and SSL certificates from one powerful dashboard.', 'kloudfox'))); ?>
			</p>
			<div class="hero-actions">
				<?php if (get_theme_mod('kloudfox_hero_primary_url')) : ?>
					<a href="<?php echo esc_url(get_theme_mod('kloudfox_hero_primary_url', '#')); ?>" class="kf-button">
						<?php echo esc_html(get_theme_mod('kloudfox_hero_primary_text', __('Start Free Trial', 'kloudfox'))); ?>
					</a>
				<?php endif; ?>

				<?php if (get_theme_mod('kloudfox_hero_secondary_url')) : ?>
					<a href="<?php echo esc_url(get_theme_mod('kloudfox_hero_secondary_url', '#')); ?>" class="kf-button kf-button--secondary">
						<?php echo esc_html(get_theme_mod('kloudfox_hero_secondary_text', __('View Demo', 'kloudfox'))); ?>
					</a>
				<?php endif; ?>
			</div>
		</div>

		<?php if (get_theme_mod('kloudfox_hero_image')) : ?>
			<div class="hero-image">
				<img src="<?php echo esc_url(get_theme_mod('kloudfox_hero_image')); ?>" alt="<?php echo esc_attr(get_theme_mod('kloudfox_hero_title', __('KloudFox Dashboard', 'kloudfox'))); ?>">
			</div>
		<?php endif; ?>
	</div>
</section>