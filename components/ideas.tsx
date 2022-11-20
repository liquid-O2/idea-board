/* eslint-disable react/require-default-props */
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

function Ideas({ modalVisibility, setModalVisibility }: IdeasPropsType) {
  const { ideas, dispatch, getDate } = useContext(IdeasContext)
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

      <SortIdeas isVisible={ideas.length > 2} />

      <div className='container flex ideasWrapper mt-2'>
        {ideas.map((idea) => {
          const { title, text, updated, id, time } = idea
          if (!(title && text)) return
          return (
            <div key={id} className='card flex flex-vertical'>
              <p data-testid='card-title' className='card-title'>
                {title}
              </p>
              <p data-testid='card-text' className='card-text'>
                {text}
              </p>
              <p className='card-time'>
                {updated
                  ? `Updated on : ${getDate(time)}`
                  : `Created on : ${getDate(time)}`}
              </p>
              <div className='action-wrapper flex'>
                <div className='buttons'>
                  <button
                    onClick={() => {
                      dispatch({ type: 'delete', id })
                    }}>
                    <img src='/DeleteButton.svg' alt={`delete ${title}`} />
                  </button>
                  <button
                    onClick={() => {
                      setModalVisibility(!modalVisibility)
                      setSelectedItem({
                        title,
                        text,
                        id,
                      })
                    }}>
                    <img src='/EditButton.svg' alt='edit' />
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
