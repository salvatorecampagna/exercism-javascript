export const gigasecond = (date, seconds = Math.pow(10, 12)) =>
  new Date(date.getTime() + seconds)
