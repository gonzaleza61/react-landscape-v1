import React from 'react'
import InfoSection from '../components/InfoSection'
import { PaintingData, ReelData } from '../data/InfoData'

const FieldMarkingInfo = () => {
  return (
    <InfoSection {...PaintingData}/>
  )
}

export default FieldMarkingInfo