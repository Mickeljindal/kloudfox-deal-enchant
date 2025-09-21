<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 *
 * @package KloudFox
 * @since 1.0.0
 */

get_header(); ?>

<main id="primary" class="site-main">
	<div class="kf-container">
		
		<?php if ( have_posts() ) : ?>
			
			<?php if ( is_home() && ! is_front_page() ) : ?>
				<header class="page-header">
					<h1 class="page-title"><?php single_post_title(); ?></h1>
				</header>
			<?php endif; ?>

			<div class="posts-container">
				<?php while ( have_posts() ) : ?>
					<?php the_post(); ?>
					
					<article id="post-<?php the_ID(); ?>" <?php post_class('post-card'); ?>>
						
						<?php if ( has_post_thumbnail() ) : ?>
							<div class="post-thumbnail">
								<a href="<?php the_permalink(); ?>">
									<?php the_post_thumbnail('large', array('alt' => get_the_title())); ?>
								</a>
							</div>
						<?php endif; ?>
						
						<div class="post-content">
							<header class="entry-header">
								<div class="entry-meta">
									<span class="posted-on">
										<time class="entry-date published" datetime="<?php echo esc_attr(get_the_date('c')); ?>">
											<?php echo esc_html(get_the_date()); ?>
										</time>
									</span>
									<span class="byline">
										<?php esc_html_e('by', 'kloudfox'); ?>
										<span class="author vcard">
											<a class="url fn n" href="<?php echo esc_url(get_author_posts_url(get_the_author_meta('ID'))); ?>">
												<?php echo esc_html(get_the_author()); ?>
											</a>
										</span>
									</span>
									<?php if ( has_category() ) : ?>
										<span class="cat-links">
											<?php esc_html_e('in', 'kloudfox'); ?>
											<?php the_category(', '); ?>
										</span>
									<?php endif; ?>
								</div>
								
								<?php if ( is_singular() ) : ?>
									<h1 class="entry-title"><?php the_title(); ?></h1>
								<?php else : ?>
									<h2 class="entry-title">
										<a href="<?php the_permalink(); ?>" rel="bookmark">
											<?php the_title(); ?>
										</a>
									</h2>
								<?php endif; ?>
							</header>

							<div class="entry-content">
								<?php if ( is_singular() ) : ?>
									<?php the_content(); ?>
									<?php
									wp_link_pages(
										array(
											'before' => '<div class="page-links">' . esc_html__('Pages:', 'kloudfox'),
											'after'  => '</div>',
										)
									);
									?>
								<?php else : ?>
									<?php the_excerpt(); ?>
									<p class="read-more">
										<a href="<?php the_permalink(); ?>" class="kf-button kf-button--secondary">
											<?php esc_html_e('Read More', 'kloudfox'); ?>
										</a>
									</p>
								<?php endif; ?>
							</div>
							
							<?php if ( is_singular() ) : ?>
								<footer class="entry-footer">
									<?php
									$tags_list = get_the_tag_list('', esc_html_x(', ', 'list item separator', 'kloudfox'));
									if ( $tags_list ) {
										printf(
											'<span class="tags-links">' . esc_html__('Tagged %1$s', 'kloudfox') . '</span>',
											$tags_list
										);
									}
									?>
									
									<?php if ( comments_open() || get_comments_number() ) : ?>
										<span class="comments-link">
											<?php comments_popup_link(
												esc_html__('Leave a comment', 'kloudfox'),
												esc_html__('1 Comment', 'kloudfox'),
												esc_html__('% Comments', 'kloudfox')
											); ?>
										</span>
									<?php endif; ?>
								</footer>
							<?php endif; ?>
						</div>
					</article>
					
				<?php endwhile; ?>
				
				<?php if ( ! is_singular() ) : ?>
					<nav class="navigation pagination">
						<h2 class="screen-reader-text"><?php esc_html_e('Posts navigation', 'kloudfox'); ?></h2>
						<div class="nav-links">
							<?php
							echo paginate_links(
								array(
									'prev_text' => esc_html__('Previous', 'kloudfox'),
									'next_text' => esc_html__('Next', 'kloudfox'),
									'type'      => 'list',
								)
							);
							?>
						</div>
					</nav>
				<?php endif; ?>
			</div>
			
		<?php else : ?>
			
			<section class="no-results not-found">
				<header class="page-header">
					<h1 class="page-title"><?php esc_html_e('Nothing here', 'kloudfox'); ?></h1>
				</header>

				<div class="page-content">
					<?php if ( is_home() && current_user_can('publish_posts') ) : ?>
						<p>
							<?php
							printf(
								wp_kses(
									__('Ready to publish your first post? <a href="%1$s">Get started here</a>.', 'kloudfox'),
									array(
										'a' => array(
											'href' => array(),
										),
									)
								),
								esc_url(admin_url('post-new.php'))
							);
							?>
						</p>
					<?php elseif ( is_search() ) : ?>
						<p><?php esc_html_e('Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'kloudfox'); ?></p>
						<?php get_search_form(); ?>
					<?php else : ?>
						<p><?php esc_html_e('It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', 'kloudfox'); ?></p>
						<?php get_search_form(); ?>
					<?php endif; ?>
				</div>
			</section>
			
		<?php endif; ?>
		
	</div>
</main>

<?php
get_sidebar();
get_footer();
?>