import React, { useState, useRef, useContext } from 'react'

//

import { v4 as uuid } from 'uuid'
import { IdeasContext } from '../src/App'
import SelectedItemType from '../src/types/SelectedItemType'
//

interface FormPropType {
  isUpdateForm: boolean;
  setIsFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
  selectedItem: SelectedItemType;
}

function Form(formProps: FormPropType) {
  const { setIsFormVisible, isUpdateForm, selectedItem } = formProps
  const ideaContext = useContext(IdeasContext)
  const [charactersleft, setCharactersLeft] = useState(140)
  const createTitle = useRef(null)
  const createText = useRef(null)

  //

  const handleSubmit = () => {
    if (isUpdateForm) {
      ideaContext.dispatch({
        type: 'update',
        title: createTitle.current.value,
        text: createText.current.value,
        id: selectedItem.id,
      })
      setIsFormVisible((preVis) => !preVis)
    } else {
      ideaContext.dispatch({
        type: 'submit',
        title: createTitle.current.value,
        text: createText.current.value,
        id: uuid(),
      })
      setIsFormVisible((preVis) => !preVis)
      createTitle.current.value = ''
      createText.current.value = ''
      setCharactersLeft(140)
    }
  }

  //

  return (
    <div className='empty'>
      <input
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
        type='text'
        className='createTitle'
        placeholder='Title'
        defaultValue={isUpdateForm ? selectedItem.title : ''}
        autoComplete='false'
        ref={createTitle}
        required
      />

      <input
        type='text'
        className='createText'
        placeholder='Enter the description of your idea'
        autoComplete='false'
        defaultValue={isUpdateForm ? selectedItem.text : ''}
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
          onClick={() => setIsFormVisible((preVis) => !preVis)}>
          Cancel
        </button>

        <button
          type='submit'
          className='submitBtn'
          onClick={() => {
            handleSubmit()
          }}>
          Save Idea
        </button>
      </div>
    </div>
  )
}

export default Form
