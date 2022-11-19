import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import '@jest/globals'

import App from '../App'

describe('Create Idea', () => {
  test('if the idea is displayed or not', async () => {
    //

    render(<App />)

    //

    const user = userEvent.setup()
    const title = 'Idea One'
    const decription = 'Description of Idea One'

    //

    await user.click(screen.getByText('Capture and save your ideas'))
    await user.type(screen.getByPlaceholderText('Title'), title)
    await user.type(
      screen.getByPlaceholderText('Enter the description of your idea'),
      decription
    )
    await user.click(screen.getByText('Save Idea'))

    //

    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.getByText(decription)).toBeInTheDocument()
  })
})
