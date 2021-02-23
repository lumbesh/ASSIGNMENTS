<?php 

	// functions

	function sayHello($name = 'Vince ', $time = 'morning'){
		echo "Good $time, $name" . '<br />';
	}

	sayHello();
	sayHello('Vince ' );
	sayHello('Gwap', 'night');

	function formatProduct($product){
		echo "{$product['name']} costs Php.{$product['price']} to buy <br />";
		return "The {$product['name']} costs Php.{$product['price']} to buy <br />";
	}
	
	formatProduct(['name' => 'Gold Slug', 'price' => 20]);

	$formatted = formatProduct(['name' => 'Gold Slug', 'price' => 20]);
	echo $formatted;

?>

<!DOCTYPE html>
<html>
<head>
	<title>UC4L02 Assignments</title>
</head>
<body>
    <h1>UC4L02 Functions</h1>
</body>
</html>