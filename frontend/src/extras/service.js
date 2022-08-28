const capitalize = (phrase) => {
  return phrase
    .split(' ')
    .map(
      (word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
    )
    .join(' ')
}

const getLocalDate = (timezone) => {
  const d = new Date()
  d.setUTCHours(d.getUTCHours() + d.getTimezoneOffset() / 60 + timezone / 3600)
  const date = d.getDate()
  const year = d.getFullYear()
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const month = months[d.getMonth()]

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const day = days[d.getDay()]

  return `${day} ${month} ${date}, ${year}`
}

const getLocalTime = (timezone) => {
  const d = new Date()
  d.setUTCHours(d.getUTCHours() + d.getTimezoneOffset() / 60 + timezone / 3600)
  return d.toLocaleTimeString()
}

const service = {
  capitalize,
  getLocalDate,
  getLocalTime,
}

export default service
