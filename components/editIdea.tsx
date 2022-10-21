//

import Form from './form'

//

function EditIdea({ editIsOpen, setVisibility, selectedItem }) {
  if (!editIsOpen) return
  return (
    <div className='modalwrapper'>
      <div className='modalBackground'>
        <div className='container modal-parent flex center-vr center-hr'>
          <div className='modal flex flex-vertical center-vr'>
            <Form
              setCreateVisibility={setVisibility}
              update
              selectedItem={selectedItem}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditIdea
