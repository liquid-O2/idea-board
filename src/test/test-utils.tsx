/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-constructed-context-values */
import { render, RenderOptions } from '@testing-library/react'
import { ReactElement } from 'react'
import { IdeasContext } from '../App'
import { GlobalStateType } from '../types'

function Providers({ children, context }) {
  return (
    <IdeasContext.Provider
      value={{
        ideas: [],
        dispatch: () => null,
        getDate: () => null,
        ...context,
      }}>
      {children}
    </IdeasContext.Provider>
  )
}
const customRender = (
  ui: ReactElement,
  context?: Partial<GlobalStateType>,
  options?: Omit<RenderOptions, 'wrapper'>
) =>
  render(ui, {
    wrapper: () => <Providers context={context}>{ui}</Providers>,
    ...options,
  })

export * from '@testing-library/react'
export { customRender as render }
