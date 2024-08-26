function dogYears(planet, age){
const sec = 31557600;
    const years = {
        earth : (7*(age/sec)),
        mercury: (7*(age/sec))/0.2408467,
        venus: (7*(age/sec))/0.61519726,
        mars: (7*(age/sec))/1.8808158,
        jupiter: (7*(age/sec))/11.862615,
        saturn: (7*(age/sec))/29.447498 ,
        uranus: (7*(age/sec))/84.016846,
        venus: (7*(age/sec))/164.79132 ,

    }
    return parseFloat(years[planet].toFixed(2))
}