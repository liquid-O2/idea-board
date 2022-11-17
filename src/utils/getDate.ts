export default function getDate(date: number) {
  const currentDate = new Date(date)
  const day = currentDate.getDate()
  const month = currentDate.getMonth() + 1
  const year = currentDate.getFullYear()
  const hours =
    currentDate.getHours() < 10
      ? `0${currentDate.getHours()}`
      : `${currentDate.getHours()}`
  const minutes =
    currentDate.getMinutes() < 10
      ? `0${currentDate.getMinutes()}`
      : `${currentDate.getMinutes()}`
  const time = `${hours}:${minutes}`
  return `${day}/${month}/${year}   -   ${time}`
}
