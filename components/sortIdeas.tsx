import { useContext } from 'react'

//

import { IdeasContext } from '../src/App'

function SortIdeas({ isVisible }) {
  const ideaContext = useContext(IdeasContext)
  if (!isVisible) return

  return (
    <div className='container flex sort-wrapper'>
      <select
        onChange={(e) =>
          ideaContext.dispatch({ type: 'sort', sortType: e.target.value })
        }>
        <option value='default'> Default </option>
        <option value='alphabetical'> Alphabetical </option>
        <option value='mostRecent'> Most Recent </option>
      </select>
    </div>
  )
}

export default SortIdeas
