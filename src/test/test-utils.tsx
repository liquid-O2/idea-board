import { render, RenderOptions } from '@testing-library/react'
import { ReactElement, useReducer, useMemo } from 'react'
import { IdeasContext } from '../App'
import { IdeasType, GlobalStateType } from '../types'
import reducer from '../utils/reducer'
import getDate from '../utils/getDate'

const initialIdeas: IdeasType[] = [
  {
    id: null,
    title: '',
    text: '',
    updated: false,
    time: 0,
  },
]

function Providers({ children }) {
  const [ideas, dispatch] = useReducer(reducer, initialIdeas)
  const globalState: GlobalStateType = useMemo(
    () => ({
      dispatch,
      ideas,
      getDate,
    }),
    [dispatch, ideas]
  )
  return (
    <IdeasContext.Provider value={globalState}>{children}</IdeasContext.Provider>
  )
}
const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react'
export { customRender as render }
