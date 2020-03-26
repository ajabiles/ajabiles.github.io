/*

- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data .
  for Washington DC (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.

*/
/*
const button = $("getWeather");

button.on('click', function() {
*/

(function() {
const $button = $('#getWeather');
const $city = $('#city');
$button.on('click', function(e){
 e.preventDefault();
 let newThing = $city.val();
 if (newThing === '') {
   alert('You must type in a value!');
 } else {
   let weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
   let apiKey = "4ade206763c0f24a2dcbe10b1d355375";
 let totalUrl = weatherUrl + '&appid=' + apiKey
 $.get(`${weatherUrl}${newThing}&appid=${apiKey}`, function(resp) {
   console.log(resp.main.temp)
   const kelvin = Math.ceil(resp.main.temp);
   const weather1 = $('#weather');
   weather1.html("the temperature is: " + (9/5 * (kelvin - 273) + 32) + " F");
  });
}
});
})();
//vb          vbv})
