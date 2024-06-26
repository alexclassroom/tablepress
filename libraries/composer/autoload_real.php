<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInita46cd5a2897e45921b7ca3996de68e49
{
	private static $loader;

	public static function loadClassLoader($class)
	{
		if ('Composer\AutoloadTablePress\ClassLoader' === $class) {
			require __DIR__ . '/ClassLoader.php';
		}
	}

	/**
	 * @return \Composer\AutoloadTablePress\ClassLoader
	 */
	public static function getLoader()
	{
		if (null !== self::$loader) {
			return self::$loader;
		}

		require __DIR__ . '/platform_check.php';

		spl_autoload_register(array('ComposerAutoloaderInita46cd5a2897e45921b7ca3996de68e49', 'loadClassLoader'), true, true);
		self::$loader = $loader = new \Composer\AutoloadTablePress\ClassLoader(\dirname(__DIR__));
		spl_autoload_unregister(array('ComposerAutoloaderInita46cd5a2897e45921b7ca3996de68e49', 'loadClassLoader'));

		require __DIR__ . '/autoload_static.php';
		call_user_func(\Composer\Autoload\ComposerStaticInita46cd5a2897e45921b7ca3996de68e49::getInitializer($loader));

		$loader->setClassMapAuthoritative(true);
		$loader->register(true);

		return $loader;
	}
}
