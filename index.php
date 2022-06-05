<?php

//コンテンツページ
echo PageBuild($html);

function PageBuild($html){
    $query = time();

    $main = <<<EOM
    <!DOCTYPE html>
    <html lang="ja">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>ポートフォリオ</title>
        <meta name="description" content="ポートフォリオ">
    
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;700&display=swap" rel="stylesheet">
    
        <link rel="stylesheet" href="./assets/css/sanitize.css">
        <link rel="stylesheet" href="./assets/css/style.css?$query">
    </head>
    <body>
        <div id="app"></div>
        <script src="./assets/dist/app.js?$query"></script>
    </body>
    </html>
    EOM;

    return $main;
}

?>