/**
 * KloudFox Navigation Script
 * Handles mobile menu toggle and navigation interactions
 */

(function() {
    'use strict';

    // Wait for DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        
        // Mobile Menu Toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const menuWrapper = document.querySelector('.menu-wrapper');
        const hamburgerIcon = document.querySelector('.hamburger');
        const closeIcon = document.querySelector('.close-icon');

        if (menuToggle && menuWrapper) {
            menuToggle.addEventListener('click', function() {
                const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
                
                // Toggle aria-expanded
                menuToggle.setAttribute('aria-expanded', !isExpanded);
                
                // Toggle menu visibility
                menuWrapper.classList.toggle('active');
                
                // Toggle icons
                if (hamburgerIcon && closeIcon) {
                    if (isExpanded) {
                        hamburgerIcon.style.display = 'block';
                        closeIcon.style.display = 'none';
                    } else {
                        hamburgerIcon.style.display = 'none';
                        closeIcon.style.display = 'block';
                    }
                }
            });
        }

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (menuWrapper && menuWrapper.classList.contains('active')) {
                if (!menuWrapper.contains(event.target) && !menuToggle.contains(event.target)) {
                    menuWrapper.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                    
                    if (hamburgerIcon && closeIcon) {
                        hamburgerIcon.style.display = 'block';
                        closeIcon.style.display = 'none';
                    }
                }
            }
        });

        // Close mobile menu on escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && menuWrapper && menuWrapper.classList.contains('active')) {
                menuWrapper.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.focus();
                
                if (hamburgerIcon && closeIcon) {
                    hamburgerIcon.style.display = 'block';
                    closeIcon.style.display = 'none';
                }
            }
        });

        // Handle window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && menuWrapper && menuWrapper.classList.contains('active')) {
                menuWrapper.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                
                if (hamburgerIcon && closeIcon) {
                    hamburgerIcon.style.display = 'block';
                    closeIcon.style.display = 'none';
                }
            }
        });

        // Smooth scroll for anchor links
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        anchorLinks.forEach(function(link) {
            link.addEventListener('click', function(event) {
                const href = this.getAttribute('href');
                const target = document.querySelector(href);
                
                if (target && href !== '#') {
                    event.preventDefault();
                    
                    // Close mobile menu if open
                    if (menuWrapper && menuWrapper.classList.contains('active')) {
                        menuWrapper.classList.remove('active');
                        menuToggle.setAttribute('aria-expanded', 'false');
                    }
                    
                    // Smooth scroll to target
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Update URL hash
                    history.pushState(null, null, href);
                }
            });
        });

        // Add active class to current menu item
        const currentUrl = window.location.pathname;
        const menuLinks = document.querySelectorAll('.primary-menu a');
        
        menuLinks.forEach(function(link) {
            const linkUrl = new URL(link.href).pathname;
            if (linkUrl === currentUrl) {
                link.parentElement.classList.add('current-menu-item');
            }
        });

        // Search form enhancement
        const searchForm = document.querySelector('.search-form');
        const searchField = document.querySelector('.search-field');
        
        if (searchForm && searchField) {
            searchField.addEventListener('focus', function() {
                searchForm.classList.add('focused');
            });
            
            searchField.addEventListener('blur', function() {
                searchForm.classList.remove('focused');
            });
        }

        // Add loading state to buttons
        const buttons = document.querySelectorAll('.kf-button');
        buttons.forEach(function(button) {
            button.addEventListener('click', function() {
                if (!button.classList.contains('no-loading')) {
                    button.classList.add('loading');
                    
                    // Remove loading state after 2 seconds if still present
                    setTimeout(function() {
                        button.classList.remove('loading');
                    }, 2000);
                }
            });
        });

        // Sticky header on scroll
        const header = document.querySelector('.site-header');
        let lastScrollY = window.scrollY;
        
        if (header) {
            window.addEventListener('scroll', function() {
                const currentScrollY = window.scrollY;
                
                if (currentScrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
                
                // Hide header on scroll down, show on scroll up
                if (currentScrollY > lastScrollY && currentScrollY > 200) {
                    header.classList.add('hidden');
                } else {
                    header.classList.remove('hidden');
                }
                
                lastScrollY = currentScrollY;
            });
        }

        // Initialize tooltips if any
        const tooltipElements = document.querySelectorAll('[data-tooltip]');
        tooltipElements.forEach(function(element) {
            element.addEventListener('mouseenter', function() {
                const tooltipText = this.getAttribute('data-tooltip');
                const tooltip = document.createElement('div');
                tooltip.className = 'tooltip';
                tooltip.textContent = tooltipText;
                document.body.appendChild(tooltip);
                
                const rect = this.getBoundingClientRect();
                tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
                tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
            });
            
            element.addEventListener('mouseleave', function() {
                const tooltip = document.querySelector('.tooltip');
                if (tooltip) {
                    tooltip.remove();
                }
            });
        });
    });
})();