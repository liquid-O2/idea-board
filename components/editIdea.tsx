//

import Form from './form'

//

function EditIdea({ isEditOpen, setModalVisibility, selectedItem }) {
  if (!isEditOpen) return
  return (
    <div className='modalwrapper'>
      <div className='modalBackground'>
        <div className='container modal-parent flex center-vr center-hr'>
          <div className='modal flex flex-vertical center-vr'>
            <Form
              setIsFormVisible={setModalVisibility}
              isUpdateForm
              selectedItem={selectedItem}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditIdea
