import { createContext, useReducer, useState, useMemo, useEffect } from 'react'

//

import './App.css'
import CreateIdea from '../components/createIdea'
import Ideas from '../components/ideas'
import getDate from './utils/getDate'
import reducer from './utils/reducer'
import { GlobalStateType, IdeasType } from './types'

export const IdeasContext = createContext<GlobalStateType>(null)

const initialIdeas: IdeasType[] = [
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
    const storedIdeas: IdeasType[] = JSON.parse(localStorage.getItem('storedIdeas'))
    if (storedIdeas) {
      // eslint-disable-next-line array-callback-return
      storedIdeas.map((localIdeas) => {
        const { title, text, time, updated, id } = localIdeas
        if (title !== '' && text !== '') {
          return dispatch({
            type: 'setIdeas',
            id,
            title,
            time,
            text,
            updated,
          })
        }
      })
    }
  }, [])

  //

  useEffect(() => {
    const localIdeas = JSON.stringify(ideas)
    localStorage.setItem('storedIdeas', localIdeas)
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
