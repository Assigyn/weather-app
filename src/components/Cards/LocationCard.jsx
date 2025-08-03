function LocationCard() {
  return (
      <div className="d-flex d-row radius bg-gray justify-content-between location-card">
          <div className="d-flex d-column justify-content-between gap-4">
              <div>US</div>
              <div className="text-large">New York</div>
              <div className="text-medium pt-8">Clear sky</div>
          </div>

          <div className="d-flex d-column justify-content-between align-items-center gap-12">
              <div className="weather-container weather-container-snow"></div>
              <div className="text-medium">14°</div>
          </div>
      </div>
  )
}

export default LocationCard
