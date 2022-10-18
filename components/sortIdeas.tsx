/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react'

function SortIdeas({ hidden, dispatch }) {
  return (
    <>
      {hidden ? (
        <div className='container flex sort-wrapper'>
          <select onChange={(e) => dispatch({ type: e.target.value })}>
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
