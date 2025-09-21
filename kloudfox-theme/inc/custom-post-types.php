<?php
/**
 * Custom Post Types for KloudFox Theme
 *
 * @package KloudFox
 * @since 1.0.0
 */

/**
 * Register Custom Post Types
 */
function kloudfox_register_post_types() {
    
    // Testimonials
    register_post_type('testimonial', array(
        'labels' => array(
            'name'               => __('Testimonials', 'kloudfox'),
            'singular_name'      => __('Testimonial', 'kloudfox'),
            'menu_name'          => __('Testimonials', 'kloudfox'),
            'add_new'            => __('Add New', 'kloudfox'),
            'add_new_item'       => __('Add New Testimonial', 'kloudfox'),
            'edit_item'          => __('Edit Testimonial', 'kloudfox'),
            'new_item'           => __('New Testimonial', 'kloudfox'),
            'view_item'          => __('View Testimonial', 'kloudfox'),
            'search_items'       => __('Search Testimonials', 'kloudfox'),
            'not_found'          => __('No testimonials found', 'kloudfox'),
            'not_found_in_trash' => __('No testimonials found in Trash', 'kloudfox'),
        ),
        'public'        => false,
        'show_ui'       => true,
        'show_in_menu'  => true,
        'menu_icon'     => 'dashicons-format-quote',
        'menu_position' => 25,
        'supports'      => array('title', 'editor', 'thumbnail'),
        'has_archive'   => false,
    ));

    // Team Members
    register_post_type('team_member', array(
        'labels' => array(
            'name'               => __('Team Members', 'kloudfox'),
            'singular_name'      => __('Team Member', 'kloudfox'),
            'menu_name'          => __('Team', 'kloudfox'),
            'add_new'            => __('Add New', 'kloudfox'),
            'add_new_item'       => __('Add New Team Member', 'kloudfox'),
            'edit_item'          => __('Edit Team Member', 'kloudfox'),
            'new_item'           => __('New Team Member', 'kloudfox'),
            'view_item'          => __('View Team Member', 'kloudfox'),
            'search_items'       => __('Search Team Members', 'kloudfox'),
            'not_found'          => __('No team members found', 'kloudfox'),
            'not_found_in_trash' => __('No team members found in Trash', 'kloudfox'),
        ),
        'public'        => false,
        'show_ui'       => true,
        'show_in_menu'  => true,
        'menu_icon'     => 'dashicons-groups',
        'menu_position' => 26,
        'supports'      => array('title', 'editor', 'thumbnail'),
        'has_archive'   => false,
    ));

    // Services
    register_post_type('service', array(
        'labels' => array(
            'name'               => __('Services', 'kloudfox'),
            'singular_name'      => __('Service', 'kloudfox'),
            'menu_name'          => __('Services', 'kloudfox'),
            'add_new'            => __('Add New', 'kloudfox'),
            'add_new_item'       => __('Add New Service', 'kloudfox'),
            'edit_item'          => __('Edit Service', 'kloudfox'),
            'new_item'           => __('New Service', 'kloudfox'),
            'view_item'          => __('View Service', 'kloudfox'),
            'search_items'       => __('Search Services', 'kloudfox'),
            'not_found'          => __('No services found', 'kloudfox'),
            'not_found_in_trash' => __('No services found in Trash', 'kloudfox'),
        ),
        'public'        => true,
        'show_ui'       => true,
        'show_in_menu'  => true,
        'menu_icon'     => 'dashicons-admin-tools',
        'menu_position' => 27,
        'supports'      => array('title', 'editor', 'thumbnail', 'excerpt'),
        'has_archive'   => true,
        'rewrite'       => array('slug' => 'services'),
    ));

    // FAQ
    register_post_type('faq', array(
        'labels' => array(
            'name'               => __('FAQs', 'kloudfox'),
            'singular_name'      => __('FAQ', 'kloudfox'),
            'menu_name'          => __('FAQs', 'kloudfox'),
            'add_new'            => __('Add New', 'kloudfox'),
            'add_new_item'       => __('Add New FAQ', 'kloudfox'),
            'edit_item'          => __('Edit FAQ', 'kloudfox'),
            'new_item'           => __('New FAQ', 'kloudfox'),
            'view_item'          => __('View FAQ', 'kloudfox'),
            'search_items'       => __('Search FAQs', 'kloudfox'),
            'not_found'          => __('No FAQs found', 'kloudfox'),
            'not_found_in_trash' => __('No FAQs found in Trash', 'kloudfox'),
        ),
        'public'        => false,
        'show_ui'       => true,
        'show_in_menu'  => true,
        'menu_icon'     => 'dashicons-editor-help',
        'menu_position' => 28,
        'supports'      => array('title', 'editor'),
        'has_archive'   => false,
    ));
}
add_action('init', 'kloudfox_register_post_types');

/**
 * Add meta boxes for custom post types
 */
