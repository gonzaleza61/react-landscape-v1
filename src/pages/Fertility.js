import React from 'react'
import InfoSection from '../components/InfoSection'
import { FertilityData } from '../data/InfoData'

const FertilityInfo = () => {
  return (
    <InfoSection {...FertilityData}/>
  )
}

export default FertilityInfo