import React, { useState } from 'react'
import EditIdea from './editIdea'

import SortIdeas from './sortIdeas'

function Ideas({ ideas, visibility, setVisibility, dispatch }) {
  const [selectedTitle, setSelectedTitle] = useState('')
  const [selectedText, setSelectedText] = useState('')
  const [selectedId, setSelectedId] = useState('')

  return (
    <>
      <EditIdea
        editIsOpen={visibility}
        setVisibility={setVisibility}
        title={selectedTitle}
        text={selectedText}
        id={selectedId}
        dispatch={dispatch}
      />

      <SortIdeas hidden={ideas.length > 2} dispatch={dispatch} />
      <div className='container flex ideasWrapper mt-2'>
        {ideas.map((idea) => (
          <React.Fragment key={idea.id}>
            {idea.title && idea.text ? (
              <div className='card flex flex-vertical'>
                <p className='card-title'>{idea.title}</p>
                <p className='card-text'>{idea.text}</p>
                <p className='card-time'>
                  {idea.updated ? idea.updatedTime : idea.createdTime}
                </p>

                <div
                  className='action-wrapper flex'
                  onClick={() => {
                    setVisibility(!visibility)
                    setSelectedId(idea.id)
                    setSelectedText(idea.text)
                    setSelectedTitle(idea.title)
                  }}>
                  <img src='/EditButton.svg' alt='' />
                </div>
              </div>
            ) : null}
          </React.Fragment>
        ))}
      </div>
    </>
  )
}

export default Ideas
