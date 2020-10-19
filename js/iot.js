function change_to_iframe(framedata)
{
	//document.getElementById("icons").style.display="none";
	var temp = "https://thingspeak.com/channels/1191743/charts/1?dynamic=true&results=60&title=Temperature&type=line"
	var moist = "https://thingspeak.com/channels/1186763/charts/1?bgcolor=%23ffffff&dynamic=true&results=60&type=line&update=15";
	var gas = "https://thingspeak.com/channels/1186763/charts/1?bgcolor=%23ffffff&dynamic=true&results=60&type=line&update=15";
	var tilt = "https://thingspeak.com/channels/1186763/charts/1?bgcolor=%23ffffff&dynamic=true&results=60&type=line&update=15";
	var pir = "https://thingspeak.com/channels/1186763/charts/1?bgcolor=%23ffffff&dynamic=true&results=60&type=line&update=15";	
	if(framedata=="temp")
	{
		framesrc = temp;
	}
	else if(framedata=="moist")
	{
		framesrc = moist;
	}
	else if(framedata=="gas")
	{
		framesrc = gas
	}
	else if(framedata=="tilt")
	{
		framesrc=tilt
	}
	else if(framedata=="pir")
	{
		framesrc=pir
	}
	
	document.getElementById(framedata).src=framesrc
	document.getElementById(framedata).style.width = "450px";
	document.getElementById(framedata).style.height ="260px";
	
}
function back_to_img(framedata)
{
	document.getElementById(framedata).style.width = "72px";
	document.getElementById(framedata).style.height ="120px";
	document.getElementById(framedata).src="images/"+framedata+".png";
}
