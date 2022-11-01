import React from 'react'
import InfoSection from '../components/InfoSection'
import { BaseballData } from '../data/InfoData'

const BaseballInfo = () => {
  return (
    <InfoSection {...BaseballData}/>
  )
}

export default BaseballInfo