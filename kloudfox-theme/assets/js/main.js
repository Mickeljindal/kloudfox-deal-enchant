/**
 * KloudFox Main Script
 * Main JavaScript functionality for the theme
 */

(function($) {
    'use strict';

    // Document ready
    $(document).ready(function() {
        
        // Initialize features
        initScrollAnimations();
        initFormValidation();
        initLazyLoading();
        initBackToTop();
        
        // Comment form enhancements
        enhanceCommentForm();
        
        // Search functionality
        enhanceSearch();
    });

    /**
     * Scroll-triggered animations
     */
    function initScrollAnimations() {
        if (!window.IntersectionObserver) return;

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe elements for animation
        const animateElements = document.querySelectorAll('.post-card, .feature-card, .widget');
        animateElements.forEach(function(element) {
            observer.observe(element);
        });
    }

    /**
     * Form validation
     */
    function initFormValidation() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(function(form) {
            form.addEventListener('submit', function(event) {
                const requiredFields = form.querySelectorAll('[required]');
                let isValid = true;
                
                requiredFields.forEach(function(field) {
                    if (!field.value.trim()) {
                        isValid = false;
                        field.classList.add('error');
                        showFieldError(field, 'This field is required');
                    } else {
                        field.classList.remove('error');
                        hideFieldError(field);
                    }
                    
                    // Email validation
                    if (field.type === 'email' && field.value) {
                        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        if (!emailRegex.test(field.value)) {
                            isValid = false;
                            field.classList.add('error');
                            showFieldError(field, 'Please enter a valid email address');
                        }
                    }
                });
                
                if (!isValid) {
                    event.preventDefault();
                }
            });
        });
    }

    /**
     * Show field error
     */
    function showFieldError(field, message) {
        hideFieldError(field);
        
        const error = document.createElement('div');
        error.className = 'field-error';
        error.textContent = message;
        field.parentNode.insertBefore(error, field.nextSibling);
    }

    /**
     * Hide field error
     */
    function hideFieldError(field) {
        const error = field.parentNode.querySelector('.field-error');
        if (error) {
            error.remove();
        }
    }

    /**
     * Lazy loading for images
     */
    function initLazyLoading() {
        if (!window.IntersectionObserver) return;

        const lazyImages = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(function(img) {
            imageObserver.observe(img);
        });
    }

    /**
     * Back to top button
     */
    function initBackToTop() {
        const backToTop = $('<div class="back-to-top" title="Back to Top"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 14L12 9L17 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>');
        
        $('body').append(backToTop);
        
        $(window).scroll(function() {
            if ($(this).scrollTop() > 500) {
                backToTop.addClass('visible');
            } else {
                backToTop.removeClass('visible');
            }
        });
        
        backToTop.click(function() {
            $('html, body').animate({ scrollTop: 0 }, 800);
        });
    }

    /**
     * Enhance comment form
     */
    function enhanceCommentForm() {
        const commentForm = $('#commentform');
        if (!commentForm.length) return;

        // Add character counter to comment textarea
        const commentField = $('#comment');
        if (commentField.length) {
            const counter = $('<div class="character-counter"><span class="current">0</span> characters</div>');
            commentField.after(counter);
            
            commentField.on('input', function() {
                const length = $(this).val().length;
                counter.find('.current').text(length);
                
                if (length > 500) {
                    counter.addClass('warning');
                } else {
                    counter.removeClass('warning');
                }
            });
        }

        // AJAX comment submission
        commentForm.on('submit', function(event) {
            event.preventDefault();
            
            const formData = new FormData(this);
            const submitButton = commentForm.find('input[type="submit"]');
            
            submitButton.prop('disabled', true).val('Submitting...');
            
            $.ajax({
                url: kloudfox_ajax.ajax_url,
                type: 'POST',
                data: {
                    action: 'submit_comment',
                    nonce: kloudfox_ajax.nonce,
                    comment: formData.get('comment'),
                    author: formData.get('author'),
                    email: formData.get('email'),
                    url: formData.get('url'),
                    comment_post_ID: formData.get('comment_post_ID'),
                    comment_parent: formData.get('comment_parent')
                },
                success: function(response) {
                    if (response.success) {
                        // Add new comment to list
                        const commentsList = $('.comment-list');
                        if (commentsList.length) {
                            commentsList.prepend(response.data.comment_html);
                        }
                        
                        // Reset form
                        commentForm[0].reset();
                        
                        // Show success message
                        showNotification('Comment submitted successfully!', 'success');
                    } else {
                        showNotification(response.data.message || 'Error submitting comment', 'error');
                    }
                },
                error: function() {
                    showNotification('Error submitting comment. Please try again.', 'error');
                },
                complete: function() {
                    submitButton.prop('disabled', false).val('Post Comment');
                }
            });
        });
    }

    /**
     * Enhance search functionality
     */
    function enhanceSearch() {
        const searchField = $('.search-field');
        if (!searchField.length) return;

        let searchTimeout;
        
        searchField.on('input', function() {
            clearTimeout(searchTimeout);
            const query = $(this).val();
            
            if (query.length < 3) return;
            
            searchTimeout = setTimeout(function() {
                performSearch(query);
            }, 300);
        });
    }

    /**
     * Perform AJAX search
     */
    function performSearch(query) {
        $.ajax({
            url: kloudfox_ajax.ajax_url,
            type: 'POST',
            data: {
                action: 'live_search',
                nonce: kloudfox_ajax.nonce,
                query: query
            },
            success: function(response) {
                if (response.success) {
                    showSearchResults(response.data.results);
                }
            }
        });
    }

    /**
     * Show search results dropdown
     */
    function showSearchResults(results) {
        let dropdown = $('.search-dropdown');
        
        if (!dropdown.length) {
            dropdown = $('<div class="search-dropdown"></div>');
            $('.search-form').append(dropdown);
        }
        
        dropdown.empty();
        
        if (results.length === 0) {
            dropdown.html('<div class="no-results">No results found</div>');
        } else {
            results.forEach(function(result) {
                const item = $('<a href="' + result.url + '" class="search-result-item">' +
                    '<h4>' + result.title + '</h4>' +
                    '<p>' + result.excerpt + '</p>' +
                    '</a>');
                dropdown.append(item);
            });
        }
        
        dropdown.show();
    }

    /**
     * Show notification
     */
    function showNotification(message, type) {
        const notification = $('<div class="notification notification-' + type + '">' + message + '</div>');
        $('body').append(notification);
        
        setTimeout(function() {
            notification.addClass('show');
        }, 100);
        
        setTimeout(function() {
            notification.removeClass('show');
            setTimeout(function() {
                notification.remove();
            }, 300);
        }, 3000);
    }

    // Utility functions
    window.KloudFox = {
        showNotification: showNotification,
        hideFieldError: hideFieldError,
        showFieldError: showFieldError
    };

})(jQuery);

