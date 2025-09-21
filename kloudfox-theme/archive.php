<?php
/**
 * The template for displaying archive pages
 *
 * @package KloudFox
 * @since 1.0.0
 */

get_header(); ?>

<main id="primary" class="site-main">
	<div class="kf-container">
		
		<header class="page-header">
			<?php
			the_archive_title( '<h1 class="page-title">', '</h1>' );
			the_archive_description( '<div class="archive-description">', '</div>' );
			?>
		</header>

		<?php if ( have_posts() ) : ?>
			<div class="posts-container">
				<?php while ( have_posts() ) : ?>
					<?php the_post(); ?>
					
					<article id="post-<?php the_ID(); ?>" <?php post_class('post-card'); ?>>
						<?php if ( has_post_thumbnail() ) : ?>
							<div class="post-thumbnail">
								<a href="<?php the_permalink(); ?>">
									<?php the_post_thumbnail('kloudfox-featured', array('alt' => get_the_title())); ?>
								</a>
							</div>
						<?php endif; ?>
						
						<div class="post-content">
							<header class="entry-header">
								<div class="entry-meta">
									<time class="entry-date" datetime="<?php echo esc_attr(get_the_date('c')); ?>">
										<?php echo esc_html(get_the_date()); ?>
									</time>
									<?php if ( has_category() ) : ?>
										<span class="cat-links">
											<?php the_category(', '); ?>
										</span>
									<?php endif; ?>
								</div>
								
								<h2 class="entry-title">
									<a href="<?php the_permalink(); ?>" rel="bookmark">
										<?php the_title(); ?>
									</a>
								</h2>
							</header>

							<div class="entry-summary">
								<?php the_excerpt(); ?>
								<p class="read-more">
									<a href="<?php the_permalink(); ?>" class="kf-button kf-button--secondary">
										<?php esc_html_e('Read More', 'kloudfox'); ?>
									</a>
								</p>
							</div>
						</div>
					</article>
					
				<?php endwhile; ?>
			</div>
			
			<nav class="navigation pagination">
				<?php
				echo paginate_links(
					array(
						'prev_text' => esc_html__('Previous', 'kloudfox'),
						'next_text' => esc_html__('Next', 'kloudfox'),
						'type'      => 'list',
					)
				);
				?>
			</nav>
			
		<?php else : ?>
			<section class="no-results">
				<h1><?php esc_html_e('Nothing here', 'kloudfox'); ?></h1>
				<p><?php esc_html_e('It seems we can&rsquo;t find what you&rsquo;re looking for.', 'kloudfox'); ?></p>
				<?php get_search_form(); ?>
			</section>
		<?php endif; ?>
		
	</div>
</main>

<?php
get_sidebar();
get_footer();
?>