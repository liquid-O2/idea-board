import React, { useContext, useState } from 'react'

//

import EditIdea from './editIdea'
import SortIdeas from './sortIdeas'
import { IdeasContext } from '../src/App'

//

function Ideas({ visibility, setVisibility }) {
  const ideaContext = useContext(IdeasContext)
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
      />

      <SortIdeas hidden={ideaContext.ideas.length > 2} />

      <div className='container flex ideasWrapper mt-2'>
        {ideaContext.ideas.map((idea) => (
          <React.Fragment key={idea.id}>
            {idea.title && idea.text ? (
              <div className='card flex flex-vertical'>
                <p className='card-title'>{idea.title}</p>
                <p className='card-text'>{idea.text}</p>
                <p className='card-time'>
                  {idea.updated
                    ? `Updated on : ${ideaContext.getDate(idea.time)}`
                    : `Created on : ${ideaContext.getDate(idea.time)}`}
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
