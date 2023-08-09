// Given the angle (in degrees) of the hour-hand, return the time in 12 hour HH:MM format. Round down to the nearest minute.

const whatTimeIsIt = (angle) => {
  const remainingAngle = angle % 360
  const hours = Math.floor(remainingAngle / 30).toString()
  const formattedHours = hours === '0' ? '12' : hours
  const minutes = Math.floor((remainingAngle % 30) * 2).toString()
  const seconds = Math.floor(((remainingAngle % 30) * 2) * 0.6).toString()
  console.log(seconds)

  return `${formattedHours.padStart(2, '0')}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`
}

console.log(whatTimeIsIt(0))