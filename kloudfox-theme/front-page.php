<?php
/**
 * The front page template file
 *
 * If the user has selected a static page for their homepage, this template will be used.
 * 
 * @package KloudFox
 * @since 1.0.0
 */

get_header(); ?>

<main id="primary" class="site-main">
	
	<?php if ( get_theme_mod( 'kloudfox_show_features', true ) ) : ?>
		<!-- Features Section -->
		<section class="content-section features-section">
			<div class="kf-container">
				<div class="section-title">
					<h2><?php echo esc_html( get_theme_mod( 'kloudfox_features_title', __( 'Comprehensive Monitoring Solutions', 'kloudfox' ) ) ); ?></h2>
					<p class="section-subtitle">
						<?php echo esc_html( get_theme_mod( 'kloudfox_features_subtitle', __( 'Monitor every aspect of your web infrastructure with our advanced monitoring tools and real-time alerts.', 'kloudfox' ) ) ); ?>
					</p>
				</div>

				<div class="feature-grid">
					<?php
					// Get features from customizer or use defaults
					$features = get_theme_mod( 'kloudfox_features', array(
						array(
							'icon' => 'monitor',
							'title' => __( 'Website Uptime Monitoring', 'kloudfox' ),
							'description' => __( 'Get instant alerts when your website goes down. Monitor from multiple global locations with 1-minute check intervals.', 'kloudfox' ),
						),
						array(
							'icon' => 'server',
							'title' => __( 'Server Performance Monitoring', 'kloudfox' ),
							'description' => __( 'Track CPU, memory, disk usage, and network performance. Identify bottlenecks before they impact your users.', 'kloudfox' ),
						),
						array(
							'icon' => 'shield',
							'title' => __( 'SSL Certificate Monitoring', 'kloudfox' ),
							'description' => __( 'Never let your SSL certificates expire. Get alerts 30, 14, and 7 days before expiration.', 'kloudfox' ),
						),
						array(
							'icon' => 'activity',
							'title' => __( 'Performance Analytics', 'kloudfox' ),
							'description' => __( 'Detailed performance metrics, response time analysis, and comprehensive reporting dashboards.', 'kloudfox' ),
						),
						array(
							'icon' => 'bell',
							'title' => __( 'Smart Alerts', 'kloudfox' ),
							'description' => __( 'Customizable alerts via email, SMS, Slack, and webhooks. Set up escalation policies for your team.', 'kloudfox' ),
						),
						array(
							'icon' => 'globe',
							'title' => __( 'Global Monitoring Network', 'kloudfox' ),
							'description' => __( 'Monitor from 15+ global locations to ensure your website is accessible worldwide.', 'kloudfox' ),
						),
					) );

					foreach ( $features as $feature ) :
						?>
						<div class="feature-card">
							<div class="feature-icon">
								<?php echo kloudfox_get_icon( $feature['icon'] ); ?>
							</div>
							<h3><?php echo esc_html( $feature['title'] ); ?></h3>
							<p><?php echo esc_html( $feature['description'] ); ?></p>
						</div>
						<?php
					endforeach;
					?>
				</div>
			</div>
		</section>
	<?php endif; ?>

	<?php if ( get_theme_mod( 'kloudfox_show_stats', true ) ) : ?>
		<!-- Statistics Section -->
		<section class="content-section stats-section">
			<div class="kf-container">
				<div class="stats-grid">
					<?php
					$stats = get_theme_mod( 'kloudfox_stats', array(
						array(
							'number' => '99.99%',
							'label' => __( 'Uptime Monitoring', 'kloudfox' ),
						),
						array(
							'number' => '15+',
							'label' => __( 'Global Locations', 'kloudfox' ),
						),
						array(
							'number' => '1 min',
							'label' => __( 'Check Intervals', 'kloudfox' ),
						),
						array(
							'number' => '24/7',
							'label' => __( 'Support Available', 'kloudfox' ),
						),
					) );

					foreach ( $stats as $stat ) :
						?>
						<div class="stat-item">
							<div class="stat-number"><?php echo esc_html( $stat['number'] ); ?></div>
							<div class="stat-label"><?php echo esc_html( $stat['label'] ); ?></div>
						</div>
						<?php
					endforeach;
					?>
				</div>
			</div>
		</section>
	<?php endif; ?>

	<?php if ( get_theme_mod( 'kloudfox_show_testimonials', true ) ) : ?>
		<!-- Testimonials Section -->
		<section class="content-section testimonials-section">
			<div class="kf-container">
				<div class="section-title">
					<h2><?php echo esc_html( get_theme_mod( 'kloudfox_testimonials_title', __( 'Trusted by Thousands of Businesses', 'kloudfox' ) ) ); ?></h2>
					<p class="section-subtitle">
						<?php echo esc_html( get_theme_mod( 'kloudfox_testimonials_subtitle', __( 'See what our customers say about our monitoring solutions and support.', 'kloudfox' ) ) ); ?>
					</p>
				</div>

				<div class="testimonials-grid">
					<?php
					// Query testimonials custom post type
					$testimonials_query = new WP_Query( array(
						'post_type' => 'testimonial',
						'posts_per_page' => 3,
						'meta_query' => array(
							array(
								'key' => 'featured',
								'value' => '1',
								'compare' => '=',
							),
						),
					) );

					if ( $testimonials_query->have_posts() ) :
						while ( $testimonials_query->have_posts() ) :
							$testimonials_query->the_post();
							?>
							<div class="testimonial-card">
								<?php if ( has_post_thumbnail() ) : ?>
									<div class="testimonial-avatar">
										<?php the_post_thumbnail( 'thumbnail', array( 'alt' => get_the_title() ) ); ?>
									</div>
								<?php endif; ?>
								
								<div class="testimonial-content">
									<?php the_content(); ?>
								</div>
								
								<div class="testimonial-author">
									<h4><?php the_title(); ?></h4>
									<?php
									$company = get_post_meta( get_the_ID(), 'company', true );
									$position = get_post_meta( get_the_ID(), 'position', true );
									if ( $position || $company ) :
										?>
										<p>
											<?php 
											if ( $position ) echo esc_html( $position );
											if ( $position && $company ) echo ' at ';
											if ( $company ) echo esc_html( $company );
											?>
										</p>
									<?php endif; ?>
								</div>
							</div>
							<?php
						endwhile;
						wp_reset_postdata();
					else :
						// Default testimonials if none exist
						$default_testimonials = array(
							array(
								'content' => __( 'KloudFox has been a game-changer for our business. We never miss a website outage anymore, and their alerts are instant.', 'kloudfox' ),
								'author' => __( 'Sarah Johnson', 'kloudfox' ),
								'position' => __( 'CTO', 'kloudfox' ),
								'company' => __( 'TechStart Inc.', 'kloudfox' ),
							),
							array(
								'content' => __( 'The detailed performance analytics help us optimize our website performance and improve user experience significantly.', 'kloudfox' ),
								'author' => __( 'Mike Chen', 'kloudfox' ),
								'position' => __( 'DevOps Engineer', 'kloudfox' ),
								'company' => __( 'Digital Solutions', 'kloudfox' ),
							),
							array(
								'content' => __( 'Excellent service and support. The SSL monitoring feature saved us from a potential security incident.', 'kloudfox' ),
								'author' => __( 'Emma Rodriguez', 'kloudfox' ),
								'position' => __( 'IT Manager', 'kloudfox' ),
				'company' => __( 'Global Corp', 'kloudfox' ),
							),
						);

						foreach ( $default_testimonials as $testimonial ) :
							?>
							<div class="testimonial-card">
								<div class="testimonial-content">
									<p><?php echo esc_html( $testimonial['content'] ); ?></p>
								</div>
								<div class="testimonial-author">
									<h4><?php echo esc_html( $testimonial['author'] ); ?></h4>
									<p><?php echo esc_html( $testimonial['position'] . ' at ' . $testimonial['company'] ); ?></p>
								</div>
							</div>
							<?php
						endforeach;
					endif;
					?>
				</div>
			</div>
		</section>
	<?php endif; ?>

	<?php if ( get_theme_mod( 'kloudfox_show_pricing', true ) ) : ?>
		<!-- Pricing Section -->
		<section class="content-section pricing-section">
			<div class="kf-container">
				<div class="section-title">
					<h2><?php echo esc_html( get_theme_mod( 'kloudfox_pricing_title', __( 'Simple, Transparent Pricing', 'kloudfox' ) ) ); ?></h2>
					<p class="section-subtitle">
						<?php echo esc_html( get_theme_mod( 'kloudfox_pricing_subtitle', __( 'Choose the plan that fits your monitoring needs. All plans include our core features and 24/7 support.', 'kloudfox' ) ) ); ?>
					</p>
				</div>

				<div class="pricing-grid">
					<?php
					$pricing_plans = get_theme_mod( 'kloudfox_pricing_plans', array(
						array(
							'name' => __( 'Starter', 'kloudfox' ),
							'price' => '$9',
							'period' => '/month',
							'description' => __( 'Perfect for small websites and personal projects', 'kloudfox' ),
							'features' => array(
								__( '5 Website Monitors', 'kloudfox' ),
								__( '1-minute Check Intervals', 'kloudfox' ),
								__( 'Email Alerts', 'kloudfox' ),
								__( 'SSL Monitoring', 'kloudfox' ),
								__( 'Basic Reports', 'kloudfox' ),
							),
							'cta_text' => __( 'Start Free Trial', 'kloudfox' ),
							'cta_url' => '#',
							'featured' => false,
						),
						array(
							'name' => __( 'Professional', 'kloudfox' ),
							'price' => '$29',
							'period' => '/month',
							'description' => __( 'Ideal for growing businesses and teams', 'kloudfox' ),
							'features' => array(
								__( '25 Website Monitors', 'kloudfox' ),
								__( '30-second Check Intervals', 'kloudfox' ),
								__( 'SMS + Email Alerts', 'kloudfox' ),
								__( 'SSL + Server Monitoring', 'kloudfox' ),
								__( 'Advanced Reports', 'kloudfox' ),
								__( 'API Access', 'kloudfox' ),
							),
							'cta_text' => __( 'Start Free Trial', 'kloudfox' ),
							'cta_url' => '#',
							'featured' => true,
						),
						array(
							'name' => __( 'Enterprise', 'kloudfox' ),
							'price' => '$99',
							'period' => '/month',
							'description' => __( 'For large organizations with complex needs', 'kloudfox' ),
							'features' => array(
								__( 'Unlimited Monitors', 'kloudfox' ),
								__( '15-second Check Intervals', 'kloudfox' ),
								__( 'All Alert Methods', 'kloudfox' ),
								__( 'Full Stack Monitoring', 'kloudfox' ),
								__( 'Custom Reports', 'kloudfox' ),
								__( 'Priority Support', 'kloudfox' ),
								__( 'SLA Guarantee', 'kloudfox' ),
							),
							'cta_text' => __( 'Contact Sales', 'kloudfox' ),
							'cta_url' => '#',
							'featured' => false,
						),
					) );

					foreach ( $pricing_plans as $plan ) :
						$featured_class = $plan['featured'] ? ' featured' : '';
						?>
						<div class="pricing-card<?php echo esc_attr( $featured_class ); ?>">
							<?php if ( $plan['featured'] ) : ?>
								<div class="featured-badge"><?php esc_html_e( 'Most Popular', 'kloudfox' ); ?></div>
							<?php endif; ?>
							
							<div class="pricing-header">
								<h3><?php echo esc_html( $plan['name'] ); ?></h3>
								<div class="pricing-price">
									<span class="price"><?php echo esc_html( $plan['price'] ); ?></span>
									<span class="period"><?php echo esc_html( $plan['period'] ); ?></span>
								</div>
								<p class="pricing-description"><?php echo esc_html( $plan['description'] ); ?></p>
							</div>

							<div class="pricing-features">
								<ul>
									<?php foreach ( $plan['features'] as $feature ) : ?>
										<li>
											<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" class="feature-check">
												<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
											</svg>
											<?php echo esc_html( $feature ); ?>
										</li>
									<?php endforeach; ?>
								</ul>
							</div>

							<div class="pricing-footer">
								<a href="<?php echo esc_url( $plan['cta_url'] ); ?>" class="kf-button<?php echo $plan['featured'] ? '' : ' kf-button--secondary'; ?>">
									<?php echo esc_html( $plan['cta_text'] ); ?>
								</a>
							</div>
						</div>
						<?php
					endforeach;
					?>
				</div>
			</div>
		</section>
	<?php endif; ?>

	<?php if ( get_theme_mod( 'kloudfox_show_cta', true ) ) : ?>
		<!-- Call to Action Section -->
		<section class="content-section cta-section">
			<div class="kf-container">
				<div class="cta-content">
					<h2><?php echo esc_html( get_theme_mod( 'kloudfox_cta_title', __( 'Ready to Start Monitoring?', 'kloudfox' ) ) ); ?></h2>
					<p><?php echo esc_html( get_theme_mod( 'kloudfox_cta_subtitle', __( 'Join thousands of businesses that trust KloudFox to keep their websites running smoothly. Start your free trial today!', 'kloudfox' ) ) ); ?></p>
					
					<div class="cta-actions">
						<?php if ( get_theme_mod( 'kloudfox_cta_primary_url' ) ) : ?>
							<a href="<?php echo esc_url( get_theme_mod( 'kloudfox_cta_primary_url', '#' ) ); ?>" class="kf-button">
								<?php echo esc_html( get_theme_mod( 'kloudfox_cta_primary_text', __( 'Start Free Trial', 'kloudfox' ) ) ); ?>
							</a>
						<?php endif; ?>

						<?php if ( get_theme_mod( 'kloudfox_cta_secondary_url' ) ) : ?>
							<a href="<?php echo esc_url( get_theme_mod( 'kloudfox_cta_secondary_url', '#' ) ); ?>" class="kf-button kf-button--secondary">
								<?php echo esc_html( get_theme_mod( 'kloudfox_cta_secondary_text', __( 'View Demo', 'kloudfox' ) ) ); ?>
							</a>
						<?php endif; ?>
					</div>
					
					<p class="cta-note">
						<?php echo esc_html( get_theme_mod( 'kloudfox_cta_note', __( 'No credit card required • 14-day free trial • Cancel anytime', 'kloudfox' ) ) ); ?>
					</p>
				</div>
			</div>
		</section>
	<?php endif; ?>

	<?php
	// Display page content if this is a static front page
	while ( have_posts() ) :
		the_post();
		if ( get_the_content() ) :
			?>
			<section class="content-section page-content">
				<div class="kf-container">
					<div class="entry-content">
						<?php the_content(); ?>
					</div>
				</div>
			</section>
			<?php
		endif;
	endwhile;
	?>

</main>

<?php
get_footer();

/**
 * Helper function to get SVG icons
 */
function kloudfox_get_icon( $icon_name ) {
	$icons = array(
		'monitor' => '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
		'server' => '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>',
		'shield' => '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
		'activity' => '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/></svg>',
		'bell' => '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',
		'globe' => '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
	);

	return isset( $icons[ $icon_name ] ) ? $icons[ $icon_name ] : '';
}
?>