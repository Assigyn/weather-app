import LocationCard from "./Cards/LocationCard.jsx";
import DayCard from "./Cards/DayCard.jsx";

function WeekWeather() {
  return (
      <div className="d-flex flex-row justify-content-between flex-auto gap-44">
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
                  <DayCard />
                  <DayCard />
                  <DayCard />
                  <DayCard />
                  <DayCard />
              </div>
          </div>
      </div>
  )
}

export default WeekWeather
