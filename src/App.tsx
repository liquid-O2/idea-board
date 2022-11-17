import { createContext, useReducer, useState, useMemo, useEffect } from 'react'

//

import './App.css'
import CreateIdea from '../components/createIdea'
import Ideas from '../components/ideas'
import getDate from './utils/getDate'
import reducer from './utils/reducer'
import { GlobalStateType, IdeasType } from './types'

export const IdeasContext = createContext<GlobalStateType>(null)

let initialIdeas: IdeasType[] = [
  {
    id: null,
    title: '',
    text: '',
    updated: false,
    time: 0,
  },
]

//

function App() {
  const [ideas, dispatch] = useReducer(reducer, initialIdeas)
  const [modalVisibility, setModalVisibility] = useState(false)

  // local storage

  useEffect(() => {
    initialIdeas = JSON.parse(localStorage.getItem('ideas'))
    if (initialIdeas) {
      // eslint-disable-next-line array-callback-return
      initialIdeas.map((localIdeas) => {
        if (localIdeas.title !== '' && localIdeas.text !== '') {
          return dispatch({
            type: 'setIdeas',
            id: localIdeas.id,
            title: localIdeas.title,
            time: localIdeas.time,
            text: localIdeas.text,
            updated: localIdeas.updated,
          })
        }
      })
    }
  }, [])

  //

  useEffect(() => {
    const jsonIdeas = JSON.stringify(ideas)
    localStorage.setItem('ideas', jsonIdeas)
  }, [ideas])

  //

  const globalState: GlobalStateType = useMemo(
    () => ({
      dispatch,
      ideas,
      getDate,
    }),
    [dispatch, ideas]
  )

  //

  return (
    <IdeasContext.Provider value={globalState}>
      <CreateIdea />
      <Ideas
        modalVisibility={modalVisibility}
        setModalVisibility={setModalVisibility}
      />
    </IdeasContext.Provider>
  )
}

export default App
