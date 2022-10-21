import { useState } from 'react'

//

import Form from '../components/form'

//

function CreateIdea() {
  const [createVisibility, setCreateVisibility] = useState(false)
  return (
    <div className='container flex center-vr mt-2 flex-vertical'>
      <h1>IdeaBoard</h1>
      <div className='createWrapper flex flex-vertical center-vr mt-2'>
        {createVisibility ? (
          <Form
            setCreateVisibility={setCreateVisibility}
            update={false}
            selectedItem={null}
          />
        ) : (
          <input
            type='text'
            className='placeholder'
            placeholder='Capture and save your ideas'
            autoComplete='false'
            onClick={() => {
              setCreateVisibility(!createVisibility)
            }}
          />
        )}
      </div>
    </div>
  )
}

export default CreateIdea
