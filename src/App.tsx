import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Navbar, Loading } from './components'
import { Dashboard, Search } from './pages'
import { useStore } from './context/Store'

function App() {
  const { state: stateGlobal } = useStore()

  return (
    <div>
      <Navbar />
      <Loading isLoading={stateGlobal.loading} />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </div>
  )
}

export default App
