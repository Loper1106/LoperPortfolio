<?php

# 1. Output your name into terminal.
# 2. Given an array of integers, invert that array. I.e., [1, 2, 3] -> [3, 2, 1]
# 3. Print out the first 50 perfect squares. A perfect square is 0, 1, 4, 9, 16, 25 etc.
# 4. Print out the first 50 numbers in the Fibonacci sequence separated by newline characters I.e.
# 0
# 1
# 1
# 2
# 3
# 5
# 8
# 5. Given an array of integers, produce an integer by combining the values from the array bitwise. I.e., [1, 2, 3, 9, 10] = 123,910
# 6. Produce a timer that begins when the program is ran and stops when the user inputs a keystroke. Output time elapsed. Bonus points if you breakdown the results into seconds, minutes, hours, etc.
# 7. Given two strings, return an integer amount of how many times the second string appears in the first. I.e.
# String 1: 'dogsdogcatdoggycats'
# String 2: 'dog'
# Answer: 3

# 1 Name
    echo "1-Name: Ben Loper </br></br>";
# 2 Reverse Array
    $a = [0, 2, 4];
    echo "2-Reverse Array: </br>";
    for ($i = count($a)-1; $i >= 0; $i--){
        echo $a[$i];
    }
    echo "</br></br>";
# 3 Perfect squares
    # 0, 1, 4, 9, 16, 25
    echo "3-Perfect Squares: </br>";
    $square = [];
    for ($i = 0; $i <= 5; $i++){
        $x = ($i * $i);
        echo $x, "\n";
    }
    echo "</br></br>";
# 4 Fibonacci Sequence
    echo "4-Fibonacci Sequence: </br>";
    $n1 = 0;
    $n2 = 0;
    # First 20 = 0	1	1	2	3	5	8	13	21	34	55	89	144	233	377	610	987	1597	2584	4181	6765
    for ($i = 1; $i <= 20; $i++){
        $x = $n1 + $n2;
        echo $x, "\n";
        $n1 = $n2;
        $n2 = $x;
        if ($x == 0){
            $n2++;
        }
    }
    echo "</br></br>";
# 5 Given an array of integers, produce an integer by combining the values from the array bitwise. I.e., [1, 2, 3, 9, 10] = 123,910
    echo "5-Array into Integer </br>";
    $a = [1, 2, 3, 9, 10];
    $b = strval(implode("", $a));
    $mod = 0;
    for ($i = strlen($b)-1; $i >= 0; $i--){
        $mod++;
        if ((($mod % 3) == 0) && $i != 0){
            $b = substr($b, 0, $i) . "," . substr($b, $i);
        }
    }
    echo $b;
    echo "</br></br>";

# Produce a timer that begins when the program is ran and stops when the user inputs a keystroke. Output time elapsed. 
# Bonus points if you breakdown the results into seconds, minutes, hours, etc.
    echo "6- Timer man (seconds, minute, hours)";
    
    
?>