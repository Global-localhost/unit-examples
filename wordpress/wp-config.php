<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //

/** The name of the database for WordPress */
define('DB_NAME', isset($_ENV['DB_NAME']) ? $_ENV['DB_NAME'] : 'wordpress');

/** MySQL database username */
define('DB_USER',  isset($_ENV['DB_USER']) ? $_ENV['DB_USER'] : 'root');

/** MySQL database password */
define('DB_PASSWORD', isset($_ENV['DB_PASSWORD']) ? $_ENV['DB_PASSWORD'] : 'devpassword');

/** MySQL hostname */
define('DB_HOST', isset($_ENV['DB_HOST']) ? $_ENV['DB_HOST'] : 'dev_mariadb_1' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );


define( 'WP_HOME', isset ($_ENV['WP_HOME']) ? $_ENV['WP_HOME'] : 'http://nginx.space:8044');
define( 'WP_SITEURL',isset ($_ENV['WP_SITEURL']) ? $_ENV['WP_SITEURL'] : 'http://nginx.space:8044');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'M>@~c~gRe#^bKNF>i>G>Q9(8LZ^aIv?Kx/pbv7y`hL{1XaBmV &`UfSlJJ5fP(_7' );
define( 'SECURE_AUTH_KEY',  'i4C 2G@iNv/MY@/pp}Z])O[%{);DZEG+<H4}$_4}b#8LT(0*b-(Tj^)u]%`B4Jq ' );
define( 'LOGGED_IN_KEY',    'U2~H~A0wa)u49CSW#|(C%~[%fZy4P+&Ml}{97^].H@0?ZuV~Fvs{>S/**1,z3bl[' );
define( 'NONCE_KEY',        '5zITy5&Q>bepWD*`Lq5FHzm>dccV&v9Er44fVVi_:_D]n@[zo(bS,Rp:Sv/js3j,' );
define( 'AUTH_SALT',        '|[R#dd#Fu)p1b}11Mi1wywGR9i+Pa769/vz z6$w)Uc#i@9w5Fz*az3jG$w#z>f3' );
define( 'SECURE_AUTH_SALT', 'I7QWFF+au?k6ZTExc|5&oY`M.HrWaoGJ8HUfEZ=4t%A:gvv@`qWPF|r;n{/-BI|n' );
define( 'LOGGED_IN_SALT',   'qINT0nPdE_Z3RQis1.]%}P_v+GpXv&pcn#^o.b<o0(sw3NYaT+I.;WjdG~}@3Z2a' );
define( 'NONCE_SALT',       '=wzU_T~ o,BSfc!cZQ(NtE5<4?J&k%~kWrysBm1/,](B}auu@$L_C]e}7!D~$*$J' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
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
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
