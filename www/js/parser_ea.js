

function ealoadXMLDoc() {
	var req = new XMLHttpRequest();
	req.open('GET', 'http://212.71.233.203/data/ea.xml', true);
	req.send();

	req.onreadystatechange = function() {
		if (req.readyState == 4) {
			if( (req.status == 200) || (req.status == 0) ) {

				//alert(req.responseText.length);
//				alert(req.responseText);
				if(req.responseText.length > 0) {
					var result2show = ea_readxmldata(req.responseText);
					document.getElementById("eaDiv").innerHTML=result2show;
				}
				else {
					document.getElementById("eaDiv").innerHTML= 'No Data';
				}
			}
			else {
				alert("Error talking to server");
			}
		}
	}
}
function ea_readxmldata (txt) {
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
  
	var data2show = '<h1>';
	
	for (i=0;i < xmlDoc.getElementsByTagName("data").length;i++) {

		var x = xmlDoc.getElementsByTagName("data")[i];
		var y = x.childNodes[0];
		var text = y.nodeValue;
		var txt = x.getAttribute("realtime");

// this works. Gives the value		var datacontent = xmlDoc.getElementsByTagName("data")[i].childNodes[0].nodeValue;

//		var data_attribute = datacontent.getAttributeNode("data");
	
		if (txt !== null) {
			data2show = data2show + txt;
		}
		data2show = data2show + ' ' + text + '---';
	}
	data2show = data2show + '</h1>';
	return data2show;
 }