function kloudfox_add_meta_boxes() {
    // Testimonial meta box
    add_meta_box(
        'testimonial_details',
        __('Testimonial Details', 'kloudfox'),
        'kloudfox_testimonial_meta_box',
        'testimonial',
        'normal',
        'default'
    );

    // Team member meta box
    add_meta_box(
        'team_member_details',
        __('Team Member Details', 'kloudfox'),
        'kloudfox_team_member_meta_box',
        'team_member',
        'normal',
        'default'
    );

    // Service meta box
    add_meta_box(
        'service_details',
        __('Service Details', 'kloudfox'),
        'kloudfox_service_meta_box',
        'service',
        'normal',
        'default'
    );

    // FAQ meta box
    add_meta_box(
        'faq_details',
        __('FAQ Details', 'kloudfox'),
        'kloudfox_faq_meta_box',
        'faq',
        'normal',
        'default'
    );
}
add_action('add_meta_boxes', 'kloudfox_add_meta_boxes');

/**
 * Testimonial meta box callback
 */
function kloudfox_testimonial_meta_box($post) {
    wp_nonce_field('kloudfox_testimonial_nonce', 'testimonial_nonce');
    
    $client_name = get_post_meta($post->ID, '_testimonial_client_name', true);
    $client_position = get_post_meta($post->ID, '_testimonial_client_position', true);
    $client_company = get_post_meta($post->ID, '_testimonial_client_company', true);
    $rating = get_post_meta($post->ID, '_testimonial_rating', true);
    
    ?>
    <table class="form-table">
        <tr>
            <th><label for="testimonial_client_name"><?php _e('Client Name', 'kloudfox'); ?></label></th>
            <td><input type="text" id="testimonial_client_name" name="testimonial_client_name" value="<?php echo esc_attr($client_name); ?>" /></td>
        </tr>
        <tr>
            <th><label for="testimonial_client_position"><?php _e('Position', 'kloudfox'); ?></label></th>
            <td><input type="text" id="testimonial_client_position" name="testimonial_client_position" value="<?php echo esc_attr($client_position); ?>" /></td>
        </tr>
        <tr>
            <th><label for="testimonial_client_company"><?php _e('Company', 'kloudfox'); ?></label></th>
            <td><input type="text" id="testimonial_client_company" name="testimonial_client_company" value="<?php echo esc_attr($client_company); ?>" /></td>
        </tr>
        <tr>
            <th><label for="testimonial_rating"><?php _e('Rating', 'kloudfox'); ?></label></th>
            <td>
                <select id="testimonial_rating" name="testimonial_rating">
                    <option value="5" <?php selected($rating, '5'); ?>>5 Stars</option>
                    <option value="4" <?php selected($rating, '4'); ?>>4 Stars</option>
                    <option value="3" <?php selected($rating, '3'); ?>>3 Stars</option>
                    <option value="2" <?php selected($rating, '2'); ?>>2 Stars</option>
                    <option value="1" <?php selected($rating, '1'); ?>>1 Star</option>
                </select>
            </td>
        </tr>
    </table>
    <?php
}

/**
 * Team member meta box callback
 */
function kloudfox_team_member_meta_box($post) {
    wp_nonce_field('kloudfox_team_member_nonce', 'team_member_nonce');
    
    $position = get_post_meta($post->ID, '_team_member_position', true);
    $email = get_post_meta($post->ID, '_team_member_email', true);
    $phone = get_post_meta($post->ID, '_team_member_phone', true);
    $linkedin = get_post_meta($post->ID, '_team_member_linkedin', true);
    $twitter = get_post_meta($post->ID, '_team_member_twitter', true);
    
    ?>
    <table class="form-table">
        <tr>
            <th><label for="team_member_position"><?php _e('Position', 'kloudfox'); ?></label></th>
            <td><input type="text" id="team_member_position" name="team_member_position" value="<?php echo esc_attr($position); ?>" /></td>
        </tr>
        <tr>
            <th><label for="team_member_email"><?php _e('Email', 'kloudfox'); ?></label></th>
            <td><input type="email" id="team_member_email" name="team_member_email" value="<?php echo esc_attr($email); ?>" /></td>
        </tr>
        <tr>
            <th><label for="team_member_phone"><?php _e('Phone', 'kloudfox'); ?></label></th>
            <td><input type="text" id="team_member_phone" name="team_member_phone" value="<?php echo esc_attr($phone); ?>" /></td>
        </tr>
        <tr>
            <th><label for="team_member_linkedin"><?php _e('LinkedIn URL', 'kloudfox'); ?></label></th>
            <td><input type="url" id="team_member_linkedin" name="team_member_linkedin" value="<?php echo esc_attr($linkedin); ?>" /></td>
        </tr>
        <tr>
            <th><label for="team_member_twitter"><?php _e('Twitter URL', 'kloudfox'); ?></label></th>
            <td><input type="url" id="team_member_twitter" name="team_member_twitter" value="<?php echo esc_attr($twitter); ?>" /></td>
        </tr>
    </table>
    <?php
}

/**
 * Service meta box callback
 */
