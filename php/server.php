<?php
    $disks = file_get_contents("../json/disk.json");
    header("Content-Type: application/json");
    echo $disks;
?>