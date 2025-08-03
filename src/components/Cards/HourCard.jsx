import Utils from "../../Utils/Utils.js";

function HourCard({datum, tempFormat}) {
  const weatherCard = datum.weather[0];

  if (!datum || !weatherCard) {
      return null;
  }

  const icon = weatherCard.icon.replace('n', 'd')
  return (
      <div className="hour-card d-flex d-column radius bg-gray justify-content-between text-center">
          <div className="hour-span pb-12 text-medium">{datum.dt ? Utils.getCurrentTime(new Date(datum.dt * 1000)) : '-'}</div>
          {icon ? <div className={`pt-12 weather-container weather-container-${icon} margin-auto`}></div> : null}
          <div className="text-small">{weatherCard.description}</div>
          <div className="text-large pt-20">{Utils.convert(datum.main.temp, tempFormat)}°</div>
      </div>
  )
}

export default HourCard
