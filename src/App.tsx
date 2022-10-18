/* eslint-disable import/no-unresolved */
import { useReducer, useState } from 'react'

//

import './App.css'
import CreateIdea from '../components/createIdea'
import Ideas from '../components/ideas'

//

const ideaTemplate = [
  {
    id: null,
    title: null,
    text: null,
    createdTime: null,
    updatedTime: null,
    updated: false,
    jsTime: null,
  },
]

//

const getDate = () => {
  const currentDate = new Date()
  const day = currentDate.getDate()
  const month = currentDate.getMonth() + 1
  const year = currentDate.getFullYear()
  const time = `${currentDate.getHours()}:${currentDate.getMinutes()}`
  return `${day}/${month}/${year}   -   ${time}`
}

const reducer = (ideas, action) => {
  switch (action.type) {
    //

    case 'submit':
      return [
        ...ideas,
        {
          title: action.title,
          text: action.text,
          id: action.id,
          createdTime: `Created on: ${getDate()}`,
          updated: false,
          jsTime: Date.now(),
        },
      ]

    //

    case 'update':
      return ideas.map((idea) => {
        if (action.id === idea.id) {
          return {
            ...idea,
            title: action.updatedTitle,
            text: action.updatedText,
            updated: true,
            updatedTime: `Updated on: ${getDate()}`,

            jsTime: Date.now(),
          }
        }
        return idea
      })

    //

    default:
      return ideas
  }
}

function App() {
  const [ideas, dispatch] = useReducer(reducer, ideaTemplate)
  const [modalVisibility, setModalVisibility] = useState(false)

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
  )
}

export default App
