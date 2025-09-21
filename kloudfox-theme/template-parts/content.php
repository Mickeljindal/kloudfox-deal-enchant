<?php
/**
 * Template part for displaying posts
 *
 * @package KloudFox
 * @since 1.0.0
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class('post-card'); ?>>
	<?php if (has_post_thumbnail()) : ?>
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
				<?php if (has_category()) : ?>
					<span class="cat-links">
						<?php the_category(', '); ?>
					</span>
				<?php endif; ?>
			</div>
			
			<?php if (is_singular()) : ?>
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
			<?php if (is_singular()) : ?>
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
	</div>
</article>