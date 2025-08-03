function HourCard() {
  return (
      <div className="hour-card d-flex d-column radius bg-gray justify-content-between text-center">
          <div className="hour-span pb-12">9:00 AM</div>
          <div className="pt-12 weather-container weather-container-snow margin-auto"></div>
          <div className="text-small">Snow</div>
          <div className="text-large pt-20">-1°</div>
      </div>
  )
}

export default HourCard
