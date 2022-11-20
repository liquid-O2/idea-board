import userEvent from '@testing-library/user-event'
import { render, screen } from '../test/test-utils'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import '@jest/globals'

import Ideas from '../../components/ideas'

test('Check idea is rendered from global state', async () => {
  const title = 'Idea One'
  const description = 'Description of Idea One'

  //
  render(<Ideas modalVisibility={false} />, {
    ideas: [{ title, id: null, text: description, updated: false, time: 0 }],
  })

  //

  expect(screen.getByText(title)).toBeInTheDocument()
  expect(screen.getByText(description)).toBeInTheDocument()
})

test('Check updated text is rendered from updated idea', async () => {
  const title = 'Idea xasdasd'
  const description = 'Description of asdasdsadadsd One'

  //
  render(<Ideas modalVisibility={false} />, {
    ideas: [{ title, id: null, text: description, updated: true, time: 0 }],
  })

  //

  expect(screen.getByText(title)).toBeInTheDocument()
  expect(screen.getByText(description)).toBeInTheDocument()
  expect(screen.getByText('Updated on : null')).toBeInTheDocument()
  expect(screen.queryByText('Created on : null')).not.toBeInTheDocument()
})

test('Check delete is called with the right id', async () => {
  const user = userEvent.setup()
  const description = 'Description of asdasdsadadsd One'
  const mockDispatch = jest.fn()

  const ideas = [
    { title: 'sunday', id: 'sunday', text: description, updated: true, time: 0 },
    { title: 'monday', id: 'monday', text: description, updated: true, time: 0 },
    { title: 'tuesday', id: 'tuesday', text: description, updated: true, time: 0 },
  ]
  //
  render(<Ideas modalVisibility={false} />, {
    ideas,
    dispatch: mockDispatch,
  })

  await user.click(screen.getByAltText(`delete ${ideas[1].title}`))

  expect(mockDispatch).toHaveBeenCalledWith({ id: 'monday', type: 'delete' })
})

test('Check set modal vis is done properly', async () => {
  const user = userEvent.setup()
  const mockSetModalVisibility = jest.fn()

  const ideas = [
    { title: 'sunday', id: 'sunday', text: 'description', updated: true, time: 0 },
  ]
  //
  render(
    <Ideas modalVisibility={false} setModalVisibility={mockSetModalVisibility} />,
    {
      ideas,
    }
  )

  await user.click(screen.getByAltText('edit'))

  expect(mockSetModalVisibility).toHaveBeenCalledWith(true)
})
