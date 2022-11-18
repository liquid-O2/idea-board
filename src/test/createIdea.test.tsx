import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, test } from '@jest/globals'

import App from '../App'

test('Create an idea and test if it gets displayed', async () => {
  //

  render(<App />)

  //

  const user = userEvent.setup()

  //

  await user.click(screen.getByText('Capture and save your ideas'))
  await user.type(screen.getByPlaceholderText('Title'), 'Idea One')
  await user.type(
    screen.getByPlaceholderText('Enter the description of your idea'),
    'Description of Idea One'
  )
  await user.click(screen.getByText('Save Idea'))

  //

  expect(screen.getByTestId('card-title').innerHTML).toBe('Idea One')
  expect(screen.getByTestId('card-text').innerHTML).toBe('Description of Idea One')
})
