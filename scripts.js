var pi, i = -2, lost = false, first = true, pispan, interval, picopy;

window.onload = function() {
	var client = new XMLHttpRequest();
	client.open('GET', 'pi.txt');
	client.onreadystatechange = function() {
	  pi = client.responseText;
	  picopy = pi;
	}
	client.send();
	pispan = document.getElementById("pinumber");
	document.body.onkeydown = function(event)
	{
		if (event.shiftKey)
		{
			if (event.keyCode == 191)
			{
				alert("Easter egg? Just sayin'...");
				document.getElementById("introductiontext").parentNode.removeChild(document.getElementById("introductiontext"));
				interval = setInterval(function(){enterpi(pi.charAt(0));}, 100);
			}
			else if (event.keyCode == 82)
			{
				reset();
			}
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
				enterpi(entry);
			}
		}
	}
}

function enterpi(entry) {
				var pidigit = pi.charAt(0);
				if (i > 78)
					pispan.style.fontSize = "20px";
	            if (first)
	                document.getElementById("introductiontext").parentNode.removeChild(document.getElementById("introductiontext"));
				if (pidigit == entry)
				{
					i++;
					if (first === true)
					{
						first = false;
						pispan = document.getElementById("pinumber");
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
						pispan = document.getElementById("pinumber");
						pispan.innerHTML = "<span class='wrong'>"+entry+"</span><span class='next'>("+pidigit+"!!!)</span>";
					}
					else
						pispan.innerHTML = pispan.innerHTML+"<span class='wrong'>"+entry+"</span><span class='next'>("+pidigit+")</span>";
					lost = true;
				}
}

function reset() {
	pi = picopy;
	i = -2;
	lost = false;
	first = true;
	document.getElementsByClassName("centered")[0].innerHTML = '<span id="introductiontext" class="centered">Write π without any error!</span><span id="pinumber" class="centered good"></span>';
}