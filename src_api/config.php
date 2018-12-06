<?php

$testnet = false;
$cacheLocation = __DIR__.'/'.($testnet ? 'cache-testnet' : 'cache');
$daemonAddress = 'localhost';
$rpcPort = $testnet ? 48681 : 38681;
$coinSymbol = 'trd';
