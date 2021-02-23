<?php 
    // Loops //
	$names = ['Vince', 'Vinz', 'Beans'];

	for($i = 0; $i < count($names); $i++){
		echo $names[$i] . '<br />' ;
	}
	// foreach($names as $name){
	// 	echo $name . ' <br/>';
	// }

	$products = [
		['name' => 'Sword ni Panday', 'price' => 20],
		['name' => 'Green Lantern Ring', 'price' => 10],
		['name' => 'Red Pill', 'price' => 15],
		['name' => 'Gold Slug', 'price' => 5],
		['name' => 'lightning bolt', 'price' => 40],
		['name' => 'Mjolnir', 'price' => 2]
	];

	foreach($products as $product){
		echo $product['name'] .' - '. $product['price'];
		echo '<br />';
	}

	// $i = 0;

	// while($i < count($products)){
	// 	echo $products[$i]['name'];
	// 	echo '<br />';
	// 	$i++;
	// }


?>

<!DOCTYPE html>
<html>
<head>
	<title>UC4LO2(LOOPS)</title>
</head>
<body>

	<h1>Loops</h1>
	<ul>
		<?php foreach($products as $product){ ?>
			<h3><?php echo $product['name']; ?></h3>
			<p>Php.<?php echo $product['price']; ?></p>
		<?php } ?>
	</ul>

</body>
</html>