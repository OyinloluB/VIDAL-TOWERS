<?php
    $db->mysql_connect('localhost','root','','db_name');
    if(mysqli_connect_errno()){
        echo 'Database connection failed with following errors:'.mysqli_connect_error();
        die();
    }
    ?>