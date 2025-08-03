import CityCard from "./Cards/CityCard.jsx";
import HourCard from "./Cards/HourCard.jsx";

function DayWeather({weatherData, weeklyData, tempFormat}) {
  const data = weeklyData.slice(0, 8);

  return (
      <div className="d-flex d-row-mobile w-100 justify-content-between gap-44">
          <CityCard weatherData={weatherData} tempFormat={tempFormat}/>
          <div className="d-flex flex-row w-100 flex-wrap gap-24">
              {data.map((datum, key) => { return <HourCard key={key} datum={datum} tempFormat={tempFormat}/> })}
          </div>
      </div>
  )
}

export default DayWeather
