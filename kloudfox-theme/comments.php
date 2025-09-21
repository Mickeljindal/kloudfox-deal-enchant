<?php
/**
 * The template for displaying comments
 *
 * @package KloudFox
 * @since 1.0.0
 */

if (post_password_required()) {
	return;
}
?>

<div id="comments" class="comments-area">

	<?php if (have_comments()) : ?>
		<h2 class="comments-title">
			<?php
			$kloudfox_comment_count = get_comments_number();
			if ('1' === $kloudfox_comment_count) {
				printf(
					esc_html__('One thought on &ldquo;%1$s&rdquo;', 'kloudfox'),
					'<span>' . wp_kses_post(get_the_title()) . '</span>'
				);
			} else {
				printf(
					esc_html(_nx('%1$s thought on &ldquo;%2$s&rdquo;', '%1$s thoughts on &ldquo;%2$s&rdquo;', $kloudfox_comment_count, 'comments title', 'kloudfox')),
					number_format_i18n($kloudfox_comment_count), // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
					'<span>' . wp_kses_post(get_the_title()) . '</span>'
				);
			}
			?>
		</h2>

		<?php the_comments_navigation(); ?>

		<ol class="comment-list">
			<?php
			wp_list_comments(
				array(
					'style'      => 'ol',
					'short_ping' => true,
					'callback'   => 'kloudfox_comment_callback',
				)
			);
			?>
		</ol>

		<?php
		the_comments_navigation();

		if (!comments_open()) :
			?>
			<p class="no-comments"><?php esc_html_e('Comments are closed.', 'kloudfox'); ?></p>
			<?php
		endif;

	endif;

	comment_form();
	?>

</div>

<?php
/**
 * Custom comment callback
 */
function kloudfox_comment_callback($comment, $args, $depth) {
	if ('div' === $args['style']) {
		$tag       = 'div';
		$add_below = 'comment';
	} else {
		$tag       = 'li';
		$add_below = 'div-comment';
	}
	?>
	<<?php echo $tag; ?> <?php comment_class(empty($args['has_children']) ? '' : 'parent'); ?> id="comment-<?php comment_ID(); ?>">
	<?php if ('div' != $args['style']) : ?>
		<div id="div-comment-<?php comment_ID(); ?>" class="comment-body">
	<?php endif; ?>
	
	<div class="comment-author vcard">
		<?php if ($args['avatar_size'] != 0) echo get_avatar($comment, $args['avatar_size']); ?>
		<?php printf('<cite class="fn">%s</cite>', get_comment_author_link()); ?>
	</div>
	
	<?php if ($comment->comment_approved == '0') : ?>
		<em class="comment-awaiting-moderation"><?php esc_html_e('Your comment is awaiting moderation.', 'kloudfox'); ?></em>
		<br />
	<?php endif; ?>

	<div class="comment-meta commentmetadata">
		<a href="<?php echo htmlspecialchars(get_comment_link($comment->comment_ID)); ?>">
			<?php printf(esc_html__('%1$s at %2$s', 'kloudfox'), get_comment_date(), get_comment_time()); ?>
		</a>
		<?php edit_comment_link(esc_html__('(Edit)', 'kloudfox'), '  ', ''); ?>
	</div>

	<div class="comment-content">
		<?php comment_text(); ?>
	</div>

	<div class="reply">
		<?php comment_reply_link(array_merge($args, array('add_below' => $add_below, 'depth' => $depth, 'max_depth' => $args['max_depth']))); ?>
	</div>
	
	<?php if ('div' != $args['style']) : ?>
		</div>
	<?php endif; ?>
	<?php
}
?>