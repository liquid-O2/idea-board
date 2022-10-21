import { useContext } from 'react'

//

import { IdeasContext } from '../src/App'

function SortIdeas({ hidden }) {
  const ideaContext = useContext(IdeasContext)
  if (!hidden) return

  return (
    <div className='container flex sort-wrapper'>
      <select onChange={(e) => ideaContext.dispatch({ type: e.target.value })}>
        <option value='Default'> Default </option>
        <option value='Alphabetical'> Alphabetical </option>
        <option value='Most Recent'> Most Recent </option>
      </select>
    </div>
  )
}

export default SortIdeas
