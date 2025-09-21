<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @package KloudFox
 * @since 1.0.0
 */
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<!-- Preconnect to external domains -->
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

	<!-- SEO Meta Tags -->
	<?php if ( is_front_page() ) : ?>
		<meta name="description" content="<?php echo esc_attr( get_theme_mod( 'kloudfox_site_description', 'Professional website monitoring and server management solutions. Monitor uptime, SSL certificates, and server performance with real-time alerts.' ) ); ?>">
		<meta name="keywords" content="<?php echo esc_attr( get_theme_mod( 'kloudfox_site_keywords', 'website monitoring, server monitoring, uptime monitoring, SSL monitoring, performance monitoring' ) ); ?>">
	<?php endif; ?>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="<?php echo is_front_page() ? 'website' : 'article'; ?>">
	<meta property="og:url" content="<?php echo esc_url( get_permalink() ); ?>">
	<meta property="og:title" content="<?php wp_title( '|', true, 'right' ); ?>">
	<meta property="og:description" content="<?php echo esc_attr( get_the_excerpt() ?: get_theme_mod( 'kloudfox_site_description', 'Professional website monitoring solutions' ) ); ?>">
	<?php if ( has_post_thumbnail() ) : ?>
		<meta property="og:image" content="<?php echo esc_url( get_the_post_thumbnail_url( null, 'large' ) ); ?>">
	<?php endif; ?>

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image">
	<meta property="twitter:url" content="<?php echo esc_url( get_permalink() ); ?>">
	<meta property="twitter:title" content="<?php wp_title( '|', true, 'right' ); ?>">
	<meta property="twitter:description" content="<?php echo esc_attr( get_the_excerpt() ?: get_theme_mod( 'kloudfox_site_description', 'Professional website monitoring solutions' ) ); ?>">
	<?php if ( has_post_thumbnail() ) : ?>
		<meta property="twitter:image" content="<?php echo esc_url( get_the_post_thumbnail_url( null, 'large' ) ); ?>">
	<?php endif; ?>

	<!-- Favicon -->
	<link rel="apple-touch-icon" sizes="180x180" href="<?php echo esc_url( KLOUDFOX_THEME_URI . '/assets/images/apple-touch-icon.png' ); ?>">
	<link rel="icon" type="image/png" sizes="32x32" href="<?php echo esc_url( KLOUDFOX_THEME_URI . '/assets/images/favicon-32x32.png' ); ?>">
	<link rel="icon" type="image/png" sizes="16x16" href="<?php echo esc_url( KLOUDFOX_THEME_URI . '/assets/images/favicon-16x16.png' ); ?>">
	<link rel="manifest" href="<?php echo esc_url( KLOUDFOX_THEME_URI . '/assets/images/site.webmanifest' ); ?>">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'kloudfox' ); ?></a>

