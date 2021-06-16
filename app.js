let data = '{"lat":51.48,"lon":0.04,"timezone":"Europe/London","timezone_offset":3600,"daily":[{"dt":1623844800,"sunrise":1623814932,"sunset":1623874739,"moonrise":1623835860,"moonset":1623801600,"moon_phase":0.19,"temp":{"day":27.01,"min":14.81,"max":27.93,"night":19.5,"eve":26.06,"morn":18.43},"feels_like":{"day":26.92,"night":19.96,"eve":26.06,"morn":18.23},"pressure":1011,"humidity":41,"dew_point":12.57,"wind_speed":4.56,"wind_deg":194,"wind_gust":7.19,"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"clouds":0,"pop":1,"rain":2.44,"uvi":7.28},{"dt":1623931200,"sunrise":1623901331,"sunset":1623961165,"moonrise":1623927000,"moonset":1623889200,"moon_phase":0.23,"temp":{"day":16.12,"min":15.15,"max":19.28,"night":15.15,"eve":16.66,"morn":18.41},"feels_like":{"day":16.24,"night":14.91,"eve":16.5,"morn":18.81},"pressure":1011,"humidity":94,"dew_point":15.13,"wind_speed":3.91,"wind_deg":338,"wind_gust":5.8,"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"clouds":100,"pop":1,"rain":5.38,"uvi":1.58},{"dt":1624017600,"sunrise":1623987733,"sunset":1624047588,"moonrise":1624018140,"moonset":1623976620,"moon_phase":0.25,"temp":{"day":15.99,"min":12.8,"max":15.99,"night":12.8,"eve":14.51,"morn":14.01},"feels_like":{"day":15.52,"night":12.41,"eve":14.08,"morn":13.45},"pressure":1016,"humidity":72,"dew_point":10.99,"wind_speed":4.34,"wind_deg":25,"wind_gust":9.18,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":100,"pop":0.44,"rain":0.16,"uvi":0.47},{"dt":1624104000,"sunrise":1624074137,"sunset":1624134007,"moonrise":1624109340,"moonset":1624063980,"moon_phase":0.3,"temp":{"day":17.39,"min":11.03,"max":17.39,"night":12.52,"eve":14.66,"morn":12.51},"feels_like":{"day":16.78,"night":12.23,"eve":14.19,"morn":12.04},"pressure":1016,"humidity":61,"dew_point":9.88,"wind_speed":5.32,"wind_deg":92,"wind_gust":10.96,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":92,"pop":0.71,"rain":0.78,"uvi":6.1},{"dt":1624190400,"sunrise":1624160545,"sunset":1624220424,"moonrise":1624200780,"moonset":1624151400,"moon_phase":0.33,"temp":{"day":18.31,"min":11.77,"max":18.64,"night":15.28,"eve":18.64,"morn":13.62},"feels_like":{"day":18.42,"night":15.08,"eve":18.44,"morn":13.6},"pressure":1002,"humidity":85,"dew_point":15.76,"wind_speed":8.38,"wind_deg":55,"wind_gust":16.71,"weather":[{"id":502,"main":"Rain","description":"heavy intensity rain","icon":"10d"}],"clouds":100,"pop":1,"rain":22.88,"uvi":3.41},{"dt":1624276800,"sunrise":1624246956,"sunset":1624306838,"moonrise":1624292460,"moonset":1624238880,"moon_phase":0.37,"temp":{"day":14.59,"min":12.13,"max":19.99,"night":14.62,"eve":16.43,"morn":12.69},"feels_like":{"day":14.12,"night":14.1,"eve":16.06,"morn":12.13},"pressure":1007,"humidity":77,"dew_point":10.71,"wind_speed":3.48,"wind_deg":350,"wind_gust":6.09,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":100,"pop":0.41,"rain":0.45,"uvi":4},{"dt":1624363200,"sunrise":1624333370,"sunset":1624393248,"moonrise":1624384200,"moonset":1624326660,"moon_phase":0.41,"temp":{"day":13.88,"min":10.98,"max":13.88,"night":10.98,"eve":11.95,"morn":11.53},"feels_like":{"day":13.1,"night":10.14,"eve":11.16,"morn":10.78},"pressure":1011,"humidity":68,"dew_point":8.11,"wind_speed":4.02,"wind_deg":281,"wind_gust":8.26,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":99,"pop":0.46,"rain":0.79,"uvi":4},{"dt":1624449600,"sunrise":1624419787,"sunset":1624479656,"moonrise":1624475880,"moonset":1624414860,"moon_phase":0.45,"temp":{"day":15.75,"min":8.14,"max":16.69,"night":12.63,"eve":15.53,"morn":9.17},"feels_like":{"day":14.48,"night":11.75,"eve":14.57,"morn":6.74},"pressure":1019,"humidity":42,"dew_point":2.87,"wind_speed":5.27,"wind_deg":282,"wind_gust":10.41,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":67,"pop":0.45,"rain":0.3,"uvi":4}]}'
let parsedJson = JSON.parse(data)

console.log(parsedJson)
// console.log(parsedJson.daily[0])


class Weather {
    constructor(weather) {
        console.log('new instance')
        this.weather = weather
        // console.log(this.weather)
    }

    getWeeklyWeather(daily) {
        daily = this.weather

      let alldays = daily.map( function(daily){
          return Math.round(daily.temp.max)
      })
      return alldays
    }
}

let weekly_forecast = new Weather(parsedJson.daily)

// console.log(weekly_forecast.getWeeklyWeather())