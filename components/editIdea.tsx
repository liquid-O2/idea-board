//

import Form from './form'
import { SelectedItemType } from '../src/types'
//

interface EditPropsType {
  isEditOpen: boolean;
  setModalVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  selectedItem: SelectedItemType;
}

function EditIdea(editProps: EditPropsType) {
  const { isEditOpen, setModalVisibility, selectedItem } = editProps
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
