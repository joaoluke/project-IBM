import { useEffect, useState } from 'react'

import { Carousel, Card } from '../../components'
import useDashboard from './useDashboard'

export const Dashboard = () => {
  const { getInformation } = useDashboard()

  useEffect(() => {
    getInformation()
  }, [])

  return (
    <div className='App'>
      <Carousel />
      <div className='m-3 flex flex-wrap justify-between'>
        <Card />
      </div>
    </div>
  )
}
