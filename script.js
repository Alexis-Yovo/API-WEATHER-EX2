var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (xmlhttp.readyState == XMLHttpRequest.DONE) {
    if (xmlhttp.status == 200) {
      var data = JSON.parse(xmlhttp.responseText);
      // Accès au propiétes JSON
      alert("Weather: " + data.weather[0].description);
    } else if (xmlhttp.status == 400) {
      alert("Error 400");
    } else {
      alert("Autre élément est retourné ");
    }
  }
};
xmlhttp.open(
  "GET",
  "http://api.openweathermap.org/data/2.5/weather?id=524901&APPID=ecec2c207dd869ef770284f8efd147b2",
  true
);
xmlhttp.send();
