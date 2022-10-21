export default function sort(type, array) {
  const copyArray = [...array]
  if (type === 'alphabetical') {
    return array.slice().sort((a, b) => {
      if (a.title < b.title) {
        return -1
      }
      if (a.title > b.title) {
        return 1
      }
      return 0
    })
  }
  if (type === 'mostRecent') {
    return array.slice().sort((a, b) => {
      if (a.time < b.time) {
        return 1
      }
      if (a.time > b.time) {
        return -1
      }
      return 0
    })
  }
  if (type === 'default') {
    return copyArray
  }
}
