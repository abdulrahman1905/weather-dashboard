const WeatherIcon = ({icon}) => {
  return (
    <div className="text-center">
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        className="w-100 h-100 align-middle"
        alt="Icon"
      />
    </div>
  )
}

export default WeatherIcon
