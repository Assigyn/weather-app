function HourCard() {
  return (
      <div className="hour-card d-flex d-column radius bg-gray justify-content-between text-center">
          <div>9:00 AM</div>
          <div className="weather-container weather-container-snow margin-auto"></div>
          <div>Snow</div>
          <div className="text-big">-1°</div>
      </div>
  )
}

export default HourCard
