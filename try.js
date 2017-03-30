// Loosely based off jczimm's Soundcloud Follower Count
// https://codepen.io/jczimm/pen/GJqGRe

// Replace with Soundcloud userID
var userID = "inversenetwork";
// Replace with Youtube Channel ID
var channelID = "UCx5rscERi7IpVS9dO_HCl5A";

// ------------------------------------------------------------------------ //

/////////////////////////////////
// GET SOUNDCLOUD FOLLOWERS COUNT
/////////////////////////////////
aja()
	.method("GET")
	.url('https://api.soundcloud.com/users/' + userID + '?consumer_key=8bcccc3476eaa137a084c9f0c041915f')
	.on('200', function(res) {
		var followersCount = '' + res.followers_count + '';
	
		// If followersCount is defined
		if (followersCount !== undefined) {
			// Update SC Count Text
			$("#sc-count").text(roundNum(followersCount));
		}
	})
	.go();


/////////////////////////////////
// GET YOUTUBE SUBSCRIBER COUNT
/////////////////////////////////

// Create a script element to execute the API URL
var getsubs = document.createElement("script");
getsubs.src = 'https://www.googleapis.com/youtube/v3/channels?part=statistics&id='+channelID+'&key=AIzaSyAyWsBUsAChiYPDOptU-NBAh_p7oExR1oc&callback=getJSON';
document.head.appendChild(getsubs);

// Get Youtube JSON response
function getJSON(response) {
	var subCount = response.items[0].statistics.subscriberCount;
	
	// Update YT Count Text
	$("#yt-count").text(roundNum(subCount));
}

/////////////////////////////////
// ROUND NUMBERS
/////////////////////////////////
function roundNum(num) {
    var parts = num.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,").split(",");
	return parts.length > 1 ? (Math.round(parseInt(parts.join(""), 10) / Math.pow(1000, parts.length-1)) + ["K", "M", "B"][parts.length-2]) : parts[0];
}
