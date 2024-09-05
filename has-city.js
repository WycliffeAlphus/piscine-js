function hasCity(country, arrstring){
    return function(city){
        if (arrstring.includes(city)){
            return `${city} is a city from ${country}`
        } else {
            return `${city} is not a city from ${country}`
        }
    }
}