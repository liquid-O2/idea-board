import userEvent from '@testing-library/user-event'
import { render, screen } from '../test/test-utils'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

import '@jest/globals'

import CreateIdea from '../../components/createIdea'
import Ideas from '../../components/ideas'

test('Create an idea and check if it is there', async () => {
  const user = userEvent.setup()
  const title = 'Idea One'
  const decription = 'Description of Idea One'

  //

  render(
    <>
      <CreateIdea />
      <Ideas modalVisibility={false} />
    </>
  )

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
