import { useRef } from 'react';

const EditIdea = ({ editIsOpen, setVisibility, title, text, id, dispatch }) => {
  //   const [charLeft, setCharLeft] = useState(
  //     text.length ? 140 - text.length : 140
  //   );

  const inputText = useRef(null);
  const inputTitle = useRef(null);

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
                // onChange={(e) => {
                //   setCharLeft(140 - e.target.value.length);
                // }}
              />
              {/* <p className='counter'> {charLeft} characters left</p> */}
              <div className='button-wrapper mt-1'>
                <button
                  className='cancelBtn'
                  onClick={() => {
                    setVisibility((prevVis) => !prevVis);
                  }}
                >
                  Cancel
                </button>
                <button
                  type='submit'
                  className='submitBtn'
                  onClick={() => {
                    dispatch({
                      type: 'update',
                      updatedTitle: inputTitle.current.value,
                      updatedText: inputText.current.value,
                      id: id,
                    });
                    setVisibility((prevVis) => !prevVis);
                  }}
                >
                  Save Idea
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default EditIdea;
