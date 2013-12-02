var pi, i = -2, lost = false, first = true, pispan, interval;

window.onload = function() {
	var client = new XMLHttpRequest();
	client.open('GET', 'pi.txt');
	client.onreadystatechange = function() {
	  pi = client.responseText;
	}
	client.send();
	pispan = document.getElementById("pinumber");
	document.body.onkeydown = function(event)
	{
		if (event.shiftKey && event.keyCode == 191)
		{
			alert("Easter egg? Just sayin'...");
			enterpi(pi.charAt(0));
			interval = setInterval(function(){enterpi(pi.charAt(0));}, 100);
		}
		else if (lost === false)
		{
			var number = event.keyCode;
			var codes = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 190];
			var characters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
			var numbertxt = number.toString();
			var entry = str_replace(codes, characters, number);
			if ((number > 47 && number < 58) || number == 190)
			{
				if (i > 78)
					pispan.style.fontSize = "20px";
	            if (first)
	                document.getElementById("introductiontext").parentNode.removeChild(document.getElementById("introductiontext"));
				enterpi(entry);
			}
		}
	}
}

function enterpi(entry) {
				var pidigit = pi.charAt(0);
				if (pidigit == entry)
				{
					i++;
					if (first === true)
					{
						first = false;
						pispan.innerHTML = entry;
					}
					else
						pispan.innerHTML = pispan.innerHTML+entry;
					pi = pi.substr(1);
				}
				else
				{
					if (first === true)
					{
						first = false;
						pispan.innerHTML = "<span class='wrong'>"+entry+"</span><span class='next'>("+pidigit+"!!!)</span>";
					}
					else
						pispan.innerHTML = pispan.innerHTML+"<span class='wrong'>"+entry+"</span><span class='next'>("+pidigit+")</span>";
					lost = true;
				}
}