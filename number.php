<?php

	//function to get the remote data
	function url_get_contents ($url) {
	    if (function_exists('curl_exec')){ 
	        $conn = curl_init($url);
	        curl_setopt($conn, CURLOPT_SSL_VERIFYPEER, true);
	        curl_setopt($conn, CURLOPT_FRESH_CONNECT,  true);
	        curl_setopt($conn, CURLOPT_RETURNTRANSFER, 1);
	        $url_get_contents_data = (curl_exec($conn));
	        curl_close($conn);
	    }elseif(function_exists('file_get_contents')){
	        $url_get_contents_data = file_get_contents($url);
	    }elseif(function_exists('fopen') && function_exists('stream_get_contents')){
	        $handle = fopen ($url, "r");
	        $url_get_contents_data = stream_get_contents($handle);
	    }else{
	        $url_get_contents_data = false;
	    }
	return $url_get_contents_data;
	} 
	


	$url_yt = "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCSckEwXBJmJEUzIo6NplQ5g&key=AIzaSyAJYe8sLNi8n0SQF_ZnmeuflkGeQAIGM3Y";
	$yt_array = url_get_contents($url_yt);
	$ytcount = json_decode($yt_array, true);
	$ytsubscribers = $ytcount['items'][0]['subscriberCount'];



// echo the youtube follower count
    echo $ytsubscribers;

?>
