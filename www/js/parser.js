

function loadXMLDoc() {
	var xmlhttp;
	if (window.XMLHttpRequest) 	{
// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else {
// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			var result2show = readxmldata(xmlhttp.responseText);
			document.getElementById("myDiv").innerHTML=result2show;
//			document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
		}
		else {
			document.getElementById("myDiv").innerHTML= 'No Data';
// Only for debugging. Otherwise it will show until the xml loads.
		}
	}
	xmlhttp.open("POST","http://212.71.233.203/data/test.xml",true);
	
	xmlhttp.send();
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
