<?php 

	// continue and break //
	
	$products = [
		['name' => 'Sword ni Panday', 'price' => 20],
		['name' => 'Green Lantern Ring', 'price' => 10],
		['name' => 'Red Pill', 'price' => 15],
		['name' => 'Gold Slug', 'price' => 5],
		['name' => 'lightning bolt', 'price' => 40],
		['name' => 'Mjolnir', 'price' => 2]
	];

	foreach($products as $product){

		if($product['name'] === 'lightning bolt'){
			break;
		}

		if($product['price'] > 15){
			continue;
		}

		echo $product['name'] . '<br />';

	}

?>

<!DOCTYPE html>
<html>
<head>
	<title>UC2L02</title>
</head>
<body>
    <h1 align="center">Continue & Break</h1>
</body>
</html>