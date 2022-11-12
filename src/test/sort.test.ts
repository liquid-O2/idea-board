import { expect, test } from '@jest/globals'
import { sortArray } from '../utils/sort'
import { IdeasType } from '../types'

const testArray: IdeasType[] = [
  {
    id: '1',
    title: 'Alpha',
    text: 'Lorem ipsum dolor sit amet',
    time: 12221,
    updated: false,
  },
  {
    id: '3',
    title: 'Gamma',
    text: 'Lorem ipsum dolor sit amet',
    time: 12230,
    updated: false,
  },
  {
    id: '2',
    title: 'Beta',
    text: 'Lorem ipsum dolor sit amet',
    time: 12223,
    updated: false,
  },
]

test('Takes an array of objects and sorts it by the title in alphabetical order', () => {
  expect(sortArray(testArray, 'title', false)).toStrictEqual([
    {
      id: '1',
      title: 'Alpha',
      text: 'Lorem ipsum dolor sit amet',
      time: 12221,
      updated: false,
    },
    {
      id: '2',
      title: 'Beta',
      text: 'Lorem ipsum dolor sit amet',
      time: 12223,
      updated: false,
    },
    {
      id: '3',
      title: 'Gamma',
      text: 'Lorem ipsum dolor sit amet',
      time: 12230,
      updated: false,
    },
  ])
})

test('Takes an array of objects and sorts it by the title in descending order', () => {
  expect(sortArray(testArray, 'title', true)).toStrictEqual([
    {
      id: '3',
      title: 'Gamma',
      text: 'Lorem ipsum dolor sit amet',
      time: 12230,
      updated: false,
    },
    {
      id: '2',
      title: 'Beta',
      text: 'Lorem ipsum dolor sit amet',
      time: 12223,
      updated: false,
    },
    {
      id: '1',
      title: 'Alpha',
      text: 'Lorem ipsum dolor sit amet',
      time: 12221,
      updated: false,
    },
  ])
})

test('Takes an array of objects and sorts it by the time in ascending order', () => {
  expect(sortArray(testArray, 'time', false)).toStrictEqual([
    {
      id: '1',
      title: 'Alpha',
      text: 'Lorem ipsum dolor sit amet',
      time: 12221,
      updated: false,
    },
    {
      id: '2',
      title: 'Beta',
      text: 'Lorem ipsum dolor sit amet',
      time: 12223,
      updated: false,
    },
    {
      id: '3',
      title: 'Gamma',
      text: 'Lorem ipsum dolor sit amet',
      time: 12230,
      updated: false,
    },
  ])
})

test('Takes an array of objects and sorts it by the time in descending order', () => {
  expect(sortArray(testArray, 'time', true)).toStrictEqual([
    {
      id: '3',
      title: 'Gamma',
      text: 'Lorem ipsum dolor sit amet',
      time: 12230,
      updated: false,
    },
    {
      id: '2',
      title: 'Beta',
      text: 'Lorem ipsum dolor sit amet',
      time: 12223,
      updated: false,
    },
    {
      id: '1',
      title: 'Alpha',
      text: 'Lorem ipsum dolor sit amet',
      time: 12221,
      updated: false,
    },
  ])
})
