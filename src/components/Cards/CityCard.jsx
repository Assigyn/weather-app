import Utils from "../../Utils/Utils.js";

function CityCard({weatherData, tempFormat}) {
  const weather = weatherData.weather ? weatherData.weather[0] : [];

  return (
      <div className="city-card d-flex d-column radius bg-gray gap-12">
          <div className="d-flex flex-row justify-content-between align-items-center w-100">
              <div className="temperature text-xl">{weatherData.main ? Utils.convert(weatherData.main.temp, tempFormat) : '0'}°</div>
              <div className="city text-right">
                  <div className="text-big">{weatherData.name ? weatherData.name : '-'}</div>
                  <div className="text-regular">{Utils.getCurrentTime()}</div>
              </div>
          </div>

          <div className="d-flex flex-row justify-content-between align-items-center w-100">
              <div className="d-flex d-row justify-content-between align-items-center gap-12">
                  <div className={`weather-container weather-container-${weather.icon ?? '03d'}`}></div>
                  <span className="text-small">{weather.description ? weather.description : '...'}</span>
              </div>

              {weatherData.wind ? <div>{weatherData.wind.speed} m/s</div>: null}
          </div>

          <div className="d-flex flex-row justify-content-between align-items-center w-100">
              <div>Feel like: { weather.main ? Utils.convert(weatherData.main.feels_like, tempFormat) : '-'}</div>
              {weather.main ? <div>{`${Utils.convert(weatherData.main.temp_min, tempFormat)} to ${Utils.convert(weatherData.main.temp_max, tempFormat)}`}</div> : null}
          </div>
      </div>
  )
}

export default CityCard
