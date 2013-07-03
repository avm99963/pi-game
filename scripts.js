window.onload = function() {
	var client = new XMLHttpRequest();
	client.open('GET', 'pi.txt');
	client.onreadystatechange = function() {
	  window.pi = client.responseText;
	}
	client.send();
	var pispan = document.getElementById("pinumber");
	window.lost = false;
	window.first = true;
	window.i = -2;
	document.body.onkeydown = function(event)
	{
		if (window.lost === false)
		{
			var number = event.keyCode;
			if ((number > 47 && number < 58) || number == 190)
			{
				if (i > 78)
				{
					pispan.style.fontSize = "20px";
				}
				var codes = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 190];
				var characters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
				var pidigit = pi.charAt(0);
				var numbertxt = number.toString();
				var entry = str_replace(codes, characters, number);
				console.log("Entry: "+entry+" // Pidigit: "+pidigit);
				if (pidigit == entry)
				{
					window.i++;
					if (window.first === true)
					{
						window.first = false;
						pispan.innerHTML = "<span class='good'>"+entry+"</span>";
					}
					else
					{
						pispan.innerHTML = pispan.innerHTML+"<span class='good'>"+entry+"</span>";
					}
					pi = pi.substr(1);
				}
				else
				{
					if (window.first === true)
					{
						window.first = false;
						pispan.innerHTML = "<span class='wrong'>"+entry+"</span>";
					}
					else
					{
						pispan.innerHTML = pispan.innerHTML+"<span class='wrong'>"+entry+"</span>";
					}
					window.lost = true;
				}
			}
		}
	}
}