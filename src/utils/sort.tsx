const sortArray = (array, property) => {
  return [...array].sort((a, b) => {
    if (a[property.name] < b[property.name]) {
      return property.name === 'time' && !property.default ? 1 : -1
    }
    if (a[property.name] > b[property.name]) {
      return property.name === 'time' && !property.default ? -1 : 1
    }
    return 0
  })
}

export default function sort(type, array) {
  if (type === 'alphabetical') {
    return sortArray(array, { name: 'title', default: false })
  }
  if (type === 'mostRecent') {
    return sortArray(array, { name: 'time', default: false })
  }
  if (type === 'default') {
    return sortArray(array, { name: 'time', default: true })
  }
}
