import React, { useContext, useState } from 'react'

//

import EditIdea from './editIdea'
import SortIdeas from './sortIdeas'
import { IdeasContext } from '../src/App'
import { SelectedItemType } from '../src/types'

//

interface IdeasPropsType {
  modalVisibility: boolean;
  setModalVisibility?: React.Dispatch<React.SetStateAction<boolean>>;
}

function Ideas(ideasProp: IdeasPropsType) {
  const { modalVisibility, setModalVisibility } = ideasProp
  const ideaContext = useContext(IdeasContext)
  const [selectedItem, setSelectedItem] = useState<SelectedItemType>({
    title: '',
    text: '',
    id: null,
  })

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
            <div key={idea.id} className='card flex flex-vertical'>
              <p data-testid='card-title' className='card-title'>
                {idea.title}
              </p>
              <p data-testid='card-text' className='card-text'>
                {idea.text}
              </p>
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
          )
        })}
      </div>
    </>
  )
}

export default Ideas