<div id="page" class="site">
	<header id="masthead" class="site-header">
		<div class="kf-container">
			<div class="site-branding">
				<?php
				if ( has_custom_logo() ) :
					the_custom_logo();
				else :
					?>
					<h1 class="site-title">
						<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
							<?php bloginfo( 'name' ); ?>
						</a>
					</h1>
					<?php
					$kloudfox_description = get_bloginfo( 'description', 'display' );
					if ( $kloudfox_description || is_customize_preview() ) :
						?>
						<p class="site-description"><?php echo $kloudfox_description; ?></p>
					<?php endif; ?>
				<?php endif; ?>
			</div>

			<nav id="site-navigation" class="main-navigation" aria-label="<?php esc_attr_e( 'Primary Menu', 'kloudfox' ); ?>">
				<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
					<span class="screen-reader-text"><?php esc_html_e( 'Menu', 'kloudfox' ); ?></span>
					<svg class="hamburger" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					<svg class="close-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: none;">
						<path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</button>

				<div class="menu-wrapper">
					<?php
					wp_nav_menu(
						array(
							'theme_location' => 'primary',
							'menu_id'        => 'primary-menu',
							'menu_class'     => 'primary-menu',
							'container'      => false,
							'walker'         => new KloudFox_Walker_Nav_Menu(),
							'fallback_cb'    => 'kloudfox_default_menu',
						)
					);
					?>

					<div class="header-actions">
						<?php if ( get_theme_mod( 'kloudfox_header_login_url' ) ) : ?>
							<a href="<?php echo esc_url( get_theme_mod( 'kloudfox_header_login_url', '#' ) ); ?>" class="login-link">
								<?php esc_html_e( 'Login', 'kloudfox' ); ?>
							</a>
						<?php endif; ?>

						<?php if ( get_theme_mod( 'kloudfox_header_cta_url' ) ) : ?>
							<a href="<?php echo esc_url( get_theme_mod( 'kloudfox_header_cta_url', '#' ) ); ?>" class="kf-button">
								<?php echo esc_html( get_theme_mod( 'kloudfox_header_cta_text', __( 'Start Free Trial', 'kloudfox' ) ) ); ?>
							</a>
						<?php endif; ?>
					</div>
				</div>
			</nav>
		</div>
	</header>

	<?php if ( is_front_page() && get_theme_mod( 'kloudfox_show_hero', true ) ) : ?>
		<section class="hero-section">
			<div class="kf-container">
				<div class="hero-content">
					<h1 class="hero-title">
						<?php echo esc_html( get_theme_mod( 'kloudfox_hero_title', __( 'Monitor Your Website 24/7', 'kloudfox' ) ) ); ?>
					</h1>
					<p class="hero-subtitle">
						<?php echo esc_html( get_theme_mod( 'kloudfox_hero_subtitle', __( 'Get instant alerts when your website goes down. Monitor uptime, performance, and SSL certificates from one powerful dashboard.', 'kloudfox' ) ) ); ?>
					</p>
					<div class="hero-actions">
						<?php if ( get_theme_mod( 'kloudfox_hero_primary_url' ) ) : ?>
							<a href="<?php echo esc_url( get_theme_mod( 'kloudfox_hero_primary_url', '#' ) ); ?>" class="kf-button">
								<?php echo esc_html( get_theme_mod( 'kloudfox_hero_primary_text', __( 'Start Free Trial', 'kloudfox' ) ) ); ?>
							</a>
						<?php endif; ?>

						<?php if ( get_theme_mod( 'kloudfox_hero_secondary_url' ) ) : ?>
							<a href="<?php echo esc_url( get_theme_mod( 'kloudfox_hero_secondary_url', '#' ) ); ?>" class="kf-button kf-button--secondary">
								<?php echo esc_html( get_theme_mod( 'kloudfox_hero_secondary_text', __( 'View Demo', 'kloudfox' ) ) ); ?>
							</a>
						<?php endif; ?>
					</div>
				</div>

				<?php if ( get_theme_mod( 'kloudfox_hero_image' ) ) : ?>
					<div class="hero-image">
						<img src="<?php echo esc_url( get_theme_mod( 'kloudfox_hero_image' ) ); ?>" alt="<?php echo esc_attr( get_theme_mod( 'kloudfox_hero_title', __( 'KloudFox Dashboard', 'kloudfox' ) ) ); ?>">
					</div>
				<?php endif; ?>
			</div>
		</section>
	<?php endif; ?>

	<div id="content" class="site-content">

<?php
/**
 * Fallback menu function
 */
function kloudfox_default_menu() {
	echo '<ul id="primary-menu" class="primary-menu">';
	echo '<li><a href="' . esc_url( home_url( '/' ) ) . '">' . esc_html__( 'Home', 'kloudfox' ) . '</a></li>';
	echo '<li><a href="' . esc_url( home_url( '/about' ) ) . '">' . esc_html__( 'About', 'kloudfox' ) . '</a></li>';
	echo '<li><a href="' . esc_url( home_url( '/pricing' ) ) . '">' . esc_html__( 'Pricing', 'kloudfox' ) . '</a></li>';
	echo '<li><a href="' . esc_url( home_url( '/contact' ) ) . '">' . esc_html__( 'Contact', 'kloudfox' ) . '</a></li>';
	echo '</ul>';
}
?>