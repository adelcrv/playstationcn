<!DOCTYPE html>
<html>
<head>
	<title>تقنيات التعليم</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="stylesheet" type="text/css" href="../css/OldCss/bootstrap4.css">
	<link rel="stylesheet" type="text/css" href="../css/app.css">
	<link rel="stylesheet" type="text/css" href="../css/OldCss/app.css">
	<link href="../css/font-awesome.min.css" rel="stylesheet">
	<script src="../js/Oldjs/jquery.js" type="text/javascript"></script>
	<script src="../js/Oldjs/tether.min.js" type="text/javascript"></script>
	<script src="../js/Oldjs/bootstrap4.min.js" type="text/javascript"></script>
	
</head>

<body class="bodyFont" onresize="myWindowSize()">

<?php

require_once('include/headerPages.php');

?>
        	<!--jumbotron-->
	<div class="jumbotron" style="background-color: #5cd0e3;">
		<div class="container">
			<div class="row flex-row-reverse">
				<div class="col-md-8 text-center" style="padding-top: 20px;">
					<h1 class="flex-row-reverse" style="color: #2448e6b3;">رؤيتي لعالم جديد</h1>
					<h4 class="text-white">نحو عالم تقني ممتع</h4>
				</div>

				<div class="col-md-4">
					<img src="img/phtoict.png" alt="" class="rounded mx-auto d-block" style="margin-bottom:-90px; margin-top:-20px;">
				</div>
			</div> 
		</div>
	</div>
<!-- end jumbotron-->
                                

	<div class="container" style="margin-bottom:40px;">
		<div class="row flex-row-reverse justify-content-center" style="align-content: center; margin-bottom:10px;">
	            <div class='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12' style="padding-bottom: 15px;"><a href="/book"><img src="img/1.png" alt="" class="rounded mx-auto d-block"></a></div>
                <div class='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12' style="padding-bottom: 15px;"><a href="/library"><img src="img/4.png" alt="" class="rounded mx-auto d-block"></a></div>
				<div class='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12' style="padding-bottom: 15px;"><a href="/audio"><img src="img/2.png" alt="" class="rounded mx-auto d-block"></a></div>
		        <div class='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12' style="padding-bottom: 15px;"><a href="/video"><img src="img/3.png" alt="" class="rounded mx-auto d-block"></a></div>
                <div class='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12' style="padding-bottom: 15px;"><a href="/map"><img src="img/5.png" alt="" class="rounded mx-auto d-block"></a></div>		
                <!--<div class='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12' style="padding-bottom: 15px;"><a href="/virlib"><img src="img/8.png" alt="" class="rounded mx-auto d-block"></a></div>--> 
				<div class='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12' style="padding-bottom: 15px;"><a href="/omcust"><img src="img/9.png" alt="" class="rounded mx-auto d-block"></a></div>	
				<!--<div class='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12' style="padding-bottom: 15px;"><a href="/lrc"><img src="img/6.png" alt="" class="rounded mx-auto d-block"></a></div>-->
	            <div class='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12' style="padding-bottom: 15px;"><a href="/quran"><img src="img/7.png" alt="" class="rounded mx-auto d-block"></a></div>	</div>
	</div><?php

require_once('include/footerPages.php');

$xmlDoc = new DOMDocument();
    $xmlDoc->load('xmljs/count.xml');
    $xmlDoc->formatOutput = true;

    $root = $xmlDoc->documentElement;

    (int) $x=(int) $xmlDoc->getElementsByTagName('home')->item(0)->nodeValue ;
    (int) $x=(int) $x+1;

    // clear the existing text content
    $xmlDoc->getElementsByTagName('home')->item(0)->nodeValue="";
    // then create new text node
    $xmlDoc->getElementsByTagName('home')->item(0)->appendChild($xmlDoc->createTextNode($x));


    $xmlDoc->save('xmljs/count.xml');

echo "<script type='text/javascript'>document.getElementById('count').innerHTML =parseInt(". $x .").toLocaleString('ar-EG').replace('٬','').replace('٬','');</script>";


?>


</body>

</html>

