<?php

function isPowerOfTwo($n) {
        return $n > 0 && ($n & ($n - 1)) === 0;
}

var_dump(isPowerOfTwo(1)); // true
var_dump(isPowerOfTwo(2)); // true
var_dump(isPowerOfTwo(3)); // false

