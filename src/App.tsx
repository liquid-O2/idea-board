import { createContext, useReducer, useState, useMemo } from 'react'

//

import './App.css'
import CreateIdea from '../components/createIdea'
import Ideas from '../components/ideas'

//

export const IdeasContext = createContext(null)

const getDate = (date) => {
  const currentDate = new Date(date)
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
          time: Date.now(),
          updated: false,
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
            time: Date.now(),
          }
        }
        return idea
      })

    //

    default:
      return ideas
  }
}

//

const ideaTemplate = [
  {
    id: null,
    title: null,
    text: null,
    updated: false,
    time: null,
  },
]

//

function App() {
  const [ideas, dispatch] = useReducer(reducer, ideaTemplate)
  const [modalVisibility, setModalVisibility] = useState(false)
  //

  const globalIdeas = useMemo(
    () => ({
      dispatch,
      ideas,
      getDate,
    }),
    [dispatch, ideas]
  )

  //
  return (
    <IdeasContext.Provider value={globalIdeas}>
      <CreateIdea />
      <Ideas visibility={modalVisibility} setVisibility={setModalVisibility} />
    </IdeasContext.Provider>
  )
}

export default App
