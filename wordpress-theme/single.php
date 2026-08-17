<?php
/**
 * The template for displaying single posts in WordPress
 *
 * @package 808_Move
 */

declare(strict_types=1);

if (!defined('ABSPATH')) {
    exit;
}

get_header();
?>

<main id="app-main">
  <?php while (have_posts()) : the_post(); ?>
    <section class="section">
      <div class="container">
        <div class="blog-detail-container">
          <div style="margin-bottom: 24px;">
            <a href="<?php echo esc_url(home_url('/#blog')); ?>" class="text-gold" style="font-weight: 600; font-size: 0.9rem;">
              ← <?php esc_html_e('Back to All Articles', '808-move'); ?>
            </a>
          </div>

          <div class="blog-detail-header">
            <div style="display: flex; gap: 12px; align-items: center; margin-bottom: 12px; flex-wrap: wrap;">
              <?php
              $categories = get_the_category();
              if (!empty($categories)) : ?>
                <span class="blog-badge" style="position: static;"><?php echo esc_html($categories[0]->name); ?></span>
              <?php endif; ?>
              <span style="font-size: 0.85rem; color: var(--text-muted);">📅 <?php echo esc_html(get_the_date()); ?></span>
              <span style="font-size: 0.85rem; color: var(--text-muted);">• ✍️ <?php the_author(); ?></span>
            </div>
            <h1 class="blog-detail-title"><?php the_title(); ?></h1>
          </div>

          <?php if (has_post_thumbnail()) : ?>
            <div style="border-radius: var(--radius-lg); overflow: hidden; margin-bottom: 28px; border: 1px solid var(--border-subtle); background: #0f1117;">
              <?php the_post_thumbnail('large', ['class' => 'blog-detail-hero-img', 'style' => 'width:100%; height:auto; max-height:480px; object-fit:cover; margin-bottom:0;']); ?>
            </div>
          <?php endif; ?>

          <div class="blog-content-body">
            <?php the_content(); ?>
          </div>

          <!-- Share & Actions -->
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; border-top: 1px solid var(--border-subtle); border-bottom: 1px solid var(--border-subtle); padding: 20px 0; margin-top: 40px;">
            <div style="font-size: 0.9rem; font-weight: 600; color: var(--text-secondary);"><?php esc_html_e('Share this article:', '808-move'); ?></div>
            <div style="display: flex; gap: 10px;">
              <?php
              $share_url = urlencode(get_permalink());
              $share_title = urlencode(get_the_title());
              ?>
              <a href="https://wa.me/?text=<?php echo $share_title; ?>%20<?php echo $share_url; ?>" target="_blank" class="btn btn-whatsapp btn-sm">
                💬 <?php esc_html_e('Share on WhatsApp', '808-move'); ?>
              </a>
              <button class="btn btn-secondary btn-sm" onclick="navigator.clipboard.writeText(window.location.href); alert('Article link copied to clipboard!');">
                🔗 <?php esc_html_e('Copy Link', '808-move'); ?>
              </button>
            </div>
          </div>

          <!-- Embedded Booking CTA -->
          <div class="blog-cta-box">
            <h3 style="font-size: 1.6rem; margin-bottom: 10px;"><?php esc_html_e('Exploring Bali? Move in Supreme Comfort', '808-move'); ?></h3>
            <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 24px; max-width: 560px; margin-left: auto; margin-right: auto;">
              <?php esc_html_e('From agile compact hatchbacks for vibrant beach clubs to executive hybrid MPVs for mountain touring. Delivered directly to DPS Airport.', '808-move'); ?>
            </p>
            <div style="display: flex; justify-content: center; gap: 14px; flex-wrap: wrap;">
              <a href="<?php echo esc_url(home_url('/#cars')); ?>" class="btn btn-primary"><?php esc_html_e('Browse All Fleet →', '808-move'); ?></a>
              <a href="<?php echo esc_url(home_url('/#booking')); ?>" class="btn btn-secondary"><?php esc_html_e('Instant 4-Step Booking ✨', '808-move'); ?></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  <?php endwhile; ?>
</main>

<?php
get_footer();
