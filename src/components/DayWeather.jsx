import CityCard from "./Cards/CityCard.jsx";
import HourCard from "./Cards/HourCard.jsx";

function DayWeather() {
  return (
      <div className="d-flex flex-row w-100 justify-content-between">
          <CityCard />
          <div className="d-flex flex-row w-100 justify-content-evenly">
              <HourCard />
              <HourCard />
              <HourCard />
              <HourCard />
              <HourCard />
              <HourCard />
              <HourCard />
              <HourCard />
          </div>
      </div>
  )
}

export default DayWeather
