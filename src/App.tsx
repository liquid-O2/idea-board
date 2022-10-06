import { useReducer, useState } from 'react';
import './App.css';
import CreateIdea from '../components/createIdea';
import Ideas from '../components/ideas';

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

const getDate = () => {
  let currentDate = new Date();
  let day = currentDate.getDate();
  let month = currentDate.getMonth() + 1;
  let year = currentDate.getFullYear();
  let time = currentDate.getHours() + ':' + currentDate.getMinutes();
  return `${day}/${month}/${year}   -   ${time}`;
};

const reducer = (ideas, action) => {
  if (action.type === 'submit') {
    return [
      ...ideas,
      {
        title: action.title,
        text: action.text,
        id: action.id,
        createdTime: 'Created on: ' + action.time,
        updated: false,
      },
    ];
  } else if (action.type === 'update') {
    return ideas.map((idea) => {
      if (action.id === idea.id) {
        return {
          ...idea,
          title: action.updatedTitle,
          text: action.updatedText,
          updated: true,
          updatedTime: 'Updated on: ' + getDate(),
        };
      } else {
        return idea;
      }
    });
  }
};

function App() {
  const [ideas, dispatch] = useReducer(reducer, ideaTemplate);
  const [modalVisibility, setModalVisibility] = useState(false);
  // console.log(ideas);
  return (
    <>
      <CreateIdea dispatch={dispatch} />
      <Ideas
        ideas={ideas}
        visibility={modalVisibility}
        setVisibility={setModalVisibility}
        dispatch={dispatch}
      />
    </>
  );
}

export default App;