// CSS for animations and components
const additionalCSS = `
    .animate-in {
        animation: fadeInUp 0.6s ease-out;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .back-to-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--kf-primary);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: var(--kf-transition);
        z-index: 1000;
    }
    
    .back-to-top.visible {
        opacity: 1;
        visibility: visible;
    }
    
    .back-to-top:hover {
        background: var(--kf-primary-dark);
        transform: translateY(-2px);
    }
    
    .field-error {
        color: #e74c3c;
        font-size: var(--kf-font-size-sm);
        margin-top: var(--kf-spacing-xs);
    }
    
    .character-counter {
        font-size: var(--kf-font-size-sm);
        color: var(--kf-text-muted);
        text-align: right;
        margin-top: var(--kf-spacing-xs);
    }
    
    .character-counter.warning {
        color: #e74c3c;
    }
    
    .search-dropdown {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--kf-background);
        border: 1px solid var(--kf-border);
        border-top: none;
        border-radius: 0 0 var(--kf-border-radius) var(--kf-border-radius);
        box-shadow: 0 4px 12px var(--kf-shadow);
        z-index: 1000;
        max-height: 300px;
        overflow-y: auto;
    }
    
    .search-result-item {
        display: block;
        padding: var(--kf-spacing-md);
        border-bottom: 1px solid var(--kf-border);
        text-decoration: none;
        color: var(--kf-text);
        transition: var(--kf-transition);
    }
    
    .search-result-item:hover {
        background: var(--kf-surface);
    }
    
    .search-result-item h4 {
        margin: 0 0 var(--kf-spacing-xs);
        font-size: var(--kf-font-size-base);
    }
    
    .search-result-item p {
        margin: 0;
        font-size: var(--kf-font-size-sm);
        color: var(--kf-text-muted);
    }
    
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: var(--kf-spacing-md) var(--kf-spacing-lg);
        border-radius: var(--kf-border-radius);
        color: white;
        font-weight: 500;
        transform: translateX(100%);
        transition: var(--kf-transition);
        z-index: 10000;
    }
    
    .notification.show {
        transform: translateX(0);
    }
    
    .notification-success {
        background: #27ae60;
    }
    
    .notification-error {
        background: #e74c3c;
    }
`;

// Inject additional CSS
const style = document.createElement('style');
style.textContent = additionalCSS;
document.head.appendChild(style);