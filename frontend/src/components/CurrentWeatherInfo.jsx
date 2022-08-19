import React from 'react'

const CurrentWeatherInfo = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="fw-bold">
          <i className="bi bi-thermometer"></i>25&deg;C
        </h1>
      </div>
      <div className="text-center pb-1">
        <span className="pe-2">
          <i className="bi bi-arrow-up"></i>25&deg;C
        </span>

        <span className="ps-2">
          <i className="bi bi-arrow-down"></i>18&deg;C
        </span>
      </div>
      <div className="text-center">
        <h3 className="fw-normal">Rainy</h3>
      </div>
    </div>
  )
}

export default CurrentWeatherInfo
