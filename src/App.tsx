import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Navbar, Loading } from './components'
import { Dashboard, Search, MyLibrary } from './pages'
import { useStore } from './context/Store'

function App() {
  const { loading } = useStore()

  return (
    <div>
      <Navbar />
      <Loading isLoading={loading} />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/search' element={<Search />} />
        <Route path='/my-library' element={<MyLibrary />} />
      </Routes>
    </div>
  )
}

export default App
