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
// define( 'CHILD_THEME_NAME', 'Genesis Sample Theme' );
// define( 'CHILD_THEME_URL', 'http://www.studiopress.com/' );
// define( 'CHILD_THEME_VERSION', '2.3.99' );
// define( 'CHILD_THEME_URI', get_stylesheet_directory_uri() );
// Load constants - use constants in code instead of functions to improve performance. Hat Tip to Tonya at Knowthecode.io.
$child_theme = wp_get_theme();
define( 'CHILD_THEME_NAME', $child_theme->get( 'Name' ) );
define( 'CHILD_THEME_DIR', get_stylesheet_directory() );
define( 'CHILD_THEME_URI', get_stylesheet_directory_uri() );

// No longer need to hard code version in functions.php file - it is pulled from version in stylesheet. Now only need to edit version in one place.
// If WP_DEBUG is on, this adds unique string to css file reduce stylesheet cached issues during development.
if ( WP_DEBUG ) {
	define( 'CHILD_THEME_VERSION', filemtime( CHILD_THEME_DIR . '/style.css' ) );
} else {
	define( 'CHILD_THEME_VERSION', $child_theme->get( 'Version' ) );
}

define( 'CHILD_TEXT_DOMAIN', $child_theme->get( 'TextDomain' ) );
define( 'ROOT_DOMAIN_URL', home_url() );
define( 'CHILD_SITE_NAME', get_bloginfo( 'name' ) );


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

	wp_enqueue_script( 'sprinkles-app', CHILD_THEME_URI  . '/animations/js/sprinkles-app.js', array( 'tweenmax', 'scrollmagic', 'scrollmagic-animation', 'scrollmagicdebug' ), CHILD_THEME_VERSION, true );
	wp_enqueue_script( 'hexes-app', CHILD_THEME_URI  . '/animations/js/hexes-app.js', array( 'tweenmax', 'scrollmagic', 'scrollmagic-animation', 'scrollmagicdebug' ), CHILD_THEME_VERSION, true );

	if ( is_front_page() ) {
		wp_enqueue_script( 'app-hover', CHILD_THEME_URI  . '/animations/js/home-app-hover.js', array( 'tweenmax' ), CHILD_THEME_VERSION, true );
	}
	if ( is_page( 'about-us' ) ) {
		wp_enqueue_script( 'aboutus-app', CHILD_THEME_URI  . '/animations/js/aboutus-app.js', array( 'tweenmax', 'scrollmagic', 'scrollmagic-animation', 'scrollmagicdebug' ), CHILD_THEME_VERSION, true );
	}
	if ( is_page( 'lms-overview' ) ) {
		wp_enqueue_script( 'lms-overview-app', CHILD_THEME_URI  . '/animations/js/lms-overview-app.js', array( 'tweenmax', 'scrollmagic', 'scrollmagic-animation', 'scrollmagicdebug' ), CHILD_THEME_VERSION, true );
	}
	if ( is_page( 'lms-content-development' ) ) {
		wp_enqueue_script( 'lms-content-development-app', CHILD_THEME_URI  . '/animations/js/lms-content-development-app.js', array( 'tweenmax', 'scrollmagic', 'scrollmagic-animation', 'scrollmagicdebug' ), CHILD_THEME_VERSION, true );
	}
	if ( is_page( 'ad-media-overview' ) ) {
		wp_enqueue_script( 'ad-media-overview-app', CHILD_THEME_URI  . '/animations/js/ad-media-overview-app.js', array( 'tweenmax', 'scrollmagic', 'scrollmagic-animation', 'scrollmagicdebug' ), CHILD_THEME_VERSION, true );
	}

	if ( is_page( 'ams-overview' ) ) {
		wp_enqueue_script( 'ams-overview-app', CHILD_THEME_URI  . '/animations/js/ams-overview-app.js', array( 'tweenmax', 'scrollmagic', 'scrollmagic-animation', 'scrollmagicdebug' ), CHILD_THEME_VERSION, true );
	}

	if ( is_page( 'ams-social' ) ) {
		wp_enqueue_script( 'ams-social-app', CHILD_THEME_URI  . '/animations/js/ams-social-app.js', array( 'tweenmax', 'scrollmagic', 'scrollmagic-animation', 'scrollmagicdebug' ), CHILD_THEME_VERSION, true );
	}

	if ( is_page( 'career-events-services' ) ) {
		wp_enqueue_script( 'career-events-services-app', CHILD_THEME_URI  . '/animations/js/career-events-services-app.js', array( 'tweenmax', 'scrollmagic', 'scrollmagic-animation', 'scrollmagicdebug' ), CHILD_THEME_VERSION, true );
	}
	if ( is_page( 'careers-overview' ) ) {
		wp_enqueue_script( 'careers-overview-app', CHILD_THEME_URI  . '/animations/js/careers-overview-app.js', array( 'tweenmax', 'scrollmagic', 'scrollmagic-animation', 'scrollmagicdebug' ), CHILD_THEME_VERSION, true );
	}
	if ( is_page( 'design-services' ) ) {
		wp_enqueue_script( 'design-services-app', CHILD_THEME_URI  . '/animations/js/design-services-app.js', array( 'tweenmax', 'scrollmagic', 'scrollmagic-animation', 'scrollmagicdebug' ), CHILD_THEME_VERSION, true );
	}
	if ( is_page( 'event-management' ) ) {
		wp_enqueue_script( 'event-management-app', CHILD_THEME_URI  . '/animations/js/event-management-app.js', array( 'tweenmax', 'scrollmagic', 'scrollmagic-animation', 'scrollmagicdebug' ), CHILD_THEME_VERSION, true );
	}
	if ( is_page( 'marketing' ) ) {
			wp_enqueue_script( 'marketing-app', CHILD_THEME_URI  . '/animations/js/marketing-app.js', array( 'tweenmax', 'scrollmagic', 'scrollmagic-animation', 'scrollmagicdebug' ), CHILD_THEME_VERSION, true );
	}
	if ( is_page( 'mobile-event-app' ) ) {
			wp_enqueue_script( 'mobile-event-app', CHILD_THEME_URI  . '/animations/js/mobile-event-app.js', array( 'tweenmax', 'scrollmagic', 'scrollmagic-animation', 'scrollmagicdebug' ), CHILD_THEME_VERSION, true );
	}
	if ( is_page( 'wws-non-profits' ) ) {
			wp_enqueue_script( 'wws-non-profits-app', CHILD_THEME_URI  . '/animations/js/wws-non-profits-app.js', array( 'tweenmax', 'scrollmagic', 'scrollmagic-animation', 'scrollmagicdebug' ), CHILD_THEME_VERSION, true );
	}
	if ( is_page( 'wws-chamber-of-commerce' ) ) {
			wp_enqueue_script( 'wws-chamber-of-commerce-app', CHILD_THEME_URI  . '/animations/js/wws-chamber-of-commerce-app.js', array( 'tweenmax', 'scrollmagic', 'scrollmagic-animation', 'scrollmagicdebug' ), CHILD_THEME_VERSION, true );
	}
	if ( is_page( 'wws-amcs' ) ) {
			wp_enqueue_script( 'wws-amcs-app', CHILD_THEME_URI  . '/animations/js/wws-amcs-app.js', array( 'tweenmax', 'scrollmagic', 'scrollmagic-animation', 'scrollmagicdebug' ), CHILD_THEME_VERSION, true );
	}
	if ( is_page( 'wws-alumni' ) ) {
				wp_enqueue_script( 'wws-alumni-app', CHILD_THEME_URI  . '/animations/js/wws-alumni-app.js', array( 'tweenmax', 'scrollmagic', 'scrollmagic-animation', 'scrollmagicdebug' ), CHILD_THEME_VERSION, true );
	}
	if ( is_page( 'wws-trade-association' ) ) {
			wp_enqueue_script( 'wws-trade-association-app', CHILD_THEME_URI  . '/animations/js/wws-trade-association-app.js', array( 'tweenmax', 'scrollmagic', 'scrollmagic-animation', 'scrollmagicdebug' ), CHILD_THEME_VERSION, true );
	}
	if ( is_page( 'wws-professional-associations' ) ) {
			wp_enqueue_script( 'wws-professional-associations-app', CHILD_THEME_URI  . '/animations/js/wws-professional-associations-app.js', array( 'tweenmax', 'scrollmagic', 'scrollmagic-animation', 'scrollmagicdebug' ), CHILD_THEME_VERSION, true );
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
