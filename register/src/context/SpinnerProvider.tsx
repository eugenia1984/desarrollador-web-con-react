import { createContext, useContext } from 'react'
import useLoading from '../hooks/useLoading'
import Loader from '../components/loader/Loader'

const defaultContext = {
  addLoading: () => { },
  removeLoading: () => { }
}

interface AppContextProps {
  addLoading: Function
  removeLoading: Function
}

type SpinnerProviderProps = {
  children: JSX.Element
}

export const SpinnerContext = createContext<AppContextProps>(defaultContext)

export const useSpinner = () => useContext(SpinnerContext)

const SpinnerProvider = ({ children }: SpinnerProviderProps) => {
  const [loading, addLoading, removeLoading] = useLoading()

  return (
    <SpinnerContext.Provider value={ { addLoading, removeLoading } }>
      { loading && <Loader /> }
      { children }
    </SpinnerContext.Provider>
  )
}

export default SpinnerProvider