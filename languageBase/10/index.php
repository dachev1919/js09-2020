<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<!--<script src="js/main.js"></script>-->
<?php
$m = [
    [
        'label' => 'Yii',
        'url' => 'https://yii2.com'
    ],
    [
        'label' => 'More framework',
        'items' => [
            [
                'label' => 'Laravel',
                'url' => 'https://laravel.com'
            ],
            [
                'label' => 'Slim',
                'url' => 'https://slim.com'
            ]

        ]
    ],
    [
        'label' => 'Symfony',
        'url' => 'https://symfony.com'
    ]
];

function menu($array){
    $menu = '<ul>';
    foreach ($array as $arr){
        $menu .= "\n\t<li>\n";
        $menu .= "\t\t<a href='{$arr['url']}'>{$arr['label']}</a>\n";
        $menu .= "\t</li>\n";
        if (is_array($arr['items'])){
            $menu .= menu($arr['items']);
        }
    }
    $menu .= '</ul>';
    return $menu;
}
print menu($m);
?>

</body>
</html>