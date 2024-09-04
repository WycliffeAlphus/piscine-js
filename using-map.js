function citiesOnly(objArray){
    return objArray.map((obj)=>obj.city);
}

function upperCasingStates(objArray){
    return objArray.map((str)=>{
        return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    });
}

function fahrenheitToCelsius(objArray){
    return objArray.map(fahrenheit=>{
        const value = parseFloat(fahrenheit);
        const celsiusValue = Math.floor((value-32)*5/9);
        return `${celsiusValue}°C`;
    });
}
function trimTemp(objArray){
   
return objArray.map((obj)=>{
    obj.temperature = obj.temperature.trim()
    return obj
});
}
function tempForecasts(objArray){
return objArray.map((obj) =>{
  const celc = parseFloat(obj.temperature);
  const celsiusValue = Math.floor((celc-32)*5/9);
  const stateValue = obj.state.charAt(0).toUpperCase()+obj.state.slice(1).toLowerCase()
    return `${celsiusValue}°Celsius  in ${obj.city}, ${stateValue}`
});
}

console.log(trimTemp([
    { city: 'Los Angeles', temperature: '  101 °F   ' },
    { city: 'San Francisco', temperature: ' 84 ° F   ' },
  ]))