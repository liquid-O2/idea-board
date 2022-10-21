import React, { useContext, useState } from 'react'

//

import EditIdea from './editIdea'
import SortIdeas from './sortIdeas'
import { IdeasContext } from '../src/App'

//

function Ideas({ visibility, setVisibility }) {
  const ideaContext = useContext(IdeasContext)
  const [selectedItem, setSelectedItem] = useState({ title: '', text: '', id: '' })

  return (
    <>
      <EditIdea
        editIsOpen={visibility}
        setVisibility={setVisibility}
        selectedItem={selectedItem}
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
                    setSelectedItem({
                      title: idea.title,
                      text: idea.text,
                      id: idea.id,
                    })
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
