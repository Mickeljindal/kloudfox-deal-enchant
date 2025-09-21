<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @package KloudFox
 * @since 1.0.0
 */
?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer">
		<div class="kf-container">
			<?php if ( is_active_sidebar( 'footer-1' ) || is_active_sidebar( 'footer-2' ) || is_active_sidebar( 'footer-3' ) || is_active_sidebar( 'footer-4' ) ) : ?>
				<div class="footer-widgets">
					<?php if ( is_active_sidebar( 'footer-1' ) ) : ?>
						<div class="footer-widget-area">
							<?php dynamic_sidebar( 'footer-1' ); ?>
						</div>
					<?php endif; ?>

					<?php if ( is_active_sidebar( 'footer-2' ) ) : ?>
						<div class="footer-widget-area">
							<?php dynamic_sidebar( 'footer-2' ); ?>
						</div>
					<?php endif; ?>

					<?php if ( is_active_sidebar( 'footer-3' ) ) : ?>
						<div class="footer-widget-area">
							<?php dynamic_sidebar( 'footer-3' ); ?>
						</div>
					<?php endif; ?>

					<?php if ( is_active_sidebar( 'footer-4' ) ) : ?>
						<div class="footer-widget-area">
							<?php dynamic_sidebar( 'footer-4' ); ?>
						</div>
					<?php endif; ?>
				</div>
			<?php else : ?>
				<!-- Default footer content when no widgets are present -->
				<div class="footer-widgets">
					<div class="footer-widget-area">
						<h3><?php esc_html_e( 'About KloudFox', 'kloudfox' ); ?></h3>
						<p><?php echo esc_html( get_theme_mod( 'kloudfox_footer_about', __( 'Professional website monitoring and server management solutions. Monitor your website uptime, performance, and security with real-time alerts and comprehensive reporting.', 'kloudfox' ) ) ); ?></p>
						
						<?php if ( get_theme_mod( 'kloudfox_social_facebook' ) || get_theme_mod( 'kloudfox_social_twitter' ) || get_theme_mod( 'kloudfox_social_linkedin' ) || get_theme_mod( 'kloudfox_social_youtube' ) ) : ?>
							<div class="social-links">
								<?php if ( get_theme_mod( 'kloudfox_social_facebook' ) ) : ?>
									<a href="<?php echo esc_url( get_theme_mod( 'kloudfox_social_facebook' ) ); ?>" target="_blank" rel="noopener noreferrer" aria-label="<?php esc_attr_e( 'Facebook', 'kloudfox' ); ?>">
										<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
									</a>
								<?php endif; ?>

								<?php if ( get_theme_mod( 'kloudfox_social_twitter' ) ) : ?>
									<a href="<?php echo esc_url( get_theme_mod( 'kloudfox_social_twitter' ) ); ?>" target="_blank" rel="noopener noreferrer" aria-label="<?php esc_attr_e( 'Twitter', 'kloudfox' ); ?>">
										<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
									</a>
								<?php endif; ?>

								<?php if ( get_theme_mod( 'kloudfox_social_linkedin' ) ) : ?>
									<a href="<?php echo esc_url( get_theme_mod( 'kloudfox_social_linkedin' ) ); ?>" target="_blank" rel="noopener noreferrer" aria-label="<?php esc_attr_e( 'LinkedIn', 'kloudfox' ); ?>">
										<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
									</a>
								<?php endif; ?>

								<?php if ( get_theme_mod( 'kloudfox_social_youtube' ) ) : ?>
									<a href="<?php echo esc_url( get_theme_mod( 'kloudfox_social_youtube' ) ); ?>" target="_blank" rel="noopener noreferrer" aria-label="<?php esc_attr_e( 'YouTube', 'kloudfox' ); ?>">
										<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
									</a>
								<?php endif; ?>
							</div>
						<?php endif; ?>
					</div>

					<div class="footer-widget-area">
						<h3><?php esc_html_e( 'Products', 'kloudfox' ); ?></h3>
						<ul>
							<li><a href="<?php echo esc_url( home_url( '/website-monitoring' ) ); ?>"><?php esc_html_e( 'Website Monitoring', 'kloudfox' ); ?></a></li>
							<li><a href="<?php echo esc_url( home_url( '/server-monitoring' ) ); ?>"><?php esc_html_e( 'Server Monitoring', 'kloudfox' ); ?></a></li>
							<li><a href="<?php echo esc_url( home_url( '/ssl-monitoring' ) ); ?>"><?php esc_html_e( 'SSL Monitoring', 'kloudfox' ); ?></a></li>
							<li><a href="<?php echo esc_url( home_url( '/status-page' ) ); ?>"><?php esc_html_e( 'Status Page', 'kloudfox' ); ?></a></li>
							<li><a href="<?php echo esc_url( home_url( '/incident-management' ) ); ?>"><?php esc_html_e( 'Incident Management', 'kloudfox' ); ?></a></li>
						</ul>
					</div>

					<div class="footer-widget-area">
						<h3><?php esc_html_e( 'Company', 'kloudfox' ); ?></h3>
						<ul>
							<li><a href="<?php echo esc_url( home_url( '/about' ) ); ?>"><?php esc_html_e( 'About Us', 'kloudfox' ); ?></a></li>
							<li><a href="<?php echo esc_url( home_url( '/pricing' ) ); ?>"><?php esc_html_e( 'Pricing', 'kloudfox' ); ?></a></li>
							<li><a href="<?php echo esc_url( home_url( '/contact' ) ); ?>"><?php esc_html_e( 'Contact', 'kloudfox' ); ?></a></li>
							<li><a href="<?php echo esc_url( home_url( '/blog' ) ); ?>"><?php esc_html_e( 'Blog', 'kloudfox' ); ?></a></li>
							<li><a href="<?php echo esc_url( home_url( '/integrations' ) ); ?>"><?php esc_html_e( 'Integrations', 'kloudfox' ); ?></a></li>
						</ul>
					</div>

					<div class="footer-widget-area">
						<h3><?php esc_html_e( 'Legal', 'kloudfox' ); ?></h3>
						<ul>
							<li><a href="<?php echo esc_url( home_url( '/privacy-policy' ) ); ?>"><?php esc_html_e( 'Privacy Policy', 'kloudfox' ); ?></a></li>
							<li><a href="<?php echo esc_url( home_url( '/terms-of-service' ) ); ?>"><?php esc_html_e( 'Terms of Service', 'kloudfox' ); ?></a></li>
							<li><a href="<?php echo esc_url( home_url( '/cookie-policy' ) ); ?>"><?php esc_html_e( 'Cookie Policy', 'kloudfox' ); ?></a></li>
							<li><a href="<?php echo esc_url( home_url( '/refund-policy' ) ); ?>"><?php esc_html_e( 'Refund Policy', 'kloudfox' ); ?></a></li>
							<li><a href="<?php echo esc_url( home_url( '/data-processing-agreement' ) ); ?>"><?php esc_html_e( 'Data Processing Agreement', 'kloudfox' ); ?></a></li>
						</ul>
					</div>
				</div>
			<?php endif; ?>

			<?php if ( has_nav_menu( 'footer' ) ) : ?>
				<nav class="footer-navigation" aria-label="<?php esc_attr_e( 'Footer Menu', 'kloudfox' ); ?>">
					<?php
					wp_nav_menu(
						array(
							'theme_location' => 'footer',
							'menu_class'     => 'footer-menu',
							'container'      => false,
							'depth'          => 1,
						)
					);
					?>
				</nav>
			<?php endif; ?>

			<div class="footer-bottom">
				<p class="copyright">
					&copy; <?php echo esc_html( date( 'Y' ) ); ?>
					<a href="<?php echo esc_url( home_url( '/' ) ); ?>">
						<?php bloginfo( 'name' ); ?>
					</a>.
					<?php esc_html_e( 'All rights reserved.', 'kloudfox' ); ?>
				</p>

				<?php if ( get_theme_mod( 'kloudfox_footer_text' ) ) : ?>
					<p class="footer-text">
						<?php echo wp_kses_post( get_theme_mod( 'kloudfox_footer_text' ) ); ?>
					</p>
				<?php endif; ?>
			</div>
		</div>
	</footer>
