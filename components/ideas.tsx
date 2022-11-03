import React, { useContext, useState } from 'react'

//

import EditIdea from './editIdea'
import SortIdeas from './sortIdeas'
import { IdeasContext } from '../src/App'

//

function Ideas({ modalVisibility, setModalVisibility }) {
  const ideaContext = useContext(IdeasContext)
  const [selectedItem, setSelectedItem] = useState({ title: '', text: '', id: '' })

  return (
    <>
      <EditIdea
        isEditOpen={modalVisibility}
        setModalVisibility={setModalVisibility}
        selectedItem={selectedItem}
      />

      <SortIdeas isVisible={ideaContext.ideas.length > 2} />

      <div className='container flex ideasWrapper mt-2'>
        {ideaContext.ideas.map((idea) => {
          if (!(idea.title && idea.text)) return
          return (
            <React.Fragment key={idea.id}>
              <div className='card flex flex-vertical'>
                <p className='card-title'>{idea.title}</p>
                <p className='card-text'>{idea.text}</p>
                <p className='card-time'>
                  {idea.updated
                    ? `Updated on : ${ideaContext.getDate(idea.time)}`
                    : `Created on : ${ideaContext.getDate(idea.time)}`}
                </p>
                <div className='action-wrapper flex'>
                  <div className='buttons'>
                    <button
                      onClick={() => {
                        ideaContext.dispatch({ type: 'delete', id: idea.id })
                      }}>
                      <img src='/DeleteButton.svg' alt='' />
                    </button>
                    <button
                      onClick={() => {
                        setModalVisibility(!modalVisibility)
                        setSelectedItem({
                          title: idea.title,
                          text: idea.text,
                          id: idea.id,
                        })
                      }}>
                      <img src='/EditButton.svg' alt='' />
                    </button>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )
        })}
      </div>
    </>
  )
}

export default Ideas
