<?php
/**
 * The main template file for 808 MOVE
 *
 * @package 808_Move
 */

declare(strict_types=1);

get_header();
?>

<main id="app-main" class="site-main">
  <?php
  if (have_posts()) :
      while (have_posts()) :
          the_post();
          the_content();
      endwhile;
  endif;
  ?>
</main>

<?php
get_footer();
