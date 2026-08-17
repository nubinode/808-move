<?php
/**
 * The header for 808 MOVE theme
 *
 * @package 808_Move
 */

declare(strict_types=1);

if (!defined('ABSPATH')) {
    exit;
}
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#0a0b0e">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

  <!-- Top Sticky Navigation Bar -->
  <header class="header">
    <div class="container">
      <div class="nav-wrapper">
        <!-- Brand Logo (808 Emblem Only) -->
        <a href="<?php echo esc_url(home_url('/#home')); ?>" class="brand-logo" title="808 Bali Transport">
          <div class="brand-logo-symbol">808</div>
        </a>

        <!-- Desktop Navigation Links -->
        <nav>
          <ul class="nav-links" id="nav-links">
            <li><a href="<?php echo esc_url(home_url('/#home')); ?>" class="nav-link active" data-route="home"><?php esc_html_e('Home', '808-move'); ?></a></li>
            <li><a href="<?php echo esc_url(home_url('/#cars')); ?>" class="nav-link" data-route="cars"><?php esc_html_e('All Cars', '808-move'); ?></a></li>
            <li><a href="<?php echo esc_url(home_url('/#with-driver')); ?>" class="nav-link" data-route="with-driver"><?php esc_html_e('With Driver', '808-move'); ?></a></li>
            <li><a href="<?php echo esc_url(home_url('/#airport-transfer')); ?>" class="nav-link" data-route="airport-transfer"><?php esc_html_e('Airport Transfer', '808-move'); ?></a></li>
            <li><a href="<?php echo esc_url(home_url('/#packages')); ?>" class="nav-link" data-route="packages"><?php esc_html_e('Packages', '808-move'); ?></a></li>
            <li><a href="<?php echo esc_url(home_url('/#bali-guide')); ?>" class="nav-link" data-route="bali-guide"><?php esc_html_e('Bali Guide', '808-move'); ?></a></li>
            <li><a href="<?php echo esc_url(home_url('/#blog')); ?>" class="nav-link" data-route="blog"><?php esc_html_e('Blog', '808-move'); ?></a></li>
            <li><a href="<?php echo esc_url(home_url('/#reviews')); ?>" class="nav-link" data-route="reviews"><?php esc_html_e('Reviews', '808-move'); ?></a></li>
            <li><a href="<?php echo esc_url(home_url('/#about')); ?>" class="nav-link" data-route="about"><?php esc_html_e('About', '808-move'); ?></a></li>
            <li><a href="<?php echo esc_url(home_url('/#faq')); ?>" class="nav-link" data-route="faq"><?php esc_html_e('FAQ', '808-move'); ?></a></li>
            <li><a href="<?php echo esc_url(home_url('/#contact')); ?>" class="nav-link" data-route="contact"><?php esc_html_e('Contact', '808-move'); ?></a></li>
          </ul>
        </nav>

        <!-- Currency Switcher & Book Now CTA -->
        <div class="nav-actions">
          <select class="currency-select" title="<?php esc_attr_e('Change Display Currency', '808-move'); ?>">
            <option value="IDR">IDR (Rp)</option>
            <option value="AUD">AUD (A$)</option>
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="SGD">SGD (S$)</option>
          </select>
          <a href="<?php echo esc_url(home_url('/#booking')); ?>" class="btn btn-primary btn-sm"><?php esc_html_e('Book Now ✨', '808-move'); ?></a>
          <button class="mobile-menu-btn" id="mobile-menu-btn" aria-label="<?php esc_attr_e('Toggle Navigation', '808-move'); ?>">☰</button>
        </div>
      </div>
    </div>
  </header>
