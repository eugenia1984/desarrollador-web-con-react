import { useState, useEffect } from 'react'

type NoArgFunction = () => void

export default (): [boolean, NoArgFunction, NoArgFunction] => {
  const [loading, setLoading] = useState<boolean>(false)
  const [loaders, setLoaders] = useState<number>(0)

  const addLoading: NoArgFunction = () => setLoaders(prevState => prevState + 1)

  const removeLoading: NoArgFunction = () => setTimeout(() => setLoaders(prevState => prevState - 1), 2000)

  useEffect(() => {
    setLoading(loaders > 0)
  }, [loaders])

  return [loading, addLoading, removeLoading]
}