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
      />
    </>
  );
}

export default App;
