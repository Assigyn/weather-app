function CityCard() {
  return (
      <div className="city-card d-flex d-column radius bg-gray gap-12">
          <div className="d-flex flex-row justify-content-between align-items-center w-100">
              <div className="temperature text-large">- 1%</div>
              <div className="city text-right">
                  <div className="text-big">Helsinki</div>
                  <div className="text-regular">11:45 AM</div>
              </div>
          </div>

          <div className="d-flex flex-row justify-content-between align-items-center w-100">
              <div>Snow</div>
              <div>5.12 m/s</div>
          </div>

          <div className="d-flex flex-row justify-content-between align-items-center w-100">
              <div>Feel like: -4°C</div>
              <div>-1° to 3°c</div>
          </div>
      </div>
  )
}

export default CityCard
