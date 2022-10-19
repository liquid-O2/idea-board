import React, { useRef, useState, useContext } from 'react'

//

import { v4 as uuid } from 'uuid'
import { IdeasContext } from '../src/App'

//

function CreateIdea() {
  const ideaContext = useContext(IdeasContext)
  const [createVisibility, setCreateVisibility] = useState(false)
  const [charactersleft, setCharactersLeft] = useState(140)
  const createTitle = useRef(null)
  const createText = useRef(null)
  return (
    <div className='container flex center-vr mt-2 flex-vertical'>
      <h1>IdeaBoard</h1>
      <div className='createWrapper flex flex-vertical center-vr mt-2'>
        {createVisibility ? (
          <>
            <input
              type='text'
              className='createTitle'
              placeholder='Title'
              autoComplete='false'
              hidden={!createVisibility}
              ref={createTitle}
              required
            />
            <input
              type='text'
              className='createText'
              placeholder='Enter the description of your idea'
              autoComplete='false'
              ref={createText}
              onChange={(e) => {
                if (e.target.value === '') {
                  setCharactersLeft(140)
                }
                setCharactersLeft(140 - e.target.value.length)
              }}
              required
            />
            <p className='counter'>{charactersleft} characters left</p>
            <div className='button-wrapper mt-1'>
              <button
                className='cancelBtn'
                onClick={() => setCreateVisibility(!createVisibility)}>
                Cancel
              </button>
              <button
                type='submit'
                className='submitBtn'
                onClick={() => {
                  ideaContext.dispatch({
                    type: 'submit',
                    title: createTitle.current.value,
                    text: createText.current.value,
                    id: uuid(),
                  })
                  setCreateVisibility(!createVisibility)
                  createTitle.current.value = ''
                  createText.current.value = ''
                  setCharactersLeft(140)
                }}>
                Save Idea
              </button>
            </div>
          </>
        ) : (
          <input
            type='text'
            className='placeholder'
            placeholder='Capture and save your ideas'
            autoComplete='false'
            onClick={() => {
              setCreateVisibility(!createVisibility)
              setCharactersLeft(140)
            }}
          />
        )}
      </div>
    </div>
  )
}

export default CreateIdea
