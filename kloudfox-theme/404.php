<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @package KloudFox
 * @since 1.0.0
 */

get_header(); ?>

<main id="primary" class="site-main">
	<div class="kf-container">
		<section class="error-404 not-found">
			<header class="page-header">
				<h1 class="page-title"><?php esc_html_e('Oops! That page can&rsquo;t be found.', 'kloudfox'); ?></h1>
			</header>

			<div class="page-content">
				<p><?php esc_html_e('It looks like nothing was found at this location. Maybe try one of the links below or a search?', 'kloudfox'); ?></p>

				<?php get_search_form(); ?>

				<div class="widget-area">
					<div class="widget">
						<h2 class="widget-title"><?php esc_html_e('Most Used Categories', 'kloudfox'); ?></h2>
						<ul>
							<?php
							wp_list_categories(
								array(
									'orderby'    => 'count',
									'order'      => 'DESC',
									'show_count' => 1,
									'title_li'   => '',
									'number'     => 10,
								)
							);
							?>
						</ul>
					</div>

					<div class="widget">
						<h2 class="widget-title"><?php esc_html_e('Try looking in the monthly archives.', 'kloudfox'); ?></h2>
						<ul>
							<?php
							wp_get_archives(
								array(
									'type'  => 'monthly',
									'limit' => 12,
								)
							);
							?>
						</ul>
					</div>
				</div>
			</div>
		</section>
	</div>
</main>

<?php
get_footer();
?>