<?php header('Content-Type: text/css; charset=UTF-8');?>

<?php
sleep(3);

$myfile = fopen("block.css", "r");
echo fread($myfile, filesize("block.css"));
fclose($myfile);