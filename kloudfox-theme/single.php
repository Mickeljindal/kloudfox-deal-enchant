<?php
/**
 * The template for displaying all single posts
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
				
				<header class="entry-header">
					<?php if ( has_post_thumbnail() ) : ?>
						<div class="post-featured-image">
							<?php the_post_thumbnail( 'kloudfox-hero', array( 'alt' => get_the_title() ) ); ?>
						</div>
					<?php endif; ?>
					
					<div class="post-header-content">
						<div class="entry-meta">
							<span class="posted-on">
								<time class="entry-date published" datetime="<?php echo esc_attr( get_the_date( 'c' ) ); ?>">
									<?php echo esc_html( get_the_date() ); ?>
								</time>
								<?php if ( get_the_date() !== get_the_modified_date() ) : ?>
									<time class="updated" datetime="<?php echo esc_attr( get_the_modified_date( 'c' ) ); ?>">
										<?php echo esc_html( get_the_modified_date() ); ?>
									</time>
								<?php endif; ?>
							</span>
							
							<span class="byline">
								<?php esc_html_e( 'by', 'kloudfox' ); ?>
								<span class="author vcard">
									<a class="url fn n" href="<?php echo esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ); ?>">
										<?php echo esc_html( get_the_author() ); ?>
									</a>
								</span>
							</span>
							
							<?php if ( has_category() ) : ?>
								<span class="cat-links">
									<?php esc_html_e( 'in', 'kloudfox' ); ?>
									<?php the_category( ', ' ); ?>
								</span>
							<?php endif; ?>
							
							<?php
							$reading_time = kloudfox_get_reading_time( get_the_content() );
							if ( $reading_time ) :
								?>
								<span class="reading-time">
									<?php printf( esc_html__( '%s min read', 'kloudfox' ), $reading_time ); ?>
								</span>
							<?php endif; ?>
						</div>
						
						<h1 class="entry-title"><?php the_title(); ?></h1>
						
						<?php
						$excerpt = get_the_excerpt();
						if ( $excerpt ) :
							?>
							<div class="post-excerpt">
								<p><?php echo esc_html( $excerpt ); ?></p>
							</div>
						<?php endif; ?>
					</div>
				</header>

				<div class="entry-content">
					<?php
					the_content(
						sprintf(
							wp_kses(
								/* translators: %s: Name of current post. */
								__( 'Continue reading<span class="screen-reader-text"> "%s"</span>', 'kloudfox' ),
								array(
									'span' => array(
										'class' => array(),
									),
								)
							),
							wp_kses_post( get_the_title() )
						)
					);

					wp_link_pages(
						array(
							'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'kloudfox' ),
							'after'  => '</div>',
						)
					);
					?>
				</div>

				<footer class="entry-footer">
					<?php
					$tags_list = get_the_tag_list( '', esc_html_x( ', ', 'list item separator', 'kloudfox' ) );
					if ( $tags_list ) {
						printf(
							'<span class="tags-links">' . esc_html__( 'Tagged %1$s', 'kloudfox' ) . '</span>',
							$tags_list
						);
					}
					?>
					
					<div class="post-sharing">
						<h4><?php esc_html_e( 'Share this post:', 'kloudfox' ); ?></h4>
						<div class="social-share">
							<a href="https://twitter.com/intent/tweet?url=<?php echo urlencode( get_permalink() ); ?>&text=<?php echo urlencode( get_the_title() ); ?>" 
							   target="_blank" 
							   rel="noopener noreferrer"
							   class="share-twitter"
							   aria-label="<?php esc_attr_e( 'Share on Twitter', 'kloudfox' ); ?>">
								<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
									<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
								</svg>
								<?php esc_html_e( 'Twitter', 'kloudfox' ); ?>
							</a>
							
							<a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo urlencode( get_permalink() ); ?>" 
							   target="_blank" 
							   rel="noopener noreferrer"
							   class="share-facebook"
							   aria-label="<?php esc_attr_e( 'Share on Facebook', 'kloudfox' ); ?>">
								<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
									<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
								</svg>
								<?php esc_html_e( 'Facebook', 'kloudfox' ); ?>
							</a>
							
							<a href="https://www.linkedin.com/sharing/share-offsite/?url=<?php echo urlencode( get_permalink() ); ?>" 
							   target="_blank" 
							   rel="noopener noreferrer"
							   class="share-linkedin"
							   aria-label="<?php esc_attr_e( 'Share on LinkedIn', 'kloudfox' ); ?>">
								<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
									<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
								</svg>
								<?php esc_html_e( 'LinkedIn', 'kloudfox' ); ?>
							</a>
						</div>
					</div>
				</footer>
				
			</article>

			<?php
			// Author bio
			if ( get_the_author_meta( 'description' ) ) :
				?>
				<div class="author-bio">
					<div class="author-avatar">
						<?php echo get_avatar( get_the_author_meta( 'ID' ), 80 ); ?>
					</div>
					<div class="author-info">
						<h4><?php echo esc_html( get_the_author() ); ?></h4>
						<p><?php echo wp_kses_post( get_the_author_meta( 'description' ) ); ?></p>
						<a href="<?php echo esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ); ?>" class="author-link">
							<?php esc_html_e( 'View all posts', 'kloudfox' ); ?>
						</a>
					</div>
				</div>
			<?php endif; ?>

			<?php
			// Related posts
			$related_posts = kloudfox_get_related_posts( get_the_ID() );
			if ( $related_posts->have_posts() ) :
				?>
				<div class="related-posts">
					<h3><?php esc_html_e( 'Related Posts', 'kloudfox' ); ?></h3>
					<div class="related-posts-grid">
						<?php
						while ( $related_posts->have_posts() ) :
							$related_posts->the_post();
							?>
							<article class="related-post-card">
								<?php if ( has_post_thumbnail() ) : ?>
									<div class="related-post-thumbnail">
										<a href="<?php the_permalink(); ?>">
											<?php the_post_thumbnail( 'kloudfox-grid', array( 'alt' => get_the_title() ) ); ?>
										</a>
									</div>
								<?php endif; ?>
								<div class="related-post-content">
									<h4><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>
									<div class="related-post-meta">
										<time datetime="<?php echo esc_attr( get_the_date( 'c' ) ); ?>">
											<?php echo esc_html( get_the_date() ); ?>
										</time>
									</div>
								</div>
							</article>
							<?php
						endwhile;
						wp_reset_postdata();
						?>
					</div>
				</div>
			<?php endif; ?>

			<?php
			// Post navigation
			the_post_navigation(
				array(
					'prev_text' => '<span class="nav-subtitle">' . esc_html__( 'Previous:', 'kloudfox' ) . '</span> <span class="nav-title">%title</span>',
					'next_text' => '<span class="nav-subtitle">' . esc_html__( 'Next:', 'kloudfox' ) . '</span> <span class="nav-title">%title</span>',
				)
			);
			?>

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

/**
 * Get reading time estimate
 */
function kloudfox_get_reading_time( $content ) {
	$word_count = str_word_count( strip_tags( $content ) );
	$reading_time = ceil( $word_count / 200 ); // Average reading speed
	return $reading_time;
}

/**
 * Get related posts
 */
function kloudfox_get_related_posts( $post_id, $posts_per_page = 3 ) {
	$categories = wp_get_post_categories( $post_id );
	
	if ( empty( $categories ) ) {
		return new WP_Query();
	}
	
	$args = array(
		'category__in'   => $categories,
		'post__not_in'   => array( $post_id ),
		'posts_per_page' => $posts_per_page,
		'orderby'        => 'rand',
	);
	
	return new WP_Query( $args );
}
?>