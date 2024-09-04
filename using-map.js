function citiesOnly(objArray){
    return objArray.map((obj)=>obj.city);
}

function upperCasingStates(objArray){
    return objArray.map((str)=>str[0].toUpperCase() + str.slice(1).toLowerCase());
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
    return objArray
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

