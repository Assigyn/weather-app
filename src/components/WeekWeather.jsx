import LocationCard from "./Cards/LocationCard.jsx";
import DayCard from "./Cards/DayCard.jsx";
import Utils from "../Utils/Utils.js";

function WeekWeather({weeklyData}) {
  let weeksDay = [];

  if (weeklyData.length > 0) {
      weeksDay = Utils.regroupData(weeklyData)
  }

  console.log(weeksDay)

  return (
      <div className="d-flex d-row-reverse justify-content-between flex-auto gap-44">
          <div className="d-flex d-column">
              <h2>Other large cities</h2>

              <div className="d-flex d-column gap-24">
                  <LocationCard />
                  <LocationCard />
                  <LocationCard />
              </div>
          </div>

          <div className="d-flex d-column flex-auto">
              <h2>5 days forecast</h2>
              <div className="d-flex d-column gap-12">
                  {weeksDay.map((datum, key) => { return <DayCard key={key} datum={datum} /> })}
              </div>
          </div>
      </div>
  )
}

export default WeekWeather
