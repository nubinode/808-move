<?php
/**
 * The template for displaying blog posts archive / blog home
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
  <section class="section">
    <div class="container">
      <div class="section-header">
        <span class="section-subtitle"><?php esc_html_e('News & Journal', '808-move'); ?></span>
        <h1 class="section-title"><?php esc_html_e('Bali Travel News & Road Advice', '808-move'); ?></h1>
        <p class="section-desc"><?php esc_html_e('Official tourism regulations, hidden destination spotlights, self-drive navigation tips, and fleet updates.', '808-move'); ?></p>
      </div>

      <?php if (have_posts()) : ?>
        <div class="blog-grid">
          <?php while (have_posts()) : the_post(); ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class('blog-card'); ?>>
              <div class="blog-thumb-box">
                <?php if (has_post_thumbnail()) : ?>
                  <?php the_post_thumbnail('medium_large', ['alt' => get_the_title()]); ?>
                <?php else : ?>
                  <img src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80" alt="<?php the_title_attribute(); ?>">
                <?php endif; ?>

                <?php 
                $categories = get_the_category();
                if (!empty($categories)) : ?>
                  <div class="blog-badge"><?php echo esc_html($categories[0]->name); ?></div>
                <?php endif; ?>
              </div>

              <div class="blog-card-body">
                <div class="blog-meta-line">
                  <span>📅 <?php echo esc_html(get_the_date()); ?></span>
                  <span>•</span>
                  <span>✍️ <?php the_author(); ?></span>
                </div>
                <h2 class="blog-card-title"><a href="<?php the_permalink(); ?>" style="color: inherit; text-decoration: none;"><?php the_title(); ?></a></h2>
                <div class="blog-card-summary">
                  <?php echo esc_html(wp_trim_words(get_the_excerpt(), 20, '...')); ?>
                </div>
                <a href="<?php the_permalink(); ?>" class="blog-read-link"><?php esc_html_e('Read Full Article →', '808-move'); ?></a>
              </div>
            </article>
          <?php endwhile; ?>
        </div>

        <div style="margin-top: 40px; text-align: center;">
          <?php
          the_posts_pagination([
              'mid_size'  => 2,
              'prev_text' => __('← Previous', '808-move'),
              'next_text' => __('Next →', '808-move'),
          ]);
          ?>
        </div>
      <?php else : ?>
        <p style="text-align: center; color: var(--text-muted); padding: 40px;"><?php esc_html_e('No blog posts found yet. Check back soon!', '808-move'); ?></p>
      <?php endif; ?>
    </div>
  </section>
</main>

<?php
get_footer();
