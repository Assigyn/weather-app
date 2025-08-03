import LocationCard from "./Cards/LocationCard.jsx";
import DayCard from "./Cards/DayCard.jsx";
import Utils from "../Utils/Utils.js";
import {useEffect, useState} from "react";

function WeekWeather({weeklyData, tempFormat}) {
  const [weeksDay, setWeeksDay] = useState([])

    useEffect(() => {
        setWeeksDay(Utils.regroupData(weeklyData).slice(0, 5))
    }, [weeklyData]);

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
                  {weeksDay.map((datum, key) => { return <DayCard key={key} datum={datum} tempFormat={tempFormat} /> })}
              </div>
          </div>
      </div>
  )
}

export default WeekWeather
