import React, { createContext, useState } from 'react'

import { ReactNode } from '../types'

type StoreType = {
  name: string
}

type PropsStoreContext = {
  state: StoreType
  setState: React.Dispatch<React.SetStateAction<StoreType>>
}

const DEFAULT_VALUE = {
  state: {
    name: '',
  },
  setState: () => {},
}

const StoreContext = createContext<PropsStoreContext>(DEFAULT_VALUE)

const StoreContextProvider = ({ children }: any) => {
  const [state, setState] = useState(DEFAULT_VALUE.state)

  return (
    <StoreContext.Provider value={{ state, setState }}>
      {children}
    </StoreContext.Provider>
  )
}

export { StoreContextProvider }

export default StoreContextProvider
