import { useReducer, useRef, useState } from 'react';
import './App.css';

let ideaTemplate = [
  {
    id: null,
    title: null,
    text: null,
    createdTime: null,
    updatedTime: null,
    updated: false,
  },
];

const reducer = (ideas, action) => {
  if (action.type === 'submit') {
    return [
      ...ideas,
      {
        title: action.title,
        text: action.text,
        createdTime: 'Created on: ' + action.time,
      },
    ];
  }
};

const getDate = () => {
  let currentDate = new Date();
  let day = currentDate.getDate();
  let month = currentDate.getMonth() + 1;
  let year = currentDate.getFullYear();
  let time = currentDate.getHours() + ':' + currentDate.getMinutes();
  return `${day}/${month}/${year}   -   ${time}`;
};

function App() {
  const [createVisibility, setCreateVisibility] = useState(false);
  const [charactersleft, setCharactersLeft] = useState(140);
  const [ideas, dispatch] = useReducer(reducer, ideaTemplate);
  const createTitle = useRef(null);
  const createText = useRef(null);

  localStorage.setItem('title', JSON.stringify(ideas));
  const localIdeas = JSON.parse(localStorage.getItem('array'));
  return (
    <>
      <div className='container flex center-vr mt-2 flex-vertical'>
        <h1>IdeaBoard</h1>
        <div className='createWrapper flex flex-vertical center-vr mt-2'>
          {createVisibility ? (
            <>
              <input
                type='text'
                className='createTitle'
                placeholder='Title'
                autoComplete='false'
                hidden={!createVisibility}
                ref={createTitle}
                required
              />
              <input
                type='text'
                className='createText'
                placeholder='Enter the description of your idea'
                autoComplete='false'
                ref={createText}
                onChange={(e) => {
                  if (e.target.value === '') {
                    setCharactersLeft(140);
                  }
                  setCharactersLeft(140 - e.target.value.length);
                }}
                required
              />
              <p className='counter'>{charactersleft} characters left</p>
              <div className='button-wrapper mt-1'>
                <button
                  className='cancelBtn'
                  onClick={() => setCreateVisibility(!createVisibility)}
                >
                  Cancel
                </button>
                <button
                  type='submit'
                  className='submitBtn'
                  onClick={() => {
                    dispatch({
                      type: 'submit',
                      title: createTitle.current.value,
                      text: createText.current.value,
                      time: getDate(),
                    });
                    setCreateVisibility(!createVisibility);
                    localStorage.setItem(
                      'array',
                      JSON.stringify([...ideas, ideas])
                    );
                    createTitle.current.value = '';
                    createText.current.value = '';
                  }}
                >
                  Save Idea
                </button>
              </div>
            </>
          ) : (
            <input
              type='text'
              className='placeholder'
              placeholder='Capture and save your ideas'
              autoComplete='false'
              onClick={() => setCreateVisibility(!createVisibility)}
            />
          )}
        </div>
      </div>
      <div className='container flex ideasWrapper mt-2'>
        {localIdeas.map((idea) => (
          <>
            {idea.title && idea.text ? (
              <div className='card flex flex-vertical'>
                <p className='card-title'>{idea.title}</p>
                <p className='card-text'>{idea.text}</p>
                <p className='card-time'>
                  {idea.updated ? idea.updatedTime : idea.createdTime}
                </p>

                <div className='action-wrapper flex'>
                  <img src='/EditButton.svg' alt='' />
                </div>
              </div>
            ) : null}
          </>
        ))}
      </div>
    </>
  );
}

export default App;