</div><!-- #page -->

<?php
// Add structured data for organization
if ( is_front_page() ) {
	$schema = array(
		'@context' => 'https://schema.org',
		'@type' => 'Organization',
		'name' => get_bloginfo( 'name' ),
		'url' => home_url(),
		'description' => get_theme_mod( 'kloudfox_site_description', get_bloginfo( 'description' ) ),
		'contactPoint' => array(
			'@type' => 'ContactPoint',
			'contactType' => 'customer service',
			'url' => home_url( '/contact' ),
		),
	);

	if ( has_custom_logo() ) {
		$custom_logo_id = get_theme_mod( 'custom_logo' );
		$logo_url = wp_get_attachment_image_url( $custom_logo_id, 'full' );
		if ( $logo_url ) {
			$schema['logo'] = array(
				'@type' => 'ImageObject',
				'url' => $logo_url,
			);
		}
	}

	echo '<script type="application/ld+json">' . wp_json_encode( $schema, JSON_UNESCAPED_SLASHES ) . '</script>';
}
?>

<?php wp_footer(); ?>

<!-- Performance and Analytics -->
<?php if ( get_theme_mod( 'kloudfox_google_analytics' ) && ! is_user_logged_in() ) : ?>
	<!-- Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=<?php echo esc_attr( get_theme_mod( 'kloudfox_google_analytics' ) ); ?>"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', '<?php echo esc_attr( get_theme_mod( 'kloudfox_google_analytics' ) ); ?>');
	</script>
<?php endif; ?>

</body>
</html>