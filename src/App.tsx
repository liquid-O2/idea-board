import { createContext, useReducer, useState, useMemo } from 'react'

//

import './App.css'
import CreateIdea from '../components/createIdea'
import Ideas from '../components/ideas'
import getDate from './utils/getDate'
import reducer from './utils/reducer'

export const IdeasContext = createContext(null)

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
