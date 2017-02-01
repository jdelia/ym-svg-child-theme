<?php
/**
 * Genesis Sample.
 *
 * This file adds functions to the Genesis Sample Theme.
 *
 * @package Genesis Sample
 * @author  StudioPress
 * @license GPL-2.0+
 * @link    http://www.studiopress.com/
 */

// Start the engine
include_once( get_template_directory() . '/lib/init.php' );

// Child theme (do not remove)
define( 'CHILD_THEME_NAME', 'Genesis Sample Theme' );
define( 'CHILD_THEME_URL', 'http://www.studiopress.com/' );
define( 'CHILD_THEME_VERSION', '2.3.99' );
define( 'CHILD_THEME_URI', get_stylesheet_directory_uri() );
// Enqueue Google Fonts
add_action( 'wp_enqueue_scripts', 'genesis_sample_google_fonts' );
/**
 * Load scripts and stylesheets
 */
function genesis_sample_google_fonts() {

	wp_enqueue_style( 'custom-stylesheet', CHILD_THEME_URI . '/animations/css/animation.css', array(), CHILD_THEME_VERSION );

	wp_enqueue_style( 'google-fonts', '//fonts.googleapis.com/css?family=Lato:300,400,700', array(), CHILD_THEME_VERSION );

	/* For svg animations */
	wp_enqueue_script( 'tweenmax', '//cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenMax.min.js', array( 'jquery' ), false, true );
	wp_enqueue_script( 'scrollmagic', '//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js', array( 'tweenmax' ), false, true );
	wp_enqueue_script( 'scrollmagic-animation', '//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js', array( 'scrollmagic' ), false, true );
	// debug only
	wp_enqueue_script( 'scrollmagicdebug', '//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.min.js', array( 'tweenmax', 'scrollmagic' ), false, true );

	if ( is_front_page() ) {
		wp_enqueue_script( 'app', CHILD_THEME_URI  . '/animations/js/home-app.js', array( 'tweenmax', 'scrollmagic', 'scrollmagic-animation', 'scrollmagicdebug' ), '1.0.2', true );
		wp_enqueue_script( 'app-hover', CHILD_THEME_URI  . '/animations/js/home-app-hover.js', array( 'tweenmax' ), '1.02', true );
	}
	if ( is_page( 'about-us' ) ) {
		wp_enqueue_script( 'app', CHILD_THEME_URI  . '/animations/js/aboutus-app.js', array( 'tweenmax', 'scrollmagic', 'scrollmagic-animation', 'scrollmagicdebug' ), '1.0.4', true );
	}

	/* end SVG */

}

// * Add HTML5 markup structure
add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list' ) );

// * Add Accessibility support
add_theme_support( 'genesis-accessibility', array( 'headings', 'drop-down-menu', 'search-form', 'skip-links', 'rems' ) );

// * Add viewport meta tag for mobile browsers
add_theme_support( 'genesis-responsive-viewport' );

// * Add support for custom background
add_theme_support( 'custom-background' );

// * Add support for 3-column footer widgets
add_theme_support( 'genesis-footer-widgets', 3 );
