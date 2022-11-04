import { createContext, useReducer, useState, useMemo } from 'react'

//

import './App.css'
import CreateIdea from '../components/createIdea'
import Ideas from '../components/ideas'
import getDate from './utils/getDate'
import reducer from './utils/reducer'
import IdeasType from './types/IdeasType'
import GlobalStateType from './types/GlobalStateType'

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
