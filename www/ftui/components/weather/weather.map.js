/*
  19 intermediates:
  CLOUDLESS, SUNNY, FAIR, PARTLY_CLOUDY, MOSTLY_CLOUDY, CLOUDY, VERY_CLOUDY, OVERCAST,
  FOGGY, DRIZZLE, LIGHT_SHOWERS, SHOWERS, RAIN_SNOW, SNOW_SHOWER, THUNDERSTORM, SNOW,
  SCATTERED_THUNDERSTORM, NA, CLEAR
*/

export const providerSet = {
  proplanta: {
    wolkenlos: 'CLOUDLESS',
    sonnig: 'SUNNY',
    heiter: 'FAIR',
    'leicht bewölkt': 'PARTLY_CLOUDY',
    wolkig: 'MOSTLY_CLOUDY',
    'bewölkt': 'CLOUDY',
    'stark bewölkt': 'VERY_CLOUDY',
    bedeckt: 'OVERCAST',
    Nebel: 'FOGGY',
    'Sprühregen': 'DRIZZLE',
    Regenschauer: 'LIGHT_SHOWERS',
    Regen: 'SHOWERS',
    Schneeregen: 'RAIN_SNOW',
    Schneeschauer: 'SNOW_SHOWER',
    Gewitter: 'THUNDERSTORM',
    Schneefall: 'SNOW',
    'unterschiedlich bewölkt, vereinzelt Schauer und Gewitter': 'SCATTERED_THUNDERSTORM',
    nb: 'NA',
    klar: 'CLEAR',
  },
  proplantaICON: {
    t1: 'CLOUDLESS',
    t2: 'PARTLY_CLOUDY',
    t3: 'MOSTLY_CLOUDY',
    t4: 'CLOUDY',
    t5: 'OVERCAST',
    t6: 'LIGHT_SHOWERS',
    t7: 'SHOWERS',
    t8: 'SCATTERED_THUNDERSTORM',
    t9: 'SNOW_SHOWER',
    t10: 'SNOW',
    t11: 'RAIN_SNOW',
    t12: 'HAZE',
    t13: 'FOGGY',
    t14: 'DRIZZLE',
    n1: 'CLOUDLESS_NIGHT',
    n2: 'PARTLY_CLOUDY_NIGHT',
    n3: 'MOSTLY_CLOUDY_NIGHT',
    n4: 'CLOUDY_NIGHT',
    n5: 'OVERCAST_NIGHT',
    n6: 'LIGHT_SHOWERS_NIGHT',
    n7: 'SHOWERS_NIGHT',
    n8: 'SCATTERED_THUNDERSTORM_NIGHT',
    n9: 'SNOW_SHOWER_NIGHT',
    n10: 'SNOW_NIGHT',
    n11: 'RAIN_SNOW_NIGHT',
    n12: 'HAZE_NIGHT',
    n13: 'FOGGY_NIGHT',
    n14: 'DRIZZLE_NIGHT',
    na: 'NA',
  }
}

