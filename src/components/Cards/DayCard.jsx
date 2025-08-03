import Utils from "../../Utils/Utils.js";
function DayCard({datum, tempFormat}) {
 if (!datum) {
     return null;
 }

 let date = new Date(datum.dt * 1000);
 let dayName = date.toLocaleDateString("en-US", { weekday: "long" });
 let weather = datum.weather[0];

  return (
      <div className="day-card d-flex d-row radius bg-gray justify-content-between align-items-center">
          <div>
              <span className="text-big">{dayName}</span>
          </div>

          <div className="d-flex d-row align-items-center gap-12">
              <div className={`weather-container weather-container-${weather.icon.replace('n', 'd')}`}></div>
              <span className="text-medium text-left">{weather.description}</span>
          </div>

          <div className="d-flex d-row align-items-center gap-12 w-75">
              <div>{Utils.convert(datum.main.temp_min, tempFormat)}°</div>
              <div className="progress">
                  <div className="progress-bar"></div>
              </div>
              <div>{Utils.convert(datum.main.temp_max, tempFormat)}°</div>
          </div>
      </div>
  )
}

export default DayCard
