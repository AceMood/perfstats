<?php header('Content-Type: text/javascript; charset=UTF-8');?>

<?php
sleep(10);

$fn = "block_async_ie.js";

$myfile = fopen($fn, "r");
echo fread($myfile, filesize($fn));
fclose($myfile);