function kloudfox_service_meta_box($post) {
    wp_nonce_field('kloudfox_service_nonce', 'service_nonce');
    
    $icon = get_post_meta($post->ID, '_service_icon', true);
    $features = get_post_meta($post->ID, '_service_features', true);
    $price = get_post_meta($post->ID, '_service_price', true);
    
    ?>
    <table class="form-table">
        <tr>
            <th><label for="service_icon"><?php _e('Icon Class', 'kloudfox'); ?></label></th>
            <td>
                <input type="text" id="service_icon" name="service_icon" value="<?php echo esc_attr($icon); ?>" />
                <p class="description"><?php _e('Enter a FontAwesome icon class (e.g., fas fa-chart-line)', 'kloudfox'); ?></p>
            </td>
        </tr>
        <tr>
            <th><label for="service_features"><?php _e('Features', 'kloudfox'); ?></label></th>
            <td>
                <textarea id="service_features" name="service_features" rows="5" cols="50"><?php echo esc_textarea($features); ?></textarea>
                <p class="description"><?php _e('Enter one feature per line', 'kloudfox'); ?></p>
            </td>
        </tr>
        <tr>
            <th><label for="service_price"><?php _e('Starting Price', 'kloudfox'); ?></label></th>
            <td><input type="text" id="service_price" name="service_price" value="<?php echo esc_attr($price); ?>" /></td>
        </tr>
    </table>
    <?php
}

/**
 * FAQ meta box callback
 */
function kloudfox_faq_meta_box($post) {
    wp_nonce_field('kloudfox_faq_nonce', 'faq_nonce');
    
    $category = get_post_meta($post->ID, '_faq_category', true);
    $order = get_post_meta($post->ID, '_faq_order', true);
    
    ?>
    <table class="form-table">
        <tr>
            <th><label for="faq_category"><?php _e('Category', 'kloudfox'); ?></label></th>
            <td>
                <select id="faq_category" name="faq_category">
                    <option value="general" <?php selected($category, 'general'); ?>><?php _e('General', 'kloudfox'); ?></option>
                    <option value="pricing" <?php selected($category, 'pricing'); ?>><?php _e('Pricing', 'kloudfox'); ?></option>
                    <option value="technical" <?php selected($category, 'technical'); ?>><?php _e('Technical', 'kloudfox'); ?></option>
                    <option value="support" <?php selected($category, 'support'); ?>><?php _e('Support', 'kloudfox'); ?></option>
                </select>
            </td>
        </tr>
        <tr>
            <th><label for="faq_order"><?php _e('Display Order', 'kloudfox'); ?></label></th>
            <td><input type="number" id="faq_order" name="faq_order" value="<?php echo esc_attr($order); ?>" min="0" /></td>
        </tr>
    </table>
    <?php
}

/**
 * Save meta box data
 */
function kloudfox_save_post_meta($post_id) {
    // Check if it's an autosave
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }

    // Check user permissions
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }

    // Save testimonial meta
    if (isset($_POST['testimonial_nonce']) && wp_verify_nonce($_POST['testimonial_nonce'], 'kloudfox_testimonial_nonce')) {
        update_post_meta($post_id, '_testimonial_client_name', sanitize_text_field($_POST['testimonial_client_name']));
        update_post_meta($post_id, '_testimonial_client_position', sanitize_text_field($_POST['testimonial_client_position']));
        update_post_meta($post_id, '_testimonial_client_company', sanitize_text_field($_POST['testimonial_client_company']));
        update_post_meta($post_id, '_testimonial_rating', sanitize_text_field($_POST['testimonial_rating']));
    }

    // Save team member meta
    if (isset($_POST['team_member_nonce']) && wp_verify_nonce($_POST['team_member_nonce'], 'kloudfox_team_member_nonce')) {
        update_post_meta($post_id, '_team_member_position', sanitize_text_field($_POST['team_member_position']));
        update_post_meta($post_id, '_team_member_email', sanitize_email($_POST['team_member_email']));
        update_post_meta($post_id, '_team_member_phone', sanitize_text_field($_POST['team_member_phone']));
        update_post_meta($post_id, '_team_member_linkedin', esc_url_raw($_POST['team_member_linkedin']));
        update_post_meta($post_id, '_team_member_twitter', esc_url_raw($_POST['team_member_twitter']));
    }

    // Save service meta
    if (isset($_POST['service_nonce']) && wp_verify_nonce($_POST['service_nonce'], 'kloudfox_service_nonce')) {
        update_post_meta($post_id, '_service_icon', sanitize_text_field($_POST['service_icon']));
        update_post_meta($post_id, '_service_features', sanitize_textarea_field($_POST['service_features']));
        update_post_meta($post_id, '_service_price', sanitize_text_field($_POST['service_price']));
    }

    // Save FAQ meta
    if (isset($_POST['faq_nonce']) && wp_verify_nonce($_POST['faq_nonce'], 'kloudfox_faq_nonce')) {
        update_post_meta($post_id, '_faq_category', sanitize_text_field($_POST['faq_category']));
        update_post_meta($post_id, '_faq_order', intval($_POST['faq_order']));
    }
}
add_action('save_post', 'kloudfox_save_post_meta');
?>