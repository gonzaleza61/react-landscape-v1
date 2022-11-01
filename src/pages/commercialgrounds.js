import React from 'react'
import InfoSection from '../components/InfoSection'
import { CommercialData } from '../data/InfoData'

const CommercialDataInfo = () => {
  return (
    <InfoSection {...CommercialData}/>
  )
}

export default CommercialDataInfo