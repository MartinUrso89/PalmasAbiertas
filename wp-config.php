<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'palmasabiertas' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '>.]>Xj*:j}~.4p@*5|Fl+dZ3E 0iw*e?-7]P`9;pxaniVg-nezo-ItXnNa+$0LX+');
define('SECURE_AUTH_KEY',  'dw(4sE])p`Y(T-YhLh8fgow/]P+L>l9{:tOZ{Sr*]a)AsXq,qN?`Ma`J@x+gCSt[');
define('LOGGED_IN_KEY',    '6`g_xiON$-:bXGO(W!tz=%9:ZS8*Z8H+MW|K_(`0jt,Fq0iMHD7x3<HU&n&21/=z');
define('NONCE_KEY',        'j[~~+_N7 2CqaO@wxv+|3B4Pi7nJ,vHST_{OobO@rLWz|a.%5D0tZ&s!Ubq7f_`<');
define('AUTH_SALT',        'd>W4~fptO>_+$Mnm-:@jJtT^w?yQospfs=1YH`j-&m|6HOIZUPN&QelOkjM#.8KE');
define('SECURE_AUTH_SALT', '6t(g_Oo^>[vK;mC{*j^+BV%}V(l:<4%n-8 n0fuKlC~fkML!dx_;myX01zwNB P/');
define('LOGGED_IN_SALT',   '/axtE$Y1NtK;L2OM!z ri-SrN{bS! ol`TVTiqBeSWmu-G?#(0N-TY+8OWDh&gz1');
define('NONCE_SALT',       'naSP.-mijfEc03&CgWi*P8+|D jH>W=-#1N&1qK-mpM#wCa#HIIP)4/]PVvr~7^9');

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
