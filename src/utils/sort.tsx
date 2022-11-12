import { IdeasType } from '../types'

export const sortArray = (
  array: IdeasType[],
  property: string,
  isDescending: boolean
) => {
  return [...array].sort((a, b) => {
    if (a[property] < b[property]) {
      return isDescending ? 1 : -1
    }
    if (a[property] > b[property]) {
      return isDescending ? -1 : 1
    }
    return 0
  })
}

export default function sort(type: string, array: IdeasType[]) {
  if (type === 'alphabetical') {
    return sortArray(array, 'title', false)
  }
  if (type === 'mostRecent') {
    return sortArray(array, 'time', false)
  }
  if (type === 'default') {
    return sortArray(array, 'time', true)
  }
}
