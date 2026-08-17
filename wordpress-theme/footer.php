<?php
/**
 * The footer for 808 MOVE theme
 *
 * @package 808_Move
 */

declare(strict_types=1);

if (!defined('ABSPATH')) {
    exit;
}
?>
  <!-- Global Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <!-- Col 1: Brand -->
        <div class="footer-col">
          <div class="brand-logo" style="margin-bottom: 16px;">
            <div class="brand-logo-symbol">808</div>
          </div>
          <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 20px; line-height: 1.6;">
            <?php esc_html_e('Bali\'s premier car rental and VIP chauffeur platform. Delivering late-model, sanitized vehicles directly to DPS Ngurah Rai International Airport and private villas across Bali.', '808-move'); ?>
          </p>
          <div style="font-size: 0.85rem; color: var(--color-gold-light);">
            📍 Jl. Bypass Ngurah Rai No. 808, Tuban, Kuta, Badung, Bali
          </div>
        </div>

        <!-- Col 2: Services -->
        <div class="footer-col">
          <h4><?php esc_html_e('Services', '808-move'); ?></h4>
          <ul class="footer-links">
            <li><a href="<?php echo esc_url(home_url('/#cars')); ?>"><?php esc_html_e('Self-Drive Rental', '808-move'); ?></a></li>
            <li><a href="<?php echo esc_url(home_url('/#with-driver')); ?>"><?php esc_html_e('Private Tour Driver', '808-move'); ?></a></li>
            <li><a href="<?php echo esc_url(home_url('/#airport-transfer')); ?>"><?php esc_html_e('DPS Airport Transfer', '808-move'); ?></a></li>
            <li><a href="<?php echo esc_url(home_url('/#packages')); ?>"><?php esc_html_e('Multi-Day Packages', '808-move'); ?></a></li>
            <li><a href="<?php echo esc_url(home_url('/#booking')); ?>"><?php esc_html_e('Online Booking Engine', '808-move'); ?></a></li>
          </ul>
        </div>

        <!-- Col 3: Bali Guide & Info -->
        <div class="footer-col">
          <h4><?php esc_html_e('Explore Bali', '808-move'); ?></h4>
          <ul class="footer-links">
            <li><a href="<?php echo esc_url(home_url('/#bali-guide')); ?>"><?php esc_html_e('Ubud & Waterfalls', '808-move'); ?></a></li>
            <li><a href="<?php echo esc_url(home_url('/#bali-guide')); ?>"><?php esc_html_e('Uluwatu Cliffs', '808-move'); ?></a></li>
            <li><a href="<?php echo esc_url(home_url('/#bali-guide')); ?>"><?php esc_html_e('Canggu & Seminyak', '808-move'); ?></a></li>
            <li><a href="<?php echo esc_url(home_url('/#bali-guide')); ?>"><?php esc_html_e('Kintamani Highlands', '808-move'); ?></a></li>
            <li><a href="<?php echo esc_url(home_url('/#blog')); ?>"><?php esc_html_e('Travel Blog & News', '808-move'); ?></a></li>
            <li><a href="<?php echo esc_url(home_url('/#faq')); ?>"><?php esc_html_e('Driving Rules in Bali', '808-move'); ?></a></li>
          </ul>
        </div>

        <!-- Col 4: Support & Security -->
        <div class="footer-col">
          <h4><?php esc_html_e('24/7 Concierge', '808-move'); ?></h4>
          <p style="color: var(--text-secondary); font-size: 0.88rem; margin-bottom: 14px;">
            <?php esc_html_e('Need immediate roadside assistance or last-minute car reservation?', '808-move'); ?>
          </p>
          <a href="https://wa.me/628118088080" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm" style="width: 100%; margin-bottom: 12px;">
            💬 WhatsApp: +62 811 808 8080
          </a>
          <div style="font-size: 0.8rem; color: var(--text-muted);">
            Email: booking@808move.com<br>
            Operating Hours: 07:00 – 23:00 WITA
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <div>© <?php echo esc_html(gmdate('Y')); ?> 808 MOVE Bali. <?php esc_html_e('All rights reserved. Registered Transport Enterprise.', '808-move'); ?></div>
        <div style="display: flex; gap: 20px;">
          <a href="<?php echo esc_url(home_url('/#faq')); ?>" style="color: var(--text-muted);"><?php esc_html_e('Terms & Insurance Policy', '808-move'); ?></a>
          <a href="<?php echo esc_url(home_url('/#faq')); ?>" style="color: var(--text-muted);"><?php esc_html_e('Privacy Policy', '808-move'); ?></a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Floating WhatsApp CTA with Dynamic Tooltip -->
  <a href="https://wa.me/628118088080?text=Hi%20808%20MOVE!%20I%20would%20like%20to%20inquire%20about%20car%20rental%20in%20Bali." target="_blank" rel="noopener noreferrer" class="whatsapp-float" aria-label="<?php esc_attr_e('Chat with 808 Move on WhatsApp', '808-move'); ?>">
    <span>💬</span>
    <span class="whatsapp-float-tooltip"><?php esc_html_e('Chat with Bali Concierge 24/7', '808-move'); ?></span>
  </a>

  <!-- Toast Notification Root -->
  <div id="toast-container" class="toast-container"></div>

<?php wp_footer(); ?>
</body>
</html>
