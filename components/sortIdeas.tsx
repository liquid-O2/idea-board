/* eslint-disable react/jsx-no-useless-fragment */
import React, { useContext } from 'react'
import { IdeasContext } from '../src/App'

function SortIdeas({ hidden }) {
  const ideaContext = useContext(IdeasContext)
  return (
    <>
      {hidden ? (
        <div className='container flex sort-wrapper'>
          <select onChange={(e) => ideaContext.dispatch({ type: e.target.value })}>
            <option value='Default'> Default </option>
            <option value='Alphabetical'> Alphabetical </option>
            <option value='Most Recent'> Most Recent </option>
          </select>
        </div>
      ) : null}
    </>
  )
}

export default SortIdeas
