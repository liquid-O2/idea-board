import React, { useState, useRef, useContext } from 'react'

//

import { v4 as uuid } from 'uuid'
import { IdeasContext } from '../src/App'

//

function Form({ setCreateVisibility, update, selectedItem }) {
  const ideaContext = useContext(IdeasContext)
  const [charactersleft, setCharactersLeft] = useState(140)
  const createTitle = useRef(null)
  const createText = useRef(null)

  //

  return (
    <div className='empty'>
      //
      <input
        type='text'
        className='createTitle'
        placeholder='Title'
        defaultValue={update ? selectedItem.title : ''}
        autoComplete='false'
        ref={createTitle}
        required
      />
      //
      <input
        type='text'
        className='createText'
        placeholder='Enter the description of your idea'
        autoComplete='false'
        defaultValue={update ? selectedItem.text : ''}
        ref={createText}
        onChange={(e) => {
          if (e.target.value === '') {
            setCharactersLeft(140)
          }
          setCharactersLeft(140 - e.target.value.length)
        }}
        required
      />
      //
      <p className='counter'>{charactersleft} characters left</p>
      //
      <div className='button-wrapper mt-1'>
        //
        <button
          className='cancelBtn'
          onClick={() => setCreateVisibility((preVis) => !preVis)}>
          Cancel
        </button>
        //
        <button
          type='submit'
          className='submitBtn'
          onClick={() => {
            if (!update) {
              ideaContext.dispatch({
                type: 'submit',
                title: createTitle.current.value,
                text: createText.current.value,
                id: uuid(),
              })
              setCreateVisibility((preVis) => !preVis)
              createTitle.current.value = ''
              createText.current.value = ''
              setCharactersLeft(140)
            } else {
              ideaContext.dispatch({
                type: 'update',
                updatedTitle: createTitle.current.value,
                updatedText: createText.current.value,
                id: selectedItem.id,
              })
              setCreateVisibility((preVis) => !preVis)
            }
          }}>
          Save Idea
        </button>
      </div>
    </div>
  )
}

export default Form
