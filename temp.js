/ * When the input type receives input,it converts it into Fahrenheit */
 
function temperatureConverter(Celsius){
    Celsius=parseFloat( Celsius);
    document.getElementById("outputFahrenheit").innerHTML=(Celsius*1.8)+32+"°F";
    document.getElementById("outputKelvin").innerHTML=(Celsius+273)+"k";
    

}
function temperatureConverter1(Fahrenheit){
    Fahrenheit=parseFloat(Fahrenheit);
    document.getElementById("outputCelsius").innerHTML=(Fahrenheit-32)/1.8+" °C";
    document.getElementById("outputKelvin").innerHTML=((Fahrenheit-32)/1.8)+273+"k";
}
function temperatureConverter2(Kelvin){
    Kelvin=parseFloat(Kelvin);
    document.getElementById("outputCelsius").innerHTML=(Kelvin-273)+" °C";
    document.getElementById("outputFahrenheit").innerHTML=((Kelvin-273)*1.8)+32+"°F";

}
