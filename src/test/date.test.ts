import { expect, test } from '@jest/globals'
import getDate from '../utils/getDate'

// 01:21 AM Nov 13 Sunday
const testTimestamp = 1668282661352

test('', () => {
  expect(getDate(testTimestamp)).toBe('13/11/2022   -   01:21')
})
