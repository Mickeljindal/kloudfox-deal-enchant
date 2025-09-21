<?php
/**
 * Template for displaying search forms
 *
 * @package KloudFox
 * @since 1.0.0
 */
?>

<form role="search" method="get" class="search-form" action="<?php echo esc_url(home_url('/')); ?>">
	<label for="search-field-<?php echo esc_attr(uniqid()); ?>" class="screen-reader-text">
		<?php esc_html_e('Search for:', 'kloudfox'); ?>
	</label>
	<div class="search-form-wrapper">
		<input type="search" 
			   id="search-field-<?php echo esc_attr(uniqid()); ?>" 
			   class="search-field" 
			   placeholder="<?php echo esc_attr_x('Search...', 'placeholder', 'kloudfox'); ?>" 
			   value="<?php echo get_search_query(); ?>" 
			   name="s" />
		<button type="submit" class="search-submit">
			<span class="screen-reader-text"><?php esc_html_e('Search', 'kloudfox'); ?></span>
			<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M21 21L15 15L21 21ZM17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
		</button>
	</div>
</form>