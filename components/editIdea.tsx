import { useRef, useContext } from 'react'

//

import { IdeasContext } from '../src/App'

//

function EditIdea({ editIsOpen, setVisibility, title, text, id }) {
  const ideaContext = useContext(IdeasContext)
  const inputText = useRef(null)
  const inputTitle = useRef(null)

  return (
    <div className='modalwrapper'>
      {editIsOpen ? (
        <div className='modalBackground'>
          <div className='container modal-parent flex center-vr center-hr'>
            <div className='modal flex flex-vertical center-vr'>
              <input
                type='text'
                className='createTitle'
                placeholder='Title'
                autoComplete='false'
                defaultValue={title}
                ref={inputTitle}
                required
              />

              <input
                type='text'
                className='createText'
                placeholder='Enter the description of your idea'
                defaultValue={text}
                autoComplete='false'
                ref={inputText}
              />

              <div className='button-wrapper mt-1'>
                <button
                  className='cancelBtn'
                  onClick={() => {
                    setVisibility((prevVis) => !prevVis)
                  }}>
                  Cancel
                </button>

                <button
                  type='submit'
                  className='submitBtn'
                  onClick={() => {
                    ideaContext.dispatch({
                      type: 'update',
                      updatedTitle: inputTitle.current.value,
                      updatedText: inputText.current.value,
                      id,
                    })
                    setVisibility((prevVis) => !prevVis)
                  }}>
                  Save Idea
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default EditIdea
