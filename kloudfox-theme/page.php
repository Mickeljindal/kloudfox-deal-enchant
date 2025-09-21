<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @package KloudFox
 * @since 1.0.0
 */

get_header(); ?>

<main id="primary" class="site-main">
	<div class="kf-container">
		
		<?php while ( have_posts() ) : ?>
			<?php the_post(); ?>
			
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
				
				<?php if ( ! is_front_page() ) : ?>
					<header class="entry-header">
						<?php if ( has_post_thumbnail() ) : ?>
							<div class="page-featured-image">
								<?php the_post_thumbnail( 'kloudfox-hero', array( 'alt' => get_the_title() ) ); ?>
							</div>
						<?php endif; ?>
						
						<div class="page-header-content">
							<h1 class="entry-title"><?php the_title(); ?></h1>
							
							<?php
							$subtitle = get_post_meta( get_the_ID(), 'page_subtitle', true );
							if ( $subtitle ) :
								?>
								<p class="page-subtitle"><?php echo esc_html( $subtitle ); ?></p>
							<?php endif; ?>
						</div>
					</header>
				<?php endif; ?>

				<div class="entry-content">
					<?php
					the_content();

					wp_link_pages(
						array(
							'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'kloudfox' ),
							'after'  => '</div>',
						)
					);
					?>
				</div>

				<?php if ( get_edit_post_link() ) : ?>
					<footer class="entry-footer">
						<?php
						edit_post_link(
							sprintf(
								wp_kses(
									/* translators: %s: Name of current post. Only visible to screen readers */
									__( 'Edit <span class="screen-reader-text">%s</span>', 'kloudfox' ),
									array(
										'span' => array(
											'class' => array(),
										),
									)
								),
								wp_kses_post( get_the_title() )
							),
							'<span class="edit-link">',
							'</span>'
						);
						?>
					</footer>
				<?php endif; ?>
				
			</article>

			<?php
			// If comments are open or we have at least one comment, load up the comment template.
			if ( comments_open() || get_comments_number() ) :
				comments_template();
			endif;
			?>
			
		<?php endwhile; ?>
		
	</div>
</main>

<?php
get_sidebar();
get_footer();
?>