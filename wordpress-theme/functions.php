<?php
/**
 * 808 MOVE Theme Functions and Definitions
 *
 * Compatible with PHP 8.0 - 8.4+ and WordPress 6.0 - 6.7+
 *
 * @package 808_Move
 */

declare(strict_types=1);

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

define('MOVE_THEME_VERSION', '1.0.0');

/**
 * Sets up theme defaults and registers support for various WordPress features.
 */
function move_theme_setup(): void {
    // Add default posts and comments RSS feed links to head.
    add_theme_support('automatic-feed-links');

    // Let WordPress manage the document title.
    add_theme_support('title-tag');

    // Enable support for Post Thumbnails on posts and pages.
    add_theme_support('post-thumbnails');

    // Switch default core markup to output valid HTML5.
    add_theme_support('html5', [
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ]);

    // Register primary navigation menu.
    register_nav_menus([
        'primary' => esc_html__('Primary Menu', '808-move'),
    ]);
}
add_action('after_setup_theme', 'move_theme_setup');

/**
 * Enqueue scripts and styles.
 */
function move_theme_scripts(): void {
    // Google Fonts: Plus Jakarta Sans & Outfit
    wp_enqueue_style(
        'move-google-fonts',
        'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap',
        [],
        null
    );

    // Main Design System & Responsive Stylesheets
    wp_enqueue_style(
        'move-main-style',
        get_template_directory_uri() . '/css/style.css',
        [],
        MOVE_THEME_VERSION
    );

    wp_enqueue_style(
        'move-responsive-style',
        get_template_directory_uri() . '/css/responsive.css',
        ['move-main-style'],
        MOVE_THEME_VERSION
    );

    // Enqueue ES Module Application Scripts
    wp_enqueue_script(
        'move-app-js',
        get_template_directory_uri() . '/js/app.js',
        [],
        MOVE_THEME_VERSION,
        true
    );
}
add_action('wp_enqueue_scripts', 'move_theme_scripts');

/**
 * Add type="module" attribute to our ES Module scripts.
 */
function move_theme_script_type_module(string $tag, string $handle, string $src): string {
    if ('move-app-js' === $handle) {
        return '<script type="module" src="' . esc_url($src) . '"></script>' . "\n";
    }
    return $tag;
}
add_filter('script_loader_tag', 'move_theme_script_type_module', 10, 3);
