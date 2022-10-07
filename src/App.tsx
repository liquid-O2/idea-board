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
    jsTime: null,
  },
];

function compareDate(a, b) {
  const dateA = a.jsTime;
  const dateB = b.jsTime;

  let comparison = 0;
  if (dateA > dateB) {
    comparison = 1;
  } else if (dateA < dateB) {
    comparison = -1;
  }
  return comparison;
}

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
        jsTime: Date.now(),
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
          jsTime: Date.now(),
        };
      } else {
        return idea;
      }
    });
  } else if (action.type === 'Alphabetical') {
    ideas.sort(function (a, b) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
  } else if (action.type === 'Most Recent') {
    ideas.sort(function (a, b) {
      return a.jsTime - b.jsTime;
    });
    console.log(ideas);
  }
};

function App() {
  const [ideas, dispatch] = useReducer(reducer, ideaTemplate);
  const [modalVisibility, setModalVisibility] = useState(false);

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
