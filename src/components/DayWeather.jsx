import CityCard from "./Cards/CityCard.jsx";
import HourCard from "./Cards/HourCard.jsx";

function DayWeather() {
  return (
      <div className="d-flex flex-row w-100 justify-content-between gap-44">
          <CityCard />
          <div className="d-flex flex-row w-100 flex-wrap gap-24">
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
