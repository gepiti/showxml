
function loadXMLDoc() {
	var req = new XMLHttpRequest();
	req.open('GET', 'http://212.71.233.203/data/test.xml', true);
	req.send();

	req.onreadystatechange = function() {
		if (req.readyState == 4) {
			if( (req.status == 200) || (req.status == 0) ) {

				//alert(req.responseText.length);
				alert(req.responseText);
				if(req.responseText.length > 0) {
					var result2show = readxmldata(req.responseText);
					document.getElementById("myDiv").innerHTML=result2show;
				}
				else {
					document.getElementById("myDiv").innerHTML= 'No Data';
				}
			}
			else {
				alert("Error talking to server");
			}
		}
	}
}

function readxmldata (txt) {
	if (window.DOMParser)
	  {
		parser=new DOMParser();
		xmlDoc=parser.parseFromString(txt,"text/xml");
	  }
	else // Internet Explorer
	  {
		xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
		xmlDoc.async=false;
		xmlDoc.loadXML(txt);
	  }
  
	var data2show = '';
	
	for (i=0;i < xmlDoc.getElementsByTagName("clientcode").length;i++) {

		var clientcode = xmlDoc.getElementsByTagName("clientcode")[i].childNodes[0].nodeValue;

		var searchstring = xmlDoc.getElementsByTagName("searchstring")[i].childNodes[0].nodeValue;

		data2show = data2show + '---' + clientcode + '---' + searchstring;
	}
	return data2show;
 }
