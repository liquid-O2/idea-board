/* eslint-disable prettier/prettier */
import { expect, test } from '@jest/globals'
import { sortArray } from '../utils/sort'
import { IdeasType } from '../types'

const alpha = {
  id: '1',
  title: 'Alpha',
  text: 'Lorem ipsum dolor sit amet',
  time: 12221,
  updated: false,
}

const gamma = {
  id: '3',
  title: 'Gamma',
  text: 'Lorem ipsum dolor sit amet',
  time: 12230,
  updated: false,
}

const beta = {
  id: '2',
  title: 'Beta',
  text: 'Lorem ipsum dolor sit amet',
  time: 12223,
  updated: false,
}

const shuffledIdeas: IdeasType[] = [gamma, alpha, beta]

test.each`
  property   | isDescending | expected
  ${'title'} | ${false}     | ${[alpha, beta, gamma]}
  ${'title'} | ${true}     | ${[gamma, beta, alpha]}
  ${'time'} | ${false}     | ${[alpha, beta, gamma]}
  ${'time'} | ${true}     | ${[gamma, beta, alpha]}
`('should sort by $property and isDecending=$isDescending', ({ property, isDescending, expected }) => {
  expect(sortArray(shuffledIdeas, property as string, isDescending as boolean)).toStrictEqual(expected)
})
