export default function getDate(date) {
  const currentDate = new Date(date)
  const day = currentDate.getDate()
  const month = currentDate.getMonth() + 1
  const year = currentDate.getFullYear()
  const time = `${currentDate.getHours()}:${currentDate.getMinutes()}`
  return `${day}/${month}/${year}   -   ${time}`
}