export const iconSet = {
  kleinklima: {
    CLOUDLESS: './icons/weather/kleinklima/sunny.svg',
    SUNNY: './icons/weather/kleinklima/sunny.svg',
    FAIR: './icons/weather/kleinklima/mostly_sunny.svg',
    PARTLY_CLOUDY: './icons/weather/kleinklima/mostly_cloudy.svg',
    MOSTLY_CLOUDY: './icons/weather/kleinklima/mostly_cloudy.svg',
    CLOUDY: './icons/weather/kleinklima/mostly_cloudy.svg',
    VERY_CLOUDY: './icons/weather/kleinklima/mostly_cloudy.svg',
    OVERCAST: './icons/weather/kleinklima/overcast.svg',
    FOGGY: './icons/weather/kleinklima/haze.svg',
    DRIZZLE: './icons/weather/kleinklima/mist.svg',
    LIGHT_SHOWERS: './icons/weather/kleinklima/showers.svg',
    SHOWERS: './icons/weather/kleinklima/rain.svg',
    RAIN_SNOW: './icons/weather/kleinklima/rainsnow.svg',
    SNOW_SHOWER: './icons/weather/kleinklima/chance_of_snow.svg',
    THUNDERSTORM: './icons/weather/kleinklima/thunderstorm.svg',
    SNOW: './icons/weather/kleinklima/heavysnow.svg',
    SCATTERED_THUNDERSTORM: './icons/weather/kleinklima/scatteredthunderstorms.svg',
    NA: './icons/weather/kleinklima/na.svg',
    CLEAR: './icons/weather/kleinklima/clear.png',
  },
  kleinklimaFHEM: {
    CLOUDLESS: '../images/default/weather/sunny.png',
    SUNNY: '../images/default/weather/sunny.png',
    FAIR: '../images/default/weather/mostly_sunny.png',
    PARTLY_CLOUDY: '../images/default/weather/partly_cloudy.png',
    MOSTLY_CLOUDY: '../images/default/weather/mostly_cloudy.png',
    CLOUDY: '../images/default/weather/mostly_cloudy.png',
    VERY_CLOUDY: '../images/default/weather/cloudy.png',
    OVERCAST: '../images/default/weather/overcast.png',
    FOGGY: '../images/default/weather/haze.png',
    DRIZZLE: '../images/default/weather/drizzle.png',
    LIGHT_SHOWERS: '../images/default/weather/chance_of_rain.png',
    SHOWERS: '../images/default/weather/rain.png',
    RAIN_SNOW: '../images/default/weather/rainsnow.png',
    SNOW_SHOWER: '../images/default/weather/chance_of_snow.png',
    THUNDERSTORM: '../images/default/weather/thunderstorm.png',
    SNOW: '../images/default/weather/heavysnow.png',
    SCATTERED_THUNDERSTORM: '../images/default/weather/scatteredthunderstorms.png',
    CLOUDLESS_NIGHT: '../images/default/weather/clear.png',
    FAIR_NIGHT: '../images/default/weather/mostly_clear_night.png',
    PARTLY_CLOUDY_NIGHT: '../images/default/weather/partly_cloudy_night.png',
    MOSTLY_CLOUDY_NIGHT: '../images/default/weather/mostly_cloudy_night.png',
    CLOUDY_NIGHT: '../images/default/weather/mostly_cloudy_night.png',
    VERY_CLOUDY_NIGHT: '../images/default/weather/cloudy.png',
    OVERCAST_NIGHT: '../images/default/weather/overcast.png',
    FOGGY_NIGHT: '../images/default/weather/haze_night.png',
    DRIZZLE_NIGHT: '../images/default/weather/drizzle_night.png',
    LIGHT_SHOWERS_NIGHT: '../images/default/weather/chance_of_rain_night.png',
    SHOWERS_NIGHT: '../images/default/weather/rain.png',
    RAIN_SNOW_NIGHT: '../images/default/weather/rainsnow.png',
    SNOW_SHOWER_NIGHT: '../images/default/weather/chance_of_storm_night.png',
    THUNDERSTORM_NIGHT: '../images/default/weather/thunderstorm.png',
    SNOW_NIGHT: '../images/default/weather/heavysnow.png',
    SCATTERED_THUNDERSTORM_NIGHT: '../images/default/weather/scatteredthunderstorms_night.png',
    NA: '../images/default/weather/na.png',
    CLEAR: '../images/default/weather/clear.png',
  },
  bas: {
    CLOUDLESS:'./icons/weather/bas/bas_clear-day.svg',
    SUNNY:'./icons/weather/bas/bas_clear-day.svg',
    FAIR:'./icons/weather/bas/bas_partly-cloudy-day.svg',
    PARTLY_CLOUDY:'./icons/weather/bas/bas_partly-cloudy-day.svg',
    MOSTLY_CLOUDY:'./icons/weather/bas/bas_overcast-day.svg',
    CLOUDY:'./icons/weather/bas/bas_cloudy.svg',
    VERY_CLOUDY:'./icons/weather/bas/bas_cloudy.svg',
    OVERCAST:'./icons/weather/bas/bas_overcast-day.svg',
    LIGHT_SHOWERS:'./icons/weather/bas/bas_partly-cloudy-day-rain.svg',
    SHOWERS:'./icons/weather/bas/bas_partly-cloudy-day-rain.svg',
    THUNDERSTORM:'./icons/weather/bas/bas_thunderstorms-day.svg',
    SCATTERED_THUNDERSTORM:'./icons/weather/bas/bas_thunderstorms-day-rain.svg',
    SNOW_SHOWER:'./icons/weather/bas/bas_partly-cloudy-day-snow.svg',
    SNOW:'./icons/weather/bas/bas_snow.svg',
    RAIN_SNOW:'./icons/weather/bas/bas_partly-cloudy-day-sleet.svg',
    HAZE:'./icons/weather/bas/bas_partly-cloudy-day-fog.svg',
    FOGGY:'./icons/weather/bas/bas_fog-day.svg',
    DRIZZLE:'./icons/weather/bas/bas_drizzle.svg',
    CLOUDLESS_NIGHT:'./icons/weather/bas/bas_clear-night.svg',
    FAIR_NIGHT:'./icons/weather/bas/bas_partly-cloudy-night.svg',
    PARTLY_CLOUDY_NIGHT:'./icons/weather/bas/bas_partly-cloudy-night.svg',
    MOSTLY_CLOUDY_NIGHT:'./icons/weather/bas/bas_overcast-night.svg',
    CLOUDY_NIGHT:'./icons/weather/bas/bas_cloudy.svg',
    VERY_CLOUDY_NIGHT:'./icons/weather/bas/bas_cloudy.svg',
    OVERCAST_NIGHT:'./icons/weather/bas/bas_overcast-night.svg',
    LIGHT_SHOWERS_NIGHT:'./icons/weather/bas/bas_partly-cloudy-night-rain.svg',
    SHOWERS_NIGHT:'./icons/weather/bas/bas_rain.svg',
    THUNDERSTORM_NIGHT:'./icons/weather/bas/bas_thunderstorms-night.svg',
    SCATTERED_THUNDERSTORM_NIGHT:'./icons/weather/bas/bas_thunderstorms-night-rain.svg',
    SNOW_SHOWER_NIGHT:'./icons/weather/bas/bas_partly-cloudy-night-snow.svg',
    SNOW_NIGHT:'./icons/weather/bas/bas_snow.svg',
    RAIN_SNOW_NIGHT:'./icons/weather/bas/bas_partly-cloudy-night-sleet.svg',
    HAZE_NIGHT:'./icons/weather/bas/bas_partly-cloudy-night-fog.svg',
    FOGGY_NIGHT:'./icons/weather/bas/bas_fog-night.svg',
    DRIZZLE_NIGHT:'./icons/weather/bas/bas_drizzle.svg',
    CLEAR: './icons/weather/bas/bas_clear-night.svg',
    NA:'./icons/none.svg',
  },
  meteocons: {
    CLOUDLESS: './icons/sun.svg',
    SUNNY: './icons/sun.svg',
    FAIR: './icons/sun.svg',
    PARTLY_CLOUDY: './icons/cloudy.svg',
    MOSTLY_CLOUDY: './icons/cloudy.svg',
    CLOUDY: './icons/cloud.svg',
    VERY_CLOUDY: './icons/cloudy1.svg',
    OVERCAST: './icons/cloudy1.svg',
    FOGGY: './icons/lines.svg',
    DRIZZLE: './icons/rainy.svg',
    LIGHT_SHOWERS: './icons/rainy.svg',
    SHOWERS: './icons/rainy1.svg',
    RAIN_SNOW: './icons/weather3.svg',
    SNOW_SHOWER: './icons/snowy.svg',
    THUNDERSTORM: './icons/lightning1.svg',
    SNOW: './icons/snowy2.svg',
    SCATTERED_THUNDERSTORM: './icons/sunny-sleet-storm.svg',
    NA: './icons/none.svg',
    CLEAR: './icons/moon.svg',
  }
}
