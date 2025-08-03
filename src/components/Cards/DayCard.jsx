function DayCard() {
  return (
      <div className="day-card d-flex d-row radius bg-gray justify-content-between align-items-center">
          <div>
              <span className="text-big">Today</span>
          </div>

          <div className="d-flex d-row align-items-center gap-12">
              <div className="weather-container weather-container-snow"></div>
              <span className="text-medium">Snow</span>
          </div>

          <div className="d-flex d-row align-items-center gap-12">
              <div>-1°</div>
              <div className="progress">
                  <div className="progress-bar"></div>
              </div>
              <div>3°</div>
          </div>
      </div>
  )
}

export default DayCard
