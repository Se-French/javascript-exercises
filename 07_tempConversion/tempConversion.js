const convertToCelsius = function(temp) {
  const celsius = (temp - 32)*(5/9);
  const celsRound = Math.round(celsius * 10)/10;
  return celsRound;
};

const convertToFahrenheit = function(temp) {
  const fahrenheit = (temp * (9/5)) + 32;
  const fahrRound = Math.round(fahrenheit * 10)/10;
  return fahrRound;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
