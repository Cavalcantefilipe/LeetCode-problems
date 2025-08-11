<?php

function mergeAlternately($word1, $word2) {
    $result = '';
    $index = 0;

    while (strlen($word1) > $index || strlen($word2) > $index) {
        if ($index < strlen($word1)) {
            $result .= $word1[$index];
        }

        if ($index < strlen($word2)) {
            $result .= $word2[$index];
        }

        $index++;
    }

    return $result;
}