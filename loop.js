const slider = document.getElementById('bar');

var value;

function func(){
  fetch('http://192.168.0.198:5000')
  .then(response => response.json())
  .then(data => value = data.arduinodata.anaologvalue);

  slider.value = value;
  console.log('value: ' + value)
  setTimeout(func, 100);
}
func